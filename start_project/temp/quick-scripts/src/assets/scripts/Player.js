"use strict";
cc._RF.push(module, '408969I04pHWLwwmZSktBB1', 'Player');
// scripts/Player.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        ////////// 注入属性 //////////
        _this.jumpHeight = 0; // 主角跳跃高度
        _this.jumpDuration = 0; // 主角跳跃持续时间
        _this.maxMoveSpeed = 0; // 最大移动速度
        _this.accel = 0; // 加速度
        _this.jumpAudio = null; // 跳跃音效资源
        _this.squashDuration = 0; // 辅助形变动作时间
        ////////// 默认属性 //////////
        _this.accLeft = false; // 向左的加速度
        _this.accRight = false; // 向右的加速度
        _this.xSpeed = 0; // 主角当前水平方向的速度
        _this.jumpAction = null; // 跳跃动作类
        return _this;
    }
    ////////// 生命周期 //////////
    Player.prototype.onLoad = function () {
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
        var touchReceiver = cc.Canvas.instance.node;
        touchReceiver.on("touchstart", this.onTouchStart, this);
        touchReceiver.on("touchend", this.onTouchEnd, this);
    };
    Player.prototype.start = function () { };
    Player.prototype.update = function (dt) {
        // 根据当前加速度方向每帧更新速度
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = (this.maxMoveSpeed * this.xSpeed) / Math.abs(this.xSpeed);
        }
        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
    };
    Player.prototype.onDestroy = function () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // 取消触屏输入监听
        var touchReceiver = cc.Canvas.instance.node;
        touchReceiver.off("touchstart", this.onTouchStart, this);
        touchReceiver.off("touchend", this.onTouchEnd, this);
    };
    ////////// 功能函数 //////////
    /**
     * 设置跳跃
     */
    Player.prototype.setJumpAction = function () {
        // 跳跃上升
        var jumpUp = cc
            .moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight))
            .easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc
            .moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight))
            .easing(cc.easeCubicActionIn());
        // 形变
        var squash = cc.scaleTo(this.squashDuration, 1, 0.6);
        var stretch = cc.scaleTo(this.squashDuration, 1, 1.2);
        var scaleBack = cc.scaleTo(this.squashDuration, 1, 1);
        // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
        var callback = cc.callFunc(this.playJumpSound, this);
        // 不断重复，而且每次完成落地动作后调用回调来播放声音
        return cc.repeatForever(cc.sequence(squash, stretch, jumpUp, scaleBack, jumpDown, callback));
    };
    //---- BEGIN:[输入监听] ----//
    /**
     * 按下键盘
     * @param {cc.Event.EventKeyboard} event 按键事件
     */
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    };
    /**
     * 弹起键盘
     * @param {cc.Event.EventKeyboard} event 弹起的按键事件
     */
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    Player.prototype.onTouchStart = function (event) {
        var touchLoc = event.getLocation();
        if (touchLoc.x >= cc.winSize.width / 2) {
            // 若触屏的 x 大于屏幕宽度的 一半 （右边）
            this.accLeft = false;
            this.accRight = true;
        }
        else {
            this.accLeft = true;
            this.accRight = false;
        }
    };
    Player.prototype.onTouchEnd = function (event) {
        this.accLeft = false;
        this.accRight = false;
    };
    //---- END:[输入监听] ----//
    /**
     * 播放跳跃的声音
     */
    Player.prototype.playJumpSound = function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    __decorate([
        property
    ], Player.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], Player.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], Player.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], Player.prototype, "accel", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "jumpAudio", void 0);
    __decorate([
        property
    ], Player.prototype, "squashDuration", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();