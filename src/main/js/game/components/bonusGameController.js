define(require => {

  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const audio = require('skbJet/componentManchester/standardIW/audio');

  let wheel = require('game/components/wheel');
  let scenario = require('skbJet/componentManchester/standardIW/scenarioData');


  const Tween = window.TweenMax;

  require('com/gsap/TimelineMax');
  let Timeline = window.TimelineMax;

  let bonusWheelTopScale = [0.45, 0.65, 1];
  let bonusWheelMiddleScale = [0.65, 1, 1];
  let bonusWheelBottomScale = [1, 1, 1];

  let topWheel;
  let middleWheel;
  let bottomWheel;

  let topShadow;
  let middleShadow;

  let wheelPhase;
  let wheelTimeLine;

  let wheelIndex = 0;

  let bonusComplete = null;
  let target = null;
  let bonusArray = null;

  function init() {

    topWheel = displayList.bonusWheelTopBase;
    middleWheel = displayList.bonusWheelMiddleBase;
    bottomWheel = displayList.bonusWheelBottomBase;

    topShadow = displayList.bonusWheelTopShadow;
    middleShadow = displayList.bonusWheelMiddleShadow;

    topWheel.scale.set(bonusWheelTopScale[0]);
    middleWheel.scale.set(bonusWheelMiddleScale[0]);
    bottomWheel.scale.set(bonusWheelBottomScale[0]);

    wheelPhase = 1;

    wheelTimeLine = new Timeline({
      paused: true,
      onReverseComplete: () => {
        wheelTimeLine.addPause(1);
        wheelTimeLine.timeScale(1);
      },
      onComplete: () => {
        wheelTimeLine.removePause(1);
        wheelTimeLine.timeScale(2);
      }
    });

    // make visible if we are replaying a game.
    displayList.bonusSpinSpine.alpha = 1;


    //initial animation for the spinButton. :)
    msgBus.publish('animation.play', {
      index: 'bonusSpinButtonContainer',
      anim: 'Puls',
      delay: 0,
      loop: -1
    });


    displayList.bonusWheelRespinTextContainer.visible = false;

    matchWheel();

    displayList.bonusSpinButton.on('press', () => {
      spinData();
      audio.play('spinButton');

      //disable the glow effect on the spinButton.
      Tween.to(displayList.bonusSpinSpine, 0.5, {
        alpha: 0
      });

      msgBus.publish('UI.updateButtons', {
        help: {
          enabled: false
        },
      });

    });

    setupWheel();
    wheel.init();

    msgBus.publish('animation.setEvents', {
      index: 'wheelFXUpgrade',
      event: {
        'addWheel': () => {
          paraseNextWheel();
        },
      }
    });

  }

  function setupWheel() {
    wheelTimeLine.timeScale(1);

    wheelTimeLine.to(topWheel.scale, 1, {
      x: bonusWheelTopScale[1],
      y: bonusWheelTopScale[1]
    }, 0);
    wheelTimeLine.to(middleWheel.scale, 1, {
      x: bonusWheelMiddleScale[1],
      y: bonusWheelMiddleScale[1]
    }, 0);
    wheelTimeLine.to(bottomWheel.scale, 1, {
      x: bonusWheelBottomScale[1],
      y: bonusWheelBottomScale[1]
    }, 0);

    wheelTimeLine.to(bottomWheel, 1, {
      pixi: {
        brightness: 0.5
      }
    }, 0);
    wheelTimeLine.to(middleShadow, 1, {
      alpha: 0
    }, 0);

    wheelTimeLine.addPause(1);

    wheelTimeLine.to(topWheel.scale, 1, {
      x: bonusWheelTopScale[2],
      y: bonusWheelTopScale[2]
    }, 1);
    wheelTimeLine.to(middleWheel.scale, 1, {
      x: bonusWheelMiddleScale[2],
      y: bonusWheelMiddleScale[2]
    }, 1);

    wheelTimeLine.to(middleWheel, 1, {
      pixi: {
        brightness: 0.5
      }
    }, 1);
    wheelTimeLine.to(topShadow, 1, {
      alpha: 0
    }, 1);
  }

  function gotoNextWheel() {

    let animations = {
      1: 'wheelUpgrade_1',
      2: 'wheelUpgrade_2'
    };

    msgBus.publish('animation.play', {
      index: 'wheelFXUpgrade',
      anim: animations[wheelPhase],
      delay: 0,
      loop: 0
    });
  }

  function paraseNextWheel() {
    wheelTimeLine.play();
    wheelIndex++;
    matchWheel();
  }

  function matchWheel() {
    switch (wheelIndex) {
      case 0:
        {
          target = displayList.bonusWheelBottomDiv;
          break;
        }
      case 1:
        {
          target = displayList.bonusWheelMiddleDiv;
          break;
        }
      case 2:
        {
          target = displayList.bonusWheelTopDiv;
          break;
        }
    }
  }

  function reset() {
    if (wheelIndex > 0) {
      wheelTimeLine.reverse(0, true);
    }
    bonusComplete = null;
    wheelIndex = 0;
    matchWheel();

    displayList.bonusSpinButton.enabled = true;
    displayList.bonusSpinSpine.alpha = 1;


  }

  function returnToOuter() {
    wheelIndex = 0;
    matchWheel();
  }

  function bonusGame() {
    if (scenario.scenario.bonus.length > 0) {
      return new Promise(resolve => {
        bonusArray = scenario.scenario.bonus;
        msgBus.publish('game.transitionToNext');
        // Hide the ticketSelect
        msgBus.publish('UI.updateButtons', {            
          ticketSelect: false
        });
        bonusComplete = resolve;
      });
    }
  }

  function checkData() {
    if (bonusArray.length === 1) {
      msgBus.publish('game.meter.bonusDecrease');
      Tween.delayedCall(0.5, () => {
        bonusComplete();
        msgBus.publish('game.meter.endgame');

        Tween.delayedCall(1.5, () => {
          msgBus.publish('game.transitionToNext');
        });
      });
    } else {
      switch (bonusArray[0]) {
        case 'X':
          {
            msgBus.publish('game.meter.bonusDecrease');
            Tween.delayedCall(0.5, spinData);
            break;
          }
        case '0':
          {
            msgBus.publish('game.bonus.respin');
            audio.play('ruby');
            break;
          }
        case 'Z':
          {
            msgBus.publish('game.bonus.next');
            audio.play('arrowWin');
            Tween.delayedCall(1.5, spinData);
            break;
          }
        default:
          {
            Tween.delayedCall(1.7, spinData);
            audio.play('cash');
            break;
          }
      }
      displayList.bonusSpinButton.enabled = false;

      bonusArray.shift();
    }
  }

  function spinData() {
    msgBus.publish('game.wheel.spin', {
      target: target,
      endpoint: bonusArray[0],
      wheelIndex: wheelIndex
    });
    displayList.bonusSpinButton.enabled = false;
  }

  function resize() {
    switch (wheelPhase) {
      case 1:
        {
          topWheel.scale.set(bonusWheelTopScale[0]);
          middleWheel.scale.set(bonusWheelMiddleScale[0]);
          bottomWheel.scale.set(bonusWheelBottomScale[0]);
          break;
        }
      case 2:
        {
          topWheel.scale.set(bonusWheelTopScale[1]);
          middleWheel.scale.set(bonusWheelMiddleScale[1]);
          bottomWheel.scale.set(bonusWheelBottomScale[1]);
          break;
        }
      case 3:
        {
          topWheel.scale.set(bonusWheelTopScale[2]);
          middleWheel.scale.set(bonusWheelMiddleScale[2]);
          bottomWheel.scale.set(bonusWheelBottomScale[2]);
          break;
        }
    }
  }

  function reSpin() {
    Tween.delayedCall(0.5, () => {
      spinData();
    });
  }

  msgBus.subscribe('game.bonus.setup', setupWheel);
  msgBus.subscribe('game.bonus.next', gotoNextWheel);
  msgBus.subscribe('game.bonus.return', returnToOuter);
  msgBus.subscribe('game.bonus.reset', reset);
  msgBus.subscribe('game.bonus.checkData', checkData);
  msgBus.subscribe('game.bonus.respin', reSpin);

  msgBus.subscribe('GameSize.OrientationChange', resize);

  return {
    init,
    bonusGame,
  };

});