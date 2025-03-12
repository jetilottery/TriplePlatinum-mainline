define(require => {

  const bonusPoint = require('game/components/bonusPoint');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const audio = require('skbJet/componentManchester/standardIW/audio');

  require('com/gsap/TweenMax');
  const Tween = window.TweenMax;

  require('com/gsap/TimelineMax');
  let Timeline = window.TimelineMax;

  let bonusPointArray;
  let parentContainer;
  let bonusPointArray_bonus;
  let parentContainer_bonus;
  let index = 0;

  function init() {
    parentContainer = displayList.bonusPointContainer;
    parentContainer_bonus = displayList.bonusPointContainer_bonus;

    let containerStartX = 60;

    bonusPointArray = [
      new bonusPoint(0, parentContainer, 'bonusMeterSymbol_1'),
      new bonusPoint(1, parentContainer, 'bonusMeterSymbol_2'),
      new bonusPoint(2, parentContainer, 'bonusMeterSymbol_3'),
      new bonusPoint(3, parentContainer, 'bonusMeterSymbol_4'),
      new bonusPoint(4, parentContainer, 'bonusMeterSymbol_5'),
    ];

    bonusPointArray_bonus = [
      new bonusPoint(0, parentContainer_bonus, 'bonusMeterSymbol_1b'),
      new bonusPoint(1, parentContainer_bonus, 'bonusMeterSymbol_2b'),
      new bonusPoint(2, parentContainer_bonus, 'bonusMeterSymbol_3b'),
      new bonusPoint(3, parentContainer_bonus, 'bonusMeterSymbol_4b'),
      new bonusPoint(4, parentContainer_bonus, 'bonusMeterSymbol_5b'),
    ];

    bonusPointArray.forEach((e, i) => {
      e.setXPosition(containerStartX + (60 * i));
    });

    bonusPointArray_bonus.forEach((e, i) => {
      e.setXPosition(containerStartX + (60 * i));
    });

    displayList.bonusTitleGold.alpha = 0;
    displayList.bonusTitleGold_bonus.alpha = 0;

    msgBus.publish('animation.play', {
      index: 'bonusSpineController',
      anim: 'bonusMeter_Static',
      delay: 0,
      loop: 0
    });

    msgBus.publish('animation.play', {
      index: 'bonusSpineController_1',
      anim: 'bonusMeter_Static',
      delay: 0,
      loop: 0,
      renderable: false,
    });

    center();
  }

  function increase() {
    if (index < 5) {
      bonusPointArray[index].transformToEnabled(center);
      bonusPointArray_bonus[index].transformToEnabled(center);
      index++;
      if (index === 3) {
        transformToGold();
        audio.play('bonusTriggered');
        msgBus.publish('game.gameArea.startBonusLoop');
      }
    }
  }

  function center() {
    let x;

    x = 0;
    parentContainer.children.forEach(e => {
      x += e.children[1].width;
    });
    parentContainer.x = 0;
    parentContainer.x = -x / 2;

    x = 0;
    parentContainer_bonus.children.forEach(e => {
      x += e.children[1].width;
    });
    parentContainer_bonus.x = 0;
    parentContainer_bonus.x = -x / 2;
  }

  function addToProccessor(target) {
    target.point.reveal();
  }

  function decrease() {
    bonusPointArray[index - 1].transformToLose();
    bonusPointArray_bonus[index - 1].transformToLose();
    audio.play('loseLife');
    if (index > 0) {
      index--;
    }
  }

  function transformToGold() {
    if (index === 3) {
      Tween.to(displayList.bonusTitleGold, 1, {
        alpha: 1
      });

      Tween.to(displayList.bonusTitleGold_bonus, 1, {
        alpha: 1
      });

      msgBus.publish('animation.play', {
        index: 'bonusSpineController',
        anim: 'bonusMeter_IN',
        delay: 0,
        loop: 0
      });
      msgBus.publish('animation.add', {
        index: 'bonusSpineController',
        anim: 'bonusMeter_loop',
        delay: 0,
        loop: -1
      });

      msgBus.publish('animation.play', {
        index: 'bonusSpineController_1',
        anim: 'bonusMeter_Static',
        delay: 0,
        loop: 0
      });
      msgBus.publish('animation.add', {
        index: 'bonusSpineController_1',
        anim: 'bonusMeter_Static',
        delay: 0,
        loop: -1
      });
    }
  }

  function reset() {
    index = 0;

    bonusPointArray.forEach(e => e.reset());
    displayList.bonusTitleGold.alpha = 0;

    bonusPointArray_bonus.forEach(e => e.reset());
    displayList.bonusTitleGold_bonus.alpha = 0;

    center();
  }

  function endGame() {
    let crossTimeLine = new Timeline();

    bonusPointArray.forEach(e => {
      crossTimeLine.to(e.loseLife.scale, 0.5, {
        x: 1.5,
        y: 2
      }, 0);

      crossTimeLine.to(e.loseLife.scale, 0.5, {
        x: 1,
        y: 1
      }, 0.4);
    });

    bonusPointArray_bonus.forEach(e => {
      crossTimeLine.to(e.loseLife.scale, 0.5, {
        x: 1.5,
        y: 1.5
      }, 0);

      crossTimeLine.to(e.loseLife.scale, 0.5, {
        x: 1,
        y: 1
      }, 0.4);
    });


    crossTimeLine.add(() => {
      msgBus.publish('game.wheel.bounceMeter');
    }, 0.9);
  }

  function getIndex() {
    return index;
  }

  msgBus.subscribe('game.meter.bonusIncrease', increase);
  msgBus.subscribe('game.meter.bonusDecrease', decrease);
  msgBus.subscribe('game.meter.endgame', endGame);
  msgBus.subscribe('game.meter.bonusReset', reset);
  msgBus.subscribe('game.meter.addToProccessor', addToProccessor);


  return {
    init,
    reset,
    increase,
    getIndex
  };

});