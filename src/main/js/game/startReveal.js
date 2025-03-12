define(function (require) {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');

    const revealAll = require('game/revealAll');
    const gamePlay = require('game/components/gamePlay');

    async function startReveal() {

        // Listen for autoplay activation which triggers the remaining cards to reveal automatically
        msgBus.subscribe('Game.AutoPlayStart', revealAll.start);
        msgBus.publish('game.gameArea.idle');

        // Listen for autoplay deactivation which cancels the revealAll timeline
        msgBus.subscribe('Game.AutoPlayStop', revealAll.stop);

        displayList.pointArray.interactiveChildren = true;

        await gamePlay.gameState();

        // continue to the next state
        gameFlow.next('REVEAL_COMPLETE');
    }

    gameFlow.handle(startReveal, 'START_REVEAL');
});
