define(require => {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const autoPlay = require('skbJet/componentManchester/standardIW/autoPlay');
    const PIXI = require('com/pixijs/pixi');
    const bonusMeter = require('game/components/bonusMeter');

    require('com/gsap/TweenLite');
    require('com/gsap/easing/EasePack');

    class BonusPickPoint {
        constructor(spine) {
            this.point = {
                x: 0,
                y: 0
            };
            this.spine = spine;
            this.inUse = false;
            this.index = spine.index;

            this.spine.renderable = false;

            this.bonusArray = [];

            msgBus.publish('animation.setEvents', {
                index: this.index,
                event: {
                    'spark': () => {
                        if (!autoPlay.enabled) {
                            msgBus.publish('game.bonusParticles.goto', {
                                start: {
                                    x: this.point.x,
                                    y: this.point.y
                                }
                            });
                        }
                    },
                    'complete': () => {
                        if (bonusMeter.getIndex() > 2) {
                            [this.bonusArray[0],this.bonusArray[1]].forEach(el=>{
                                msgBus.publish('animation.add', {
                                    index: el.index,
                                    anim: 'bonusSymbol_loop',
                                    loop: true
                                });
                            });
                            msgBus.publish('animation.add', {
                                index: this.index,
                                anim: 'bonusSymbol_loop',
                                loop: true
                            });
                        }
                    }
                }
            });

            msgBus.publish('animation.play', {
                index: this.index,
                anim: 'bonusSymbol_static',
                delay: 0,
                loop: 0
            });
        }

        reset() {
            this.inUse = false;
            this.spine.renderable = false;
        }

        updateBonusArray(array) {
            this.bonusArray = array;
        }

        updatePoint(target) {
            let newPoint = target.getGlobalPosition(new PIXI.Point(target.x, target.y));

            this.point.x = newPoint.x;
            this.point.y = newPoint.y;
        }

        reveal() {
            msgBus.publish('animation.play', {
                index: this.index,
                anim: 'bonusSymbol_reveal',
                delay: 0,
                loop: 0
            });
            msgBus.publish('animation.add', {
                index: this.index,
                anim: 'bonusSymbol_static',
                delay: 0,
                loop: 0
            });

            if(autoPlay.enabled) {
                msgBus.publish('game.meter.bonusIncrease');
            }

        }

    }

    return BonusPickPoint;
});