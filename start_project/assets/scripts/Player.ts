// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
  ////////// 注入属性 //////////
  @property
  jumpHeight: number = 0; // 主角跳跃高度

  @property
  jumpDuration: number = 0; // 主角跳跃持续时间

  @property
  maxMoveSpeed: number = 0; // 最大移动速度

  @property
  accel: number = 0; // 加速度

  @property({ type: cc.AudioClip })
  jumpAudio: cc.AudioClip = null; // 跳跃音效资源

  @property
  squashDuration: number = 0; // 辅助形变动作时间

  ////////// 默认属性 //////////
  accLeft: boolean = false; // 向左的加速度
  accRight: boolean = false; // 向右的加速度
  xSpeed: number = 0; // 主角当前水平方向的速度
  jumpAction: cc.ActionInterval = null; // 跳跃动作类

  ////////// 生命周期 //////////

  onLoad(): void {
    // 初始化跳跃动作
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction);

    // 加速度方向开关
    this.accLeft = false;
    this.accRight = false;

    // 主角当前水平方向速度
    this.xSpeed = 0;

    // 初始化键盘键入监听
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

    // 初始化触屏输入监听
    let touchReceiver: cc.Node = cc.Canvas.instance.node;
    touchReceiver.on("touchstart", this.onTouchStart, this);
    touchReceiver.on("touchend", this.onTouchEnd, this);
  }

  start(): void {}

  update(dt: number) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    // 限制主角的速度不能超过最大值
    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = (this.maxMoveSpeed * this.xSpeed) / Math.abs(this.xSpeed);
    }

    // 根据当前速度更新主角的位置
    this.node.x += this.xSpeed * dt;
  }

  onDestroy(): void {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

    // 取消触屏输入监听
    let touchReceiver: cc.Node = cc.Canvas.instance.node;
    touchReceiver.off("touchstart", this.onTouchStart, this);
    touchReceiver.off("touchend", this.onTouchEnd, this);
  }

  ////////// 功能函数 //////////

  /**
   * 设置跳跃
   */
  setJumpAction(): cc.ActionInterval {
    // 跳跃上升
    let jumpUp: cc.ActionInstant = cc
      .moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight))
      .easing(cc.easeCubicActionOut());

    // 下落
    let jumpDown: cc.ActionInstant = cc
      .moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight))
      .easing(cc.easeCubicActionIn());

    // 形变
    let squash: cc.ActionInterval = cc.scaleTo(this.squashDuration, 1, 0.6);
    let stretch: cc.ActionInterval = cc.scaleTo(this.squashDuration, 1, 1.2);
    let scaleBack: cc.ActionInterval = cc.scaleTo(this.squashDuration, 1, 1);

    // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
    let callback: cc.ActionInstant = cc.callFunc(this.playJumpSound, this);

    // 不断重复，而且每次完成落地动作后调用回调来播放声音
    return cc.repeatForever(
      cc.sequence(squash, stretch, jumpUp, scaleBack, jumpDown, callback)
    );
  }

  //---- BEGIN:[输入监听] ----//
  /**
   * 按下键盘
   * @param {cc.Event.EventKeyboard} event 按键事件
   */
  onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;
      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  }

  /**
   * 弹起键盘
   * @param {cc.Event.EventKeyboard} event 弹起的按键事件
   */
  onKeyUp(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;
      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  }

  onTouchStart(event: cc.Event.EventTouch) {
    let touchLoc = event.getLocation();

    if (touchLoc.x >= cc.winSize.width / 2) {
      // 若触屏的 x 大于屏幕宽度的 一半 （右边）
      this.accLeft = false;
      this.accRight = true;
    } else {
      this.accLeft = true;
      this.accRight = false;
    }
  }

  onTouchEnd(event: cc.Event.EventTouch) {
    this.accLeft = false;
    this.accRight = false;
  }
  //---- END:[输入监听] ----//

  /**
   * 播放跳跃的声音
   */
  playJumpSound(): void {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  }
}
