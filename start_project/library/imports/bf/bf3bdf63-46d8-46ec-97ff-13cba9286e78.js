"use strict";
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