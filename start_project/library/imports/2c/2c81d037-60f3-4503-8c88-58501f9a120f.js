"use strict";
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