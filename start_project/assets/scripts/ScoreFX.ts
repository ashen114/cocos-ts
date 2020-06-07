import Game from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScoreFX extends cc.Component {
  ////////// 注入属性 //////////
  @property({ type: cc.Animation })
  anim: cc.Animation = null; // 动画对象

  ////////// 默认属性 //////////
  game: Game = null;

  ////////// 生命周期 //////////

  ////////// 功能函数 //////////
  /**
   * 初始化
   */
  init(game: Game) {
    this.game = game;
    this.anim.getComponent("ScoreAnim").init(this);
  }

  /**
   * 储存当前节点到分数对象池
   */
  despawn(): void {
    this.game.despawnScoreFX(this.node);
  }

  /**
   * 开始
   */
  play(): void {
    this.anim.play("score_pop");
  }
}
