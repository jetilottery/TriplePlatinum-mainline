define(require => {
  const gameArea = require('game/components/gameArea');
  const bonusMeter = require('game/components/bonusMeter');
  const bonusGameController = require('game/components/bonusGameController');
  const transitionMananger = require('game/components/transitionManager');
  const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');

  require('com/gsap/TweenMax');

  const Tween = window.TweenMax;

  let delay = 0;

  function init() {
    gameArea.init();
    bonusMeter.init();
    bonusGameController.init();
    transitionMananger.init();

    //displayList.moveToMoneyButton.label.scale.set(Math.min(200 / displayList.moveToMoneyButton.width, 1));

    msgBus.publish('animation.play', {
      index: 'winPlaqueAnim_v2',
      anim: orientation.get() === orientation.LANDSCAPE ? 'winAnimation_land' : 'winAnimation_port',
      delay: 0,
      loop: -1
    });

    msgBus.publish('animation.play', {
      index: 'logo',
      anim: 'triplePlatinum_logo_loop',
      delay: 0,
      loop: -1
    });

    msgBus.publish('game.util.replace', {
      str: displayList.infoBarText.text,
      replace: '[7sLOGO]',
      container: displayList.infoBarText,
      options: {
        padding: 10,
        textureOffsetY: 5
      }
    });
  }

  function gameState() {
    return new Promise(async (resolve) => {

      delay = 0;

      await Promise.all(
        gameArea.enable()
      );

      await bonusGameController.bonusGame();

      Tween.delayedCall(gameConfig.gameEndDelay + delay, resolve);

    });
  }

  function updateDelay() {
    delay = 2;
  }

  msgBus.subscribe('game.gamePlay.updateDelay', updateDelay);

  return {
    init,
    gameState
  };

});