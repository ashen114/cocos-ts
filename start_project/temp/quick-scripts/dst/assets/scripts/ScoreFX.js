
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