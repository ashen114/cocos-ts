import ScoreFX from "./ScoreFX";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScoreAnim extends cc.Component {
  ////////// 注入属性 //////////

  ////////// 默认属性 //////////
  scoreFX: ScoreFX = null;

  ////////// 生命周期 //////////

  ////////// 功能函数 //////////
  /**
   * 初始化
   */
  init(scoreFX: ScoreFX): void {
    this.scoreFX = scoreFX;
  }

  /**
   * 隐藏特效
   */
  hideFX() {
    this.scoreFX.despawn();
  }
}
