"use strict";
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