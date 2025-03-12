define(require => {
  const Timeline = require('com/gsap/TimelineLite');
  const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const gameArea = require('game/components/gameArea');

  let revealAllTimeline;

  function start() {

    revealAllTimeline = new Timeline();

    let revealPickPoints = gameArea.revealAll();
    // disable all interaction at the parent container level
    displayList.pointArray.interactiveChildren = false;

    revealAllTimeline.add(revealPickPoints, 0, 'normal', gameConfig.autoPlayPlayerRowInterval);

    return revealAllTimeline;
  }

  function stop() {
    // re-enable all interaction at the parent container level
    displayList.pointArray.interactiveChildren = false;

    // kill the revealAll timeline if active
    if (revealAllTimeline) {
      revealAllTimeline.kill();
      revealAllTimeline = undefined;
    }
  }

  return {
    start,
    stop,
  };
});