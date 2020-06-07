const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  ////////// 注入属性 //////////
  @property(cc.Prefab)
  starPrefab: cc.Prefab = null; // 这个属性引用了星星预制资源

  // 星星产生后消失时间的随机范围
  @property
  maxStarDuration: number = 0;
  @property
  minStarDuration: number = 0;

  @property(cc.Node)
  ground: cc.Node = null; // 地面节点，用于确定星星生成的高度

  @property(cc.Node)
  player: cc.Node = null; // player 节点，用于获取主角弹跳的高度，和控制主角行动开关

  @property(cc.Label)
  scoreDisplay: cc.Label = null; // score Label 的引用

  @property({ type: cc.AudioClip })
  scoreAudio: cc.AudioClip = null; // 得分音效资源

  ////////// 默认属性 //////////
  groundY: number = 0; // 地平面的 y 轴坐标
  score: number = 0; // 计分
  timer: number = 0; // 计时器
  starDuration: number = 0; // 星星存活时间

  ////////// 生命周期 //////////
  onLoad(): void {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2;

    // 初始化计时器
    this.timer = 0;
    this.starDuration = 0;

    // 生成一个新的星星
    this.spawnNewStar();

    // 初始化计分
    this.score = 0;
  }

  start(): void {}

  update(dt: number): void {
    // 每帧更新计时器，超过限度还没生成新的星星
    // 就会调用游戏失败的逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }
    this.timer += dt;
  }

  onDestroy(): void {}

  ////////// 功能函数 //////////
  /**
   * 生成一个新的星星
   */
  spawnNewStar(): void {
    // 使用给定的模板在场景生成一个新的节点
    let newStar: cc.Node = cc.instantiate(this.starPrefab);

    // 将新增的节点添加到 Canvas 节点下面
    this.node.addChild(newStar);

    // 为星星设置一个随机的位置
    newStar.setPosition(this.getNewStarPosition());

    // 在星星组件上暂存 Game 对象的引用
    newStar.getComponent("Star").game = this;

    // 重置计时器，根据消失时间范围随机取一个值
    this.starDuration =
      this.minStarDuration +
      Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  }

  /**
   * 设置一个随机的位置
   */
  getNewStarPosition(): cc.Vec2 {
    let randX: number = 0;

    // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
    let randY: number =
      this.groundY +
      Math.random() * this.player.getComponent("Player").jumpHeight +
      50;

    // 根据屏幕宽度，随机得到一个星星 x 坐标
    let maxX: number = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;

    // 返回星星坐标
    return cc.v2(randX, randY);
  }

  /**
   * 计算得分
   */
  gainScore(): void {
    this.score += 1;

    // 更新scoreDisplay Label 的文字
    this.scoreDisplay.string = "Score:" + this.score;

    // 播放得分音效
    cc.audioEngine.playEffect(this.scoreAudio, false);
  }

  /**
   * 游戏结束
   */
  gameOver() {
    this.player.stopAllActions(); // 停止 player 节点的跳跃动作
    cc.director.loadScene("game"); // 重新加载 game 场景
  }
}
