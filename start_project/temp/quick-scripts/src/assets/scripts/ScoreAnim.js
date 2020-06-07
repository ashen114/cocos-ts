"use strict";
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