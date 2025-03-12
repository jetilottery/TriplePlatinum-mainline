define(
    /**
     *
     * @param require
     * @returns {{init: init, enable: (function(): any[]), populate: populate, reset: reset, revealAll: (function(): TweenMax[])}}
     */
    require => {
        const pickPoint = require('game/components/pickPoint');
        const displayList = require('skbJet/componentManchester/standardIW/displayList');
        const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
        const meterData = require('skbJet/componentManchester/standardIW/meterData');
        const audio = require('skbJet/componentManchester/standardIW/audio');
        const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
        const bonusPickPoint = require('game/components/bonusPickpoint');
        const autoPlay = require('skbJet/componentManchester/standardIW/autoPlay');

        require('com/gsap/TweenLite');
        require('com/gsap/easing/EasePack');

        const Tween = window.TweenLite;

        let pickPointArray = [];
        let bonusPointArray = [];
        let numberData;
        let lastIndex = 0;


        /**
         * @function init
         * @description initialises the game play area/
         */
        function init() {

            bonusPointArray = [
                new bonusPickPoint(displayList.bonusSymbolHoldingArea.children[0]),
                new bonusPickPoint(displayList.bonusSymbolHoldingArea.children[1]),
                new bonusPickPoint(displayList.bonusSymbolHoldingArea.children[2]),
                new bonusPickPoint(displayList.bonusSymbolHoldingArea.children[3]),
                new bonusPickPoint(displayList.bonusSymbolHoldingArea.children[4])
            ];

            bonusPointArray.forEach(e => {
                e.updateBonusArray(bonusPointArray);
            });

            pickPointArray = [
                pickPoint.fromContainer(displayList.pickPoint1, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint2, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint3, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint4, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint5, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint6, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint7, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint8, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint9, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint10, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint11, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint12, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint13, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint14, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint15, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint16, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint17, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint18, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint19, bonusPointArray),
                pickPoint.fromContainer(displayList.pickPoint20, bonusPointArray),
            ];
        }

        /**
         *
         * @param data
         */
        function populate(data) {
            numberData = data;
        }

        /**
         *
         * @returns {any[]}
         */
        function enable() {
            return pickPointArray.map(async pickPoint => {
                await pickPoint.enable();

                if (!autoPlay.enabled) {
                    audio.playSequential('reveal');
                }

                const nextData = numberData.numbers.shift();
                const nextPrize = numberData.prizes.shift();

                pickPoint.populate(nextData, nextPrize);

                if (numberData.numbers.length === 0) {
                    msgBus.publish('UI.updateButtons', {
                        autoPlay: false,
                        help: {
                            enabled: false
                        }
                    });
                }

                await pickPoint.uncover();

                if (pickPoint.win === true) {
                    meterData.win += pickPoint.prize;
                }

                if (!autoPlay.enabled) {
                    if (lastIndex === pickPoint.childPosition) {
                        msgBus.publish('game.gameArea.idle');
                    }
                }

                msgBus.publish('Game.PlayerNumber', nextData);
            });
        }

        /**
         *
         */
        function reset() {
            pickPointArray.forEach(pickPoint => pickPoint.reset());
            lastIndex = 0;

            bonusPointArray.forEach(e => {
                e.reset();
            });
        }

        /**
         *
         * @returns {TweenMax[]}
         */
        function revealAll() {
            let rows = [
                pickPointArray.slice(0, 5).filter(e => !e.revealed).map((e, i) => Tween.delayedCall(gameConfig.autoPlayPlayerNumberInterval * (i / 0.85), e.reveal)),
                pickPointArray.slice(5, 10).filter(e => !e.revealed).map((e, i) => Tween.delayedCall(gameConfig.autoPlayPlayerNumberInterval * (i / 0.85), e.reveal)),
                pickPointArray.slice(10, 15).filter(e => !e.revealed).map((e, i) => Tween.delayedCall(gameConfig.autoPlayPlayerNumberInterval * (i / 0.85), e.reveal)),
                pickPointArray.slice(15, 20).filter(e => !e.revealed).map((e, i) => Tween.delayedCall(gameConfig.autoPlayPlayerNumberInterval * (i / 0.85), e.reveal)),
            ];

            rows = rows.filter(e => {
                if (e.length > 0) {
                    return e;
                }
            });

            pickPointArray.forEach(e => e.hover);
            return rows;
        }

        function hoverOver(data) {
            pickPointArray.forEach(e => {
                e.hover(data);
            });
        }

        function mouseout(data) {
            pickPointArray.forEach(e => {
                e.mouseout(data);
            });
        }

        function idle() {
            pickPointArray.forEach(e => {
                e.idle();
            });
        }

        function updateLastIndex(data) {
            lastIndex = data.index;
        }

        function startBonusLoop() {
            bonusPointArray.forEach(e => {
                msgBus.publish('animation.play', {
                    index: e.index,
                    anim: 'bonusSymbol_trigger',
                    loop: 0
                });
                msgBus.publish('animation.add', {
                    index: e.index,
                    anim: 'bonusSymbol_loop',
                    loop: -1
                });
            });
        }

        msgBus.subscribe('game.gameArea.hoverOver', hoverOver);
        msgBus.subscribe('game.gameArea.mouseout', mouseout);
        msgBus.subscribe('game.gameArea.idle', idle);
        msgBus.subscribe('game.gameArea.updateLastIndex', updateLastIndex);
        msgBus.subscribe('game.gameArea.reset', reset);
        msgBus.subscribe('game.gameArea.startBonusLoop', startBonusLoop);

        return {
            init,
            enable,
            populate,
            revealAll,
        };

    }
);