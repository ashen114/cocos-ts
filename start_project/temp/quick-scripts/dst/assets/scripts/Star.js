
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