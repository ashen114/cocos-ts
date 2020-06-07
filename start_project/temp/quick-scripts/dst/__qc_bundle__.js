
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/ScoreAnim');
require('./assets/scripts/ScoreFX');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b768jO0cdMK5AhvRSkp2gx', 'Star');
// scripts/Star.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        ////////// 注入属性 //////////
        _this.pickRadius = 0; // 星星和主角之间的距离小于这个数值时，就会完成收集
        ////////// 默认属性 //////////
        _this.game = null; // 对Game对象的引用
        return _this;
    }
    ////////// 生命周期 //////////
    Star.prototype.onLoad = function () { };
    Star.prototype.start = function () { };
    Star.prototype.update = function (dt) {
        // 根据 Game 脚本中的计时器更新星星透明度
        var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity =
            minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
    };
    Star.prototype.onDestroy = function () { };
    ////////// 功能函数 //////////
    /**
     * 返回星星与主角之间的距离
     */
    Star.prototype.getPlayerDistance = function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.game.player.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.getPosition().sub(playerPos).mag();
        return dist;
    };
    /**
     * 当星星被收集时
     */
    Star.prototype.onPicked = function () {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();
        // 调用 Game 脚本的得分方法
        this.game.gainScore();
        // 然后销毁当前星星节点
        this.node.destroy();
    };
    __decorate([
        property
    ], Star.prototype, "pickRadius", void 0);
    Star = __decorate([
        ccclass
    ], Star);
    return Star;
}(cc.Component));
exports.default = Star;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQTJEQztRQXpEQywwQkFBMEI7UUFFMUIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFFbkQsMEJBQTBCO1FBQzFCLFVBQUksR0FBUyxJQUFJLENBQUMsQ0FBQyxhQUFhOztJQW9EbEMsQ0FBQztJQWxEQywwQkFBMEI7SUFFMUIscUJBQU0sR0FBTixjQUFnQixDQUFDO0lBRWpCLG9CQUFLLEdBQUwsY0FBZSxDQUFDO0lBRWhCLHFCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YseUJBQXlCO1FBQ3pCLElBQUksWUFBWSxHQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4RSxJQUFJLFVBQVUsR0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFN0QsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QyxTQUFTO1lBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU87U0FDUjtJQUNILENBQUM7SUFFRCx3QkFBUyxHQUFULGNBQW1CLENBQUM7SUFFcEIsMEJBQTBCO0lBQzFCOztPQUVHO0lBQ0gsZ0NBQWlCLEdBQWpCO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksU0FBUyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhELGlCQUFpQjtRQUNqQixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVoRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUFRLEdBQVI7UUFDRSxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6QixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0QixhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBdEREO1FBREMsUUFBUTs0Q0FDYztJQUhKLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwRHhCO0lBQUQsV0FBQztDQTFERCxBQTBEQyxDQTFEaUMsRUFBRSxDQUFDLFNBQVMsR0EwRDdDO2tCQTFEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLy8vLy8vLy8vIOazqOWFpeWxnuaApyAvLy8vLy8vLy8vXHJcbiAgQHByb3BlcnR5XHJcbiAgcGlja1JhZGl1czogbnVtYmVyID0gMDsgLy8g5pif5pif5ZKM5Li76KeS5LmL6Ze055qE6Led56a75bCP5LqO6L+Z5Liq5pWw5YC85pe277yM5bCx5Lya5a6M5oiQ5pS26ZuGXHJcblxyXG4gIC8vLy8vLy8vLy8g6buY6K6k5bGe5oCnIC8vLy8vLy8vLy9cclxuICBnYW1lOiBHYW1lID0gbnVsbDsgLy8g5a+5R2FtZeWvueixoeeahOW8leeUqFxyXG5cclxuICAvLy8vLy8vLy8vIOeUn+WRveWRqOacnyAvLy8vLy8vLy8vXHJcblxyXG4gIG9uTG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHN0YXJ0KCk6IHZvaWQge31cclxuXHJcbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vIOagueaNriBHYW1lIOiEmuacrOS4reeahOiuoeaXtuWZqOabtOaWsOaYn+aYn+mAj+aYjuW6plxyXG4gICAgbGV0IG9wYWNpdHlSYXRpbzogbnVtYmVyID0gMSAtIHRoaXMuZ2FtZS50aW1lciAvIHRoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcbiAgICBsZXQgbWluT3BhY2l0eTogbnVtYmVyID0gNTA7XHJcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9XHJcbiAgICAgIG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XHJcblxyXG4gICAgLy8g5q+P5bin5Yik5pat5ZKM5Li76KeS5LmL6Ze055qE6Led56a75piv5ZCm5bCP5LqO5pS26ZuG6Led56a7XHJcbiAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKSB7XHJcbiAgICAgIC8vIOiwg+eUqOaUtumbhuihjOS4ulxyXG4gICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGVzdHJveSgpOiB2b2lkIHt9XHJcblxyXG4gIC8vLy8vLy8vLy8g5Yqf6IO95Ye95pWwIC8vLy8vLy8vLy9cclxuICAvKipcclxuICAgKiDov5Tlm57mmJ/mmJ/kuI7kuLvop5LkuYvpl7TnmoTot53nprtcclxuICAgKi9cclxuICBnZXRQbGF5ZXJEaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgLy8g5qC55o2uIHBsYXllciDoioLngrnkvY3nva7liKTmlq3ot53nprtcclxuICAgIGxldCBwbGF5ZXJQb3M6IGNjLlZlYzIgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgLy8g5qC55o2u5Lik54K55L2N572u6K6h566X5Lik54K55LmL6Ze06Led56a7XHJcbiAgICBsZXQgZGlzdDogbnVtYmVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuc3ViKHBsYXllclBvcykubWFnKCk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvZPmmJ/mmJ/ooqvmlLbpm4bml7ZcclxuICAgKi9cclxuICBvblBpY2tlZCgpIHtcclxuICAgIC8vIOW9k+aYn+aYn+iiq+aUtumbhuaXtu+8jOiwg+eUqCBHYW1lIOiEmuacrOS4reeahOaOpeWPo++8jOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG5cclxuICAgIC8vIOiwg+eUqCBHYW1lIOiEmuacrOeahOW+l+WIhuaWueazlVxyXG4gICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG5cclxuICAgIC8vIOeEtuWQjumUgOavgeW9k+WJjeaYn+aYn+iKgueCuVxyXG4gICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e70a5CsWJtJFZr38JRlEpYK', 'ScoreAnim');
// scripts/ScoreAnim.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreAnim = /** @class */ (function (_super) {
    __extends(ScoreAnim, _super);
    function ScoreAnim() {
        ////////// 注入属性 //////////
        var _this = _super !== null && _super.apply(this, arguments) || this;
        ////////// 默认属性 //////////
        _this.scoreFX = null;
        return _this;
    }
    ////////// 生命周期 //////////
    ////////// 功能函数 //////////
    /**
     * 初始化
     */
    ScoreAnim.prototype.init = function (scoreFX) {
        this.scoreFX = scoreFX;
    };
    /**
     * 隐藏特效
     */
    ScoreAnim.prototype.hideFX = function () {
        this.scoreFX.despawn();
    };
    ScoreAnim = __decorate([
        ccclass
    ], ScoreAnim);
    return ScoreAnim;
}(cc.Component));
exports.default = ScoreAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBRUUsMEJBQTBCO1FBRjVCLHFFQXVCQztRQW5CQywwQkFBMEI7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFrQjFCLENBQUM7SUFoQkMsMEJBQTBCO0lBRTFCLDBCQUEwQjtJQUMxQjs7T0FFRztJQUNILHdCQUFJLEdBQUosVUFBSyxPQUFnQjtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBckJrQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc0I3QjtJQUFELGdCQUFDO0NBdEJELEFBc0JDLENBdEJzQyxFQUFFLENBQUMsU0FBUyxHQXNCbEQ7a0JBdEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjb3JlRlggZnJvbSBcIi4vU2NvcmVGWFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlQW5pbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8vLy8vLy8vLyDms6jlhaXlsZ7mgKcgLy8vLy8vLy8vL1xyXG5cclxuICAvLy8vLy8vLy8vIOm7mOiupOWxnuaApyAvLy8vLy8vLy8vXHJcbiAgc2NvcmVGWDogU2NvcmVGWCA9IG51bGw7XHJcblxyXG4gIC8vLy8vLy8vLy8g55Sf5ZG95ZGo5pyfIC8vLy8vLy8vLy9cclxuXHJcbiAgLy8vLy8vLy8vLyDlip/og73lh73mlbAgLy8vLy8vLy8vL1xyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMllxyXG4gICAqL1xyXG4gIGluaXQoc2NvcmVGWDogU2NvcmVGWCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY29yZUZYID0gc2NvcmVGWDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmakOiXj+eJueaViFxyXG4gICAqL1xyXG4gIGhpZGVGWCgpIHtcclxuICAgIHRoaXMuc2NvcmVGWC5kZXNwYXduKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf3bd9jRthG7Jf/E8upKG54', 'ScoreFX');
// scripts/ScoreFX.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreFX = /** @class */ (function (_super) {
    __extends(ScoreFX, _super);
    function ScoreFX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        ////////// 注入属性 //////////
        _this.anim = null; // 动画对象
        ////////// 默认属性 //////////
        _this.game = null;
        return _this;
    }
    ////////// 生命周期 //////////
    ////////// 功能函数 //////////
    /**
     * 初始化
     */
    ScoreFX.prototype.init = function (game) {
        this.game = game;
        this.anim.getComponent("ScoreAnim").init(this);
    };
    /**
     * 储存当前节点到分数对象池
     */
    ScoreFX.prototype.despawn = function () {
        this.game.despawnScoreFX(this.node);
    };
    /**
     * 开始
     */
    ScoreFX.prototype.play = function () {
        this.anim.play("score_pop");
    };
    __decorate([
        property({ type: cc.Animation })
    ], ScoreFX.prototype, "anim", void 0);
    ScoreFX = __decorate([
        ccclass
    ], ScoreFX);
    return ScoreFX;
}(cc.Component));
exports.default = ScoreFX;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVGWC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQURqRDtRQUFBLHFFQWlDQztRQS9CQywwQkFBMEI7UUFFMUIsVUFBSSxHQUFpQixJQUFJLENBQUMsQ0FBQyxPQUFPO1FBRWxDLDBCQUEwQjtRQUMxQixVQUFJLEdBQVMsSUFBSSxDQUFDOztJQTBCcEIsQ0FBQztJQXhCQywwQkFBMEI7SUFFMUIsMEJBQTBCO0lBQzFCOztPQUVHO0lBQ0gsc0JBQUksR0FBSixVQUFLLElBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7eUNBQ1A7SUFIUCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZ0MzQjtJQUFELGNBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ29DLEVBQUUsQ0FBQyxTQUFTLEdBZ0NoRDtrQkFoQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVGWCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8vLy8vLy8vLyDms6jlhaXlsZ7mgKcgLy8vLy8vLy8vL1xyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkFuaW1hdGlvbiB9KVxyXG4gIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7IC8vIOWKqOeUu+WvueixoVxyXG5cclxuICAvLy8vLy8vLy8vIOm7mOiupOWxnuaApyAvLy8vLy8vLy8vXHJcbiAgZ2FtZTogR2FtZSA9IG51bGw7XHJcblxyXG4gIC8vLy8vLy8vLy8g55Sf5ZG95ZGo5pyfIC8vLy8vLy8vLy9cclxuXHJcbiAgLy8vLy8vLy8vLyDlip/og73lh73mlbAgLy8vLy8vLy8vL1xyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMllxyXG4gICAqL1xyXG4gIGluaXQoZ2FtZTogR2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuYW5pbS5nZXRDb21wb25lbnQoXCJTY29yZUFuaW1cIikuaW5pdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWCqOWtmOW9k+WJjeiKgueCueWIsOWIhuaVsOWvueixoeaxoFxyXG4gICAqL1xyXG4gIGRlc3Bhd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmdhbWUuZGVzcGF3blNjb3JlRlgodGhpcy5ub2RlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW8gOWni1xyXG4gICAqL1xyXG4gIHBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW0ucGxheShcInNjb3JlX3BvcFwiKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08ea2rj/R9C+4ej+Zk7tROQ', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c81dA3YPNFA4yIWFAfmhIP', 'Game');
// scripts/Game.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        ////////// 注入属性 //////////
        _this.starPrefab = null; // 这个属性引用了星星预制资源
        // 星星产生后消失时间的随机范围
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        _this.ground = null; // 地面节点，用于确定星星生成的高度
        _this.player = null; // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        _this.scoreDisplay = null; // score Label 的引用
        _this.scoreAudio = null; // 得分音效资源
        ////////// 默认属性 //////////
        _this.groundY = 0; // 地平面的 y 轴坐标
        _this.score = 0; // 计分
        _this.timer = 0; // 计时器
        _this.starDuration = 0; // 星星存活时间
        return _this;
    }
    ////////// 生命周期 //////////
    Game.prototype.onLoad = function () {
        // 获取地平面的 y 轴坐标
        this.groundY = this.ground.y + this.ground.height / 2;
        // 初始化计时器
        this.timer = 0;
        this.starDuration = 0;
        // 生成一个新的星星
        this.spawnNewStar();
        // 初始化计分
        this.score = 0;
    };
    Game.prototype.start = function () { };
    Game.prototype.update = function (dt) {
        // 每帧更新计时器，超过限度还没生成新的星星
        // 就会调用游戏失败的逻辑
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    };
    Game.prototype.onDestroy = function () { };
    ////////// 功能函数 //////////
    /**
     * 生成一个新的星星
     */
    Game.prototype.spawnNewStar = function () {
        // 使用给定的模板在场景生成一个新的节点
        var newStar = cc.instantiate(this.starPrefab);
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
    };
    /**
     * 设置一个随机的位置
     */
    Game.prototype.getNewStarPosition = function () {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
        var randY = this.groundY +
            Math.random() * this.player.getComponent("Player").jumpHeight +
            50;
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.v2(randX, randY);
    };
    /**
     * 计算得分
     */
    Game.prototype.gainScore = function () {
        this.score += 1;
        // 更新scoreDisplay Label 的文字
        this.scoreDisplay.string = "Score:" + this.score;
        // 播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    };
    /**
     * 游戏结束
     */
    Game.prototype.gameOver = function () {
        this.player.stopAllActions(); // 停止 player 节点的跳跃动作
        cc.director.loadScene("game"); // 重新加载 game 场景
    };
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "starPrefab", void 0);
    __decorate([
        property
    ], Game.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], Game.prototype, "minStarDuration", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "ground", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "player", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "scoreDisplay", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Game.prototype, "scoreAudio", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDRDtJQXJCYixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMkh4QjtJQUFELFdBQUM7Q0EzSEQsQUEySEMsQ0EzSGlDLEVBQUUsQ0FBQyxTQUFTLEdBMkg3QztrQkEzSG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8vLy8vLy8vLyDms6jlhaXlsZ7mgKcgLy8vLy8vLy8vL1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgc3RhclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDsgLy8g6L+Z5Liq5bGe5oCn5byV55So5LqG5pif5pif6aKE5Yi26LWE5rqQXHJcblxyXG4gIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxyXG4gIEBwcm9wZXJ0eVxyXG4gIG1heFN0YXJEdXJhdGlvbjogbnVtYmVyID0gMDtcclxuICBAcHJvcGVydHlcclxuICBtaW5TdGFyRHVyYXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGdyb3VuZDogY2MuTm9kZSA9IG51bGw7IC8vIOWcsOmdouiKgueCue+8jOeUqOS6juehruWumuaYn+aYn+eUn+aIkOeahOmrmOW6plxyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsOyAvLyBwbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXHJcblxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDsgLy8gc2NvcmUgTGFiZWwg55qE5byV55SoXHJcblxyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gIHNjb3JlQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7IC8vIOW+l+WIhumfs+aViOi1hOa6kFxyXG5cclxuICAvLy8vLy8vLy8vIOm7mOiupOWxnuaApyAvLy8vLy8vLy8vXHJcbiAgZ3JvdW5kWTogbnVtYmVyID0gMDsgLy8g5Zyw5bmz6Z2i55qEIHkg6L205Z2Q5qCHXHJcbiAgc2NvcmU6IG51bWJlciA9IDA7IC8vIOiuoeWIhlxyXG4gIHRpbWVyOiBudW1iZXIgPSAwOyAvLyDorqHml7blmahcclxuICBzdGFyRHVyYXRpb246IG51bWJlciA9IDA7IC8vIOaYn+aYn+WtmOa0u+aXtumXtFxyXG5cclxuICAvLy8vLy8vLy8vIOeUn+WRveWRqOacnyAvLy8vLy8vLy8vXHJcbiAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgLy8g6I635Y+W5Zyw5bmz6Z2i55qEIHkg6L205Z2Q5qCHXHJcbiAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAvLyDliJ3lp4vljJborqHml7blmahcclxuICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xyXG5cclxuICAgIC8vIOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuXHJcbiAgICAvLyDliJ3lp4vljJborqHliIZcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKTogdm9pZCB7fVxyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8g5q+P5bin5pu05paw6K6h5pe25Zmo77yM6LaF6L+H6ZmQ5bqm6L+Y5rKh55Sf5oiQ5paw55qE5pif5pifXHJcbiAgICAvLyDlsLHkvJrosIPnlKjmuLjmiI/lpLHotKXnmoTpgLvovpFcclxuICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KCk6IHZvaWQge31cclxuXHJcbiAgLy8vLy8vLy8vLyDlip/og73lh73mlbAgLy8vLy8vLy8vL1xyXG4gIC8qKlxyXG4gICAqIOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAqL1xyXG4gIHNwYXduTmV3U3RhcigpOiB2b2lkIHtcclxuICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+eUn+aIkOS4gOS4quaWsOeahOiKgueCuVxyXG4gICAgbGV0IG5ld1N0YXI6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG5cclxuICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcblxyXG4gICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py655qE5L2N572uXHJcbiAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG5cclxuICAgIC8vIOWcqOaYn+aYn+e7hOS7tuS4iuaaguWtmCBHYW1lIOWvueixoeeahOW8leeUqFxyXG4gICAgbmV3U3Rhci5nZXRDb21wb25lbnQoXCJTdGFyXCIpLmdhbWUgPSB0aGlzO1xyXG5cclxuICAgIC8vIOmHjee9ruiuoeaXtuWZqO+8jOagueaNrua2iOWkseaXtumXtOiMg+WbtOmaj+acuuWPluS4gOS4quWAvFxyXG4gICAgdGhpcy5zdGFyRHVyYXRpb24gPVxyXG4gICAgICB0aGlzLm1pblN0YXJEdXJhdGlvbiArXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICB0aGlzLnRpbWVyID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiuvue9ruS4gOS4qumaj+acuueahOS9jee9rlxyXG4gICAqL1xyXG4gIGdldE5ld1N0YXJQb3NpdGlvbigpOiBjYy5WZWMyIHtcclxuICAgIGxldCByYW5kWDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcclxuICAgIGxldCByYW5kWTogbnVtYmVyID1cclxuICAgICAgdGhpcy5ncm91bmRZICtcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5qdW1wSGVpZ2h0ICtcclxuICAgICAgNTA7XHJcblxyXG4gICAgLy8g5qC55o2u5bGP5bmV5a695bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pifIHgg5Z2Q5qCHXHJcbiAgICBsZXQgbWF4WDogbnVtYmVyID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFg7XHJcblxyXG4gICAgLy8g6L+U5Zue5pif5pif5Z2Q5qCHXHJcbiAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiuoeeul+W+l+WIhlxyXG4gICAqL1xyXG4gIGdhaW5TY29yZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuXHJcbiAgICAvLyDmm7TmlrBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXHJcbiAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSBcIlNjb3JlOlwiICsgdGhpcy5zY29yZTtcclxuXHJcbiAgICAvLyDmkq3mlL7lvpfliIbpn7PmlYhcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmuLjmiI/nu5PmnZ9cclxuICAgKi9cclxuICBnYW1lT3ZlcigpIHtcclxuICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7IC8vIOWBnOatoiBwbGF5ZXIg6IqC54K555qE6Lez6LeD5Yqo5L2cXHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpOyAvLyDph43mlrDliqDovb0gZ2FtZSDlnLrmma9cclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
