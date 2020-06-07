import Game from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Star extends cc.Component {
  ////////// 注入属性 //////////
  @property
  pickRadius: number = 0; // 星星和主角之间的距离小于这个数值时，就会完成收集

  ////////// 默认属性 //////////
  game: Game = null; // 对Game对象的引用

  ////////// 生命周期 //////////

  onLoad(): void {}

  start(): void {}

  update(dt: number): void {
    // 根据 Game 脚本中的计时器更新星星透明度
    let opacityRatio: number = 1 - this.game.timer / this.game.starDuration;
    let minOpacity: number = 50;
    this.node.opacity =
      minOpacity + Math.floor(opacityRatio * (255 - minOpacity));

    // 每帧判断和主角之间的距离是否小于收集距离
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    }
  }

  onDestroy(): void {}

  ////////// 功能函数 //////////
  /**
   * 返回星星与主角之间的距离
   */
  getPlayerDistance(): number {
    // 根据 player 节点位置判断距离
    let playerPos: cc.Vec2 = this.game.player.getPosition();

    // 根据两点位置计算两点之间距离
    let dist: number = this.node.getPosition().sub(playerPos).mag();

    return dist;
  }

  /**
   * 当星星被收集时
   */
  onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    this.game.spawnNewStar();

    // 调用 Game 脚本的得分方法
    this.game.gainScore();

    // 然后销毁当前星星节点
    this.node.destroy();
  }
}
