
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUU1RSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBd0tDO1FBdEtDLDBCQUEwQjtRQUUxQixnQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFHakMsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBR3JDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUduQyxXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUd6QixlQUFTLEdBQWlCLElBQUksQ0FBQyxDQUFDLFNBQVM7UUFHekMsb0JBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBRXZDLDBCQUEwQjtRQUMxQixhQUFPLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUNuQyxjQUFRLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUNwQyxZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsY0FBYztRQUNsQyxnQkFBVSxHQUFzQixJQUFJLENBQUMsQ0FBQyxRQUFROztJQStJaEQsQ0FBQztJQTdJQywwQkFBMEI7SUFFMUIsdUJBQU0sR0FBTjtRQUNFLFVBQVU7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckMsVUFBVTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGFB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QjtRQURDLFFBQVE7Z0RBQ2dCO0lBR3pCO1FBREMsUUFBUTt5Q0FDUztJQUdsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7NkNBQ0Y7SUFHL0I7UUFEQyxRQUFRO2tEQUNrQjtJQWxCUixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBdUsxQjtJQUFELGFBQUM7Q0F2S0QsQUF1S0MsQ0F2S21DLEVBQUUsQ0FBQyxTQUFTLEdBdUsvQztrQkF2S29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLy8vLy8vLy8vIOazqOWFpeWxnuaApyAvLy8vLy8vLy8vXHJcbiAgQHByb3BlcnR5XHJcbiAganVtcEhlaWdodDogbnVtYmVyID0gMDsgLy8g5Li76KeS6Lez6LeD6auY5bqmXHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIGp1bXBEdXJhdGlvbjogbnVtYmVyID0gMDsgLy8g5Li76KeS6Lez6LeD5oyB57ut5pe26Ze0XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIG1heE1vdmVTcGVlZDogbnVtYmVyID0gMDsgLy8g5pyA5aSn56e75Yqo6YCf5bqmXHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIGFjY2VsOiBudW1iZXIgPSAwOyAvLyDliqDpgJ/luqZcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAganVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyDot7Pot4Ppn7PmlYjotYTmupBcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAgc3F1YXNoRHVyYXRpb246IG51bWJlciA9IDA7IC8vIOi+heWKqeW9ouWPmOWKqOS9nOaXtumXtFxyXG5cclxuICAvLy8vLy8vLy8vIOm7mOiupOWxnuaApyAvLy8vLy8vLy8vXHJcbiAgYWNjTGVmdDogYm9vbGVhbiA9IGZhbHNlOyAvLyDlkJHlt6bnmoTliqDpgJ/luqZcclxuICBhY2NSaWdodDogYm9vbGVhbiA9IGZhbHNlOyAvLyDlkJHlj7PnmoTliqDpgJ/luqZcclxuICB4U3BlZWQ6IG51bWJlciA9IDA7IC8vIOS4u+inkuW9k+WJjeawtOW5s+aWueWQkeeahOmAn+W6plxyXG4gIGp1bXBBY3Rpb246IGNjLkFjdGlvbkludGVydmFsID0gbnVsbDsgLy8g6Lez6LeD5Yqo5L2c57G7XHJcblxyXG4gIC8vLy8vLy8vLy8g55Sf5ZG95ZGo5pyfIC8vLy8vLy8vLy9cclxuXHJcbiAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgLy8g5Yid5aeL5YyW6Lez6LeD5Yqo5L2cXHJcbiAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcclxuICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuXHJcbiAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIOS4u+inkuW9k+WJjeawtOW5s+aWueWQkemAn+W6plxyXG4gICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgIC8vIOWIneWni+WMlumUruebmOmUruWFpeebkeWQrFxyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG5cclxuICAgIC8vIOWIneWni+WMluinpuWxj+i+k+WFpeebkeWQrFxyXG4gICAgbGV0IHRvdWNoUmVjZWl2ZXI6IGNjLk5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgIHRvdWNoUmVjZWl2ZXIub24oXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRvdWNoUmVjZWl2ZXIub24oXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKTogdm9pZCB7fVxyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgLy8g5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcclxuICAgICAgdGhpcy54U3BlZWQgPSAodGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCkgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8g5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuXHJcbiAgICAvLyDlj5bmtojop6blsY/ovpPlhaXnm5HlkKxcclxuICAgIGxldCB0b3VjaFJlY2VpdmVyOiBjYy5Ob2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICB0b3VjaFJlY2VpdmVyLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdG91Y2hSZWNlaXZlci5vZmYoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8vLy8vLy8vLyDlip/og73lh73mlbAgLy8vLy8vLy8vL1xyXG5cclxuICAvKipcclxuICAgKiDorr7nva7ot7Pot4NcclxuICAgKi9cclxuICBzZXRKdW1wQWN0aW9uKCk6IGNjLkFjdGlvbkludGVydmFsIHtcclxuICAgIC8vIOi3s+i3g+S4iuWNh1xyXG4gICAgbGV0IGp1bXBVcDogY2MuQWN0aW9uSW5zdGFudCA9IGNjXHJcbiAgICAgIC5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnYyKDAsIHRoaXMuanVtcEhlaWdodCkpXHJcbiAgICAgIC5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xyXG5cclxuICAgIC8vIOS4i+iQvVxyXG4gICAgbGV0IGp1bXBEb3duOiBjYy5BY3Rpb25JbnN0YW50ID0gY2NcclxuICAgICAgLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgLXRoaXMuanVtcEhlaWdodCkpXHJcbiAgICAgIC5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XHJcblxyXG4gICAgLy8g5b2i5Y+YXHJcbiAgICBsZXQgc3F1YXNoOiBjYy5BY3Rpb25JbnRlcnZhbCA9IGNjLnNjYWxlVG8odGhpcy5zcXVhc2hEdXJhdGlvbiwgMSwgMC42KTtcclxuICAgIGxldCBzdHJldGNoOiBjYy5BY3Rpb25JbnRlcnZhbCA9IGNjLnNjYWxlVG8odGhpcy5zcXVhc2hEdXJhdGlvbiwgMSwgMS4yKTtcclxuICAgIGxldCBzY2FsZUJhY2s6IGNjLkFjdGlvbkludGVydmFsID0gY2Muc2NhbGVUbyh0aGlzLnNxdWFzaER1cmF0aW9uLCAxLCAxKTtcclxuXHJcbiAgICAvLyDmt7vliqDkuIDkuKrlm57osIPlh73mlbDvvIznlKjkuo7lnKjliqjkvZznu5PmnZ/ml7bosIPnlKjmiJHku6zlrprkuYnnmoTlhbbku5bmlrnms5VcclxuICAgIGxldCBjYWxsYmFjazogY2MuQWN0aW9uSW5zdGFudCA9IGNjLmNhbGxGdW5jKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcblxyXG4gICAgLy8g5LiN5pat6YeN5aSN77yM6ICM5LiU5q+P5qyh5a6M5oiQ6JC95Zyw5Yqo5L2c5ZCO6LCD55So5Zue6LCD5p2l5pKt5pS+5aOw6Z+zXHJcbiAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihcclxuICAgICAgY2Muc2VxdWVuY2Uoc3F1YXNoLCBzdHJldGNoLCBqdW1wVXAsIHNjYWxlQmFjaywganVtcERvd24sIGNhbGxiYWNrKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vLS0tLSBCRUdJTjpb6L6T5YWl55uR5ZCsXSAtLS0tLy9cclxuICAvKipcclxuICAgKiDmjInkuIvplK7nm5hcclxuICAgKiBAcGFyYW0ge2NjLkV2ZW50LkV2ZW50S2V5Ym9hcmR9IGV2ZW50IOaMiemUruS6i+S7tlxyXG4gICAqL1xyXG4gIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW8uei1t+mUruebmFxyXG4gICAqIEBwYXJhbSB7Y2MuRXZlbnQuRXZlbnRLZXlib2FyZH0gZXZlbnQg5by56LW355qE5oyJ6ZSu5LqL5Lu2XHJcbiAgICovXHJcbiAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBsZXQgdG91Y2hMb2MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgIGlmICh0b3VjaExvYy54ID49IGNjLndpblNpemUud2lkdGggLyAyKSB7XHJcbiAgICAgIC8vIOiLpeinpuWxj+eahCB4IOWkp+S6juWxj+W5leWuveW6pueahCDkuIDljYog77yI5Y+z6L6577yJXHJcbiAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gIH1cclxuICAvLy0tLS0gRU5EOlvovpPlhaXnm5HlkKxdIC0tLS0vL1xyXG5cclxuICAvKipcclxuICAgKiDmkq3mlL7ot7Pot4PnmoTlo7Dpn7NcclxuICAgKi9cclxuICBwbGF5SnVtcFNvdW5kKCk6IHZvaWQge1xyXG4gICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==