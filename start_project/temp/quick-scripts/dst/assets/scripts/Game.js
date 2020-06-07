
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