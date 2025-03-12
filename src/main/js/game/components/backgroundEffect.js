define(require => {

  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const PIXI = require('com/pixijs/pixi');

  // const Tween = window.TweenMax;

  require('com/pixijs/pixi-particles');

  require('com/gsap/TweenMax');
  require('com/gsap/easing/EasePack');

  let bonusEmitter;
  let emitter;

  let config = {
    "alpha": {
      "start": 1,
      "end": 0
    },
    "scale": {
      "start": 0.01,
      "end": 1,
      "minimumScaleMultiplier": 1
    },
    "color": {
      "start": "#ffffff",
      "end": "#ffffff"
    },
    "speed": {
      "start": 5,
      "end": 0,
      "minimumSpeedMultiplier": 10
    },
    "acceleration": {
      "x": 0,
      "y": 0
    },
    "maxSpeed": 5,
    "startRotation": {
      "min": 270,
      "max": 270
    },
    "noRotation": false,
    "rotationSpeed": {
      "min": 1,
      "max": 100
    },
    "lifetime": {
      "min": 0.1,
      "max": 30
    },
    "blendMode": "add",
    "extraData": {
      "path": "cos(x/50) * (2 * (sqrt(x) / 2))"
    },
    "frequency": 0.1,
    "emitterLifetime": -1,
    "maxParticles": 1000,
    "pos": {
      "x": 0,
      "y": 0
    },
    "addAtBack": true,
    "spawnType": "rect",
    "spawnRect": {
      "x": -1000,
      "y": 0,
      "w": 2000,
      "h": 0
    }
  };

  let bonusConfig = {
    "alpha": {
      "start": 1,
      "end": 0
    },
    "scale": {
      "start": 0.01,
      "end": 1,
      "minimumScaleMultiplier": 1
    },
    "color": {
      "start": "#ffffff",
      "end": "#ff0400"
    },
    "speed": {
      "start": 5,
      "end": 0,
      "minimumSpeedMultiplier": 10
    },
    "acceleration": {
      "x": 0,
      "y": 0
    },
    "maxSpeed": 0,
    "startRotation": {
      "min": 270,
      "max": 270
    },
    "noRotation": false,
    "rotationSpeed": {
      "min": 1,
      "max": 100
    },
    "lifetime": {
      "min": 0.1,
      "max": 30
    },
    "blendMode": "add",
    "extraData": {
      "path": "cos(x/50) * (2 * (sqrt(x) / 2))"
    },
    "frequency": 0.1,
    "emitterLifetime": -1,
    "maxParticles": 1000,
    "pos": {
      "x": 0,
      "y": 0
    },
    "addAtBack": true,
    "spawnType": "rect",
    "spawnRect": {
      "x": -1000,
      "y": 0,
      "w": 2000,
      "h": 0
    }
  };


  function init() {
    let background = displayList.background;
    let container = new PIXI.Container();

    container.position.set(410, 1130);

    emitter = new PIXI.particles.Emitter(
      container, [
        PIXI.Texture.from('background-particle'),
        PIXI.Texture.from('sparkle1'),
        PIXI.Texture.from('sparkle1-1'),
        PIXI.Texture.from('sparkle2'),
        PIXI.Texture.from('sparkle2-1'),
      ],
      config
    );

    bonusEmitter = new PIXI.particles.Emitter(
      container, [
        PIXI.Texture.from('background-particle'),
        PIXI.Texture.from('sparkle1'),
        PIXI.Texture.from('sparkle1-1'),
        PIXI.Texture.from('sparkle2'),
        PIXI.Texture.from('sparkle2-1'),
      ],
      bonusConfig
    );

    emitter.autoUpdate = true;
    emitter.emit = true;
    bonusEmitter.autoUpdate = true;
    bonusEmitter.emit = false;
    background.addChild(container);
  }

  function transformToGreyScale() {

    /*
        Tween.delayedCall(0.5, () => {
          if (bonusEmitter.emit) {
            Tween.to(displayList.background, 0.25, {
              pixi: {
                saturation: 0,
              },
            });
          } else {
            Tween.to(displayList.background, 0.25, {
              pixi: {
                saturation: 1,
              },
            });
          }
        });
    */
    bonusEmitter.emit = !bonusEmitter.emit;
    emitter.emit = !emitter.emit;
  }

  msgBus.subscribe('game.background.transformToGreyScale', transformToGreyScale);

  return {
    init
  };
});