define(require => {
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const meterData = require('skbJet/componentManchester/standardIW/meterData');
  const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');

  require('com/gsap/easing/EasePack');
  require('com/gsap/TimelineMax');
  require('com/gsap/TweenLite');
  const Timeline = window.TimelineMax;
  const Tween = window.TweenLite;

  let endgameArea;
  let endGameText;
  let transformTimeline;
  let winTextTimeline;
  let endGameOverlay;

  function init() {
    endgameArea = displayList.endGameWinNoPlaque;
    endGameText = displayList.endGameWinNoPlaqueValue;
    endGameOverlay = displayList.endGameNoPlaqueContainerClick;

    endgameArea.renderable = false;
    endgameArea.y = orientation.get() === orientation.LANDSCAPE ? 410 : 600;
    winTextTimeline = new Timeline({
      paused: true,
      onComplete: () => {
        endGameOverlay.interactive = true;
      }
    });

    transformTimeline = new Timeline({
      paused: true,
      onStart: () => {
        endgameArea.renderable = true;
      }
    });

    endGameOverlay.interactive = false;
    endGameOverlay.renderable = false;




    endGameOverlay.on('press', () => {
      endgameArea.renderable = false;
      endGameOverlay.interactive = false;
      endGameOverlay.renderable = false;
      endgameArea.interactive = false;



      //endgameArea.removeAllListeners();
      //endGameOverlay.removeAllListeners();

    });

    endGameText.alpha = 0;
    endGameOverlay.alpha = 0;
    winTextTimeline.to(endGameText, 0.5, {
      alpha: 1
    }, 0);

    transformTimeline.to(endgameArea, 0.5, {
      y: orientation.get() === orientation.LANDSCAPE ? 410 : 600
    }, 0);

    msgBus.publish('animation.play', {
      index: 'endGameNoPlaque',
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

    msgBus.publish('animation.setEvents', {
      index: 'endGameNoPlaque',
      event: {
        'winText': () => {
          winTextTimeline.play();
        },
      }
    });
  }

  function endGame() {
    if (meterData.win > 0) {
      endgameArea.renderable = true;
      endGameOverlay.renderable = true;

      transformTimeline.play();

      Tween.killTweensOf(endGameOverlay);
      Tween.to(endGameOverlay, 0.5, {
        alpha: 1
      });

      let endGameWinNoPlaqueValue = meterData.win;
      endGameText.text = SKBeInstant.formatCurrency(endGameWinNoPlaqueValue).formattedAmount;

      msgBus.publish('animation.play', {
        index: 'endGameNoPlaque',
        anim: 'winAnimation_noPlaque_IN',
      });
      msgBus.publish('animation.add', {
        index: 'endGameNoPlaque',
        anim: 'winAnimation_noPlaque_loop',
        delay: 0,
        loop: 0
      });
      msgBus.publish('animation.add', {
        index: 'endGameNoPlaque',
        anim: 'winAnimation_noPlaque_OUT',
        delay: 0,
        loop: 0
      });
    }

  }

  function reset() {
    //endgameArea.y = 1400;
    endGameText.alpha = 0;
    endgameArea.renderable = false;

    Tween.killTweensOf(endGameOverlay);
    endGameOverlay.renderable = false;
    endGameOverlay.alpha = 0;

    endGameOverlay.interactive = false;
    endgameArea.interactive = false;

    transformTimeline.pause(0);
    winTextTimeline.pause(0);

    msgBus.publish('animation.clearTrack', {
      index: 'endGameNoPlaque',
      all: true
    });
  }
  //
  // function showWinPlaque() {
  //     tween.to()
  // }

  msgBus.subscribe('game.endGame.init', init);
  msgBus.subscribe('game.endGame.run', endGame);
  msgBus.subscribe('game.endGame.reset', reset);

  // TRIPLAT-137 - IXF WLA/COM - Total win message becomes offset when rotating [MOB/TAB]
  // Reposition on orientation change
  msgBus.subscribe('GameSize.OrientationChange', () => {
    if (endgameArea) {
      endgameArea.y = orientation.get() === orientation.LANDSCAPE ? 410 : 600;
    }
  });
});