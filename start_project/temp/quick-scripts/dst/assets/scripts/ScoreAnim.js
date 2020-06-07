
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