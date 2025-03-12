define(require => {

    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');

    require('com/gsap/TweenMax');

    const Tween = window.TweenMax;

    let value;

    function init() {
        value = displayList.totalWinValue;
        value.value = 0;
        value.text = SKBeInstant.formatCurrency(0).formattedAmount;
    }

    function update(amount) {

        Tween.to(value, 1, {
            onStart: () => {
                Tween.to(displayList.totalWinBackground.scale, 0.1, {
                    ease: window.Back.easeOut.config(1.7),
                    x: 1.2,
                    y: 1.2
                });
            },
            onUpdate: (data) => {
                value = SKBeInstant.formatCurrency(data.value).formattedAmount;
            },
            onComplete: () => {
                meterData.win += amount;
                Tween.to(displayList.totalWinBackground.scale, 0.1, {
                    ease: window.Back.easeOut.config(1.7),
                    x: 1,
                    y: 1
                });
            },
            value: amount,
        });
    }

    function reset() {
        value.value = 0;
        value.text = SKBeInstant.formatCurrency(0).formattedAmount;
    }

    msgBus.subscribe('game.totalWin.update', update);
    msgBus.subscribe('game.totalWin.reset', reset);

    return {
        init,
    };

});