define(require => {

  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
  const audio = require('skbJet/componentManchester/standardIW/audio');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');
  const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');

  require('com/gsap/TimelineMax');
  let Timeline = window.TimelineMax;

  require('com/gsap/TweenMax');
  const Tween = window.TweenMax;

  let baseGameContainer;
  let bonusContainer;

  let gameMode = 'baseGame';

  let transitionTimeline;

  let beforeBonusInfoString;
  let bonusInfoString;

  function init() {
    baseGameContainer = displayList.symbolsBackground;
    bonusContainer = displayList.bonusContainer;

    baseGameContainer.visible = true;
    bonusContainer.visible = false;

    beforeBonusInfoString = resources.i18n.Game.bonusInfo;
    bonusInfoString = resources.i18n.Game.bonusInfo2;



    transitionTimeline = new Timeline({
      paused: true,
      onComplete: () => {
        msgBus.publish('game.transitionComplete');
      }
    });
    transitionTimeline.to(displayList.winUpToLabel, 0.1, {
      alpha: 0
    });
    transitionTimeline.to(displayList.winUpTo, 0.1, {
      alpha: 0
    }, 0);
    transitionTimeline.to(baseGameContainer, 0.1, {
      alpha: 0,
    }, 0);
    transitionTimeline.to(bonusContainer, 0.1, {
      alpha: 1
    }, 0);

    displayList.transitionContainer.visible = false;

    msgBus.publish('animation.setEvents', {
      index: 'transition',
      event: {
        'swap': () => {
          switch (gameMode) {
            case 'baseGame':
              {
                bonusContainer.visible = true;
                baseGameContainer.visible = false;
                transitionTimeline.play();
                gameMode = 'bonusGame';
                displayList.bonusInfoText.text = bonusInfoString;
                displayList.bonusSpinButton.enabled = false;

                break;
              }
            case 'bonusGame':
              {
                audio.fadeOut('bonusMusic', 0);
                bonusContainer.visible = false;
                baseGameContainer.visible = true;
                transitionTimeline.reverse();
                gameMode = 'baseGame';
                displayList.bonusInfoText.text = beforeBonusInfoString;
                //msgBus.publish('UI.updateButtons', {
                //ticketSelect: true
                //});

                //msgBus.publish('UI.updateButtons', {
                //ticketSelect: {
                //visible: true,
                //enabled: false
                //}
                //});

                break;
              }
          }
        },
        'complete': () => {
          msgBus.publish('UI.updateButtons', {
            help: {
              enabled: true
            }
          });

          displayList.bonusSpinButton.enabled = true;
        }
      }
    });
  }

  function switchGameMode() {

    displayList.transitionContainer.visible = true;

    audio.play('transition');

    msgBus.publish('game.gamePlay.updateDelay');

    msgBus.publish('animation.add', {
      index: 'transition',
      anim: orientation.get() === orientation.LANDSCAPE ? 'bonusTransition_land' : 'bonusTransition_port',
      delay: 0,
      loop: 0
    });

    msgBus.publish('game.background.transformToGreyScale');

    Tween.delayedCall(0.5, () => {
      audio.play('bonusMusic', 1, true);

      msgBus.publish('animation.play', {
        index: 'bonusSpineController',
        anim: 'bonusMeter_Static',
        delay: 0,
        loop: 0
      });
    });
  }

  msgBus.subscribe('game.transitionToNext', () => {
    Tween.delayedCall(gameConfig.gameEndDelay, switchGameMode);
  });

  return {
    init
  };
});