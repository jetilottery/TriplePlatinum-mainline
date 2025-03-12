define(require => {

  const animationController = require('game/components/animation/animationController');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');

  function init() {

    for (let i = 1; i < 21; i++) {
      animationController.addAnimation({
        index: 'pickPoint' + i,
        file: 'TriplePlatinum',
        loop: true,
        x: 0,
        y: 0,
        pivotX: 0,
        pivotY: 0,
        container: displayList['pickPoint' + i]
      });

      animationController.addAnimation({
        index: 'revealPoint' + i,
        file: 'TriplePlatinum',
        loop: true,
        x: 0,
        y: 0,
        pivotX: 0,
        pivotY: 0,
        container: displayList['pickPoint' + i]
      });
    }


    animationController.addAnimation({
      index: 'bonusSpineController',
      file: 'TriplePlatinum_bonusMeter',
      loop: true,
      x: 180,
      y: 80,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSpineContainer
    });
    animationController.addAnimation({
      index: 'bonusSpineController_1',
      file: 'TriplePlatinum_bonusMeter',
      loop: true,
      x: 180,
      y: 80,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSpineContainer_bonus
    });
    animationController.addAnimation({
      index: 'bonusSymbol1',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSymbolHoldingArea
    });
    animationController.addAnimation({
      index: 'bonusSymbol2',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSymbolHoldingArea
    });
    animationController.addAnimation({
      index: 'bonusSymbol3',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSymbolHoldingArea
    });
    animationController.addAnimation({
      index: 'bonusSymbol4',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSymbolHoldingArea
    });
    animationController.addAnimation({
      index: 'bonusSymbol5',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusSymbolHoldingArea
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_1',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_2',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_3',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_4',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_5',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_1b',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer_bonus
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_2b',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer_bonus
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_3b',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer_bonus
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_4b',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer_bonus
    });
    animationController.addAnimation({
      index: 'bonusMeterSymbol_5b',
      file: 'triplePlatinum_bonusSymbols',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusPointContainer_bonus
    });
    animationController.addAnimation({
      index: 'transition',
      file: 'triplePlatinum_transition',
      loop: false,
      x: 0,
      y: 0,
      pivotX: orientation.get() === orientation.LANDSCAPE ? -720 : -360,
      pivotY: orientation.get() === orientation.LANDSCAPE ? -405 : -605,
      container: displayList.transitionContainer
    });
    animationController.addAnimation({
      index: 'winPlaqueAnim_v2',
      file: 'winPlaqueAnim',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.winPlaqueBG
    });
    animationController.addAnimation({
      index: 'wheelFXSpin',
      file: 'wheelFX',
      loop: false,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusWheelFXUpper
    });
    animationController.addAnimation({
      index: 'wheelFXUpgrade',
      file: 'wheelFX',
      loop: true,
      x: 0,
      y: 0,
      pivotX: 0,
      pivotY: 0,
      container: displayList.bonusWheelFXUpper
    });
    animationController.addAnimation({
      index: 'logo',
      file: 'triplePlatinum_logoAnim',
      loop: true,
      container: displayList.logoSpine
    });
    animationController.addAnimation({
      index: 'bonusSpinButtonContainer',
      file: 'Spin_button_Glow',
      loop: true,
      container: displayList.bonusSpinSpine
    });
    animationController.addAnimation({
      index: 'endGameNoPlaque',
      file: 'winPlaqueAnim',
      container: displayList.endGameWinNoPlaqueSpineContainer
    });
  }

  msgBus.subscribe('animation.play', data => {
    animationController.playAnimation(data);
  });

  msgBus.subscribe('animation.add', data => {
    animationController.queueAnimation(data);
  });

  msgBus.subscribe('animation.set', data => {
    animationController.setAnimation(data);
  });

  msgBus.subscribe('animation.setEvents', data => {
    animationController.setEvents(data);
  });

  msgBus.subscribe('animation.clearTrack', data => {
    animationController.clearTrack(data);
  });

  msgBus.subscribe('animation.emptyAnimations', data => {
    animationController.setEmptyAnimation(data);
  });

  msgBus.subscribe('animation.mix', data => {
    animationController.mix(data);
  });

  return {
    init
  };

});