define((require) => {
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const PIXI = require('com/pixijs/pixi');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');

    require('com/pixijs/pixi-particles');

    require('com/gsap/TweenLite');
    require('com/gsap/easing/EasePack');

    const Tween = window.TweenLite;

    let index = 0;

    let emitter;
    let container;

    let targetLocation = [];

    let config = {
        "alpha": {
            "start": 1,
            "end": 0
        },
        "scale": {
            "start": 1,
            "end": 0.1,
            "minimumScaleMultiplier": 0.1
        },
        "color": {
            "start": "#ffffff",
            "end": "#ff0400"
        },
        "speed": {
            "start": 1,
            "end": 1,
            "minimumSpeedMultiplier": 1
        },
        "acceleration": {
            "x": 10,
            "y": 10
        },
        "maxSpeed": 1,
        "startRotation": {
            "min": 270,
            "max": 270
        },
        "noRotation": false,
        "rotationSpeed": {
            "min": 1,
            "max": 0
        },
        "lifetime": {
            "min": 0.1,
            "max": 1
        },
        "blendMode": "add",
        "extraData": {
            "path": "cos(x/50) * (2 * (sqrt(x) / 2))"
        },
        "frequency": 0.001,
        "emitterLifetime": -1,
        "maxParticles": 10000,
        "pos": {
            "x": 0,
            "y": 0
        },
        "addAtBack": true,
        "spawnType": "circle",
        "spawnCircle": {
            "x": 0,
            "y": 0,
            "r": 25
        }
    };

    function init() {
        let background = displayList.particles;
        container = new PIXI.Container();

        container.position.set(0);

        emitter = new PIXI.particles.Emitter(
            container,
            [
                PIXI.Texture.from('sparkle1'),
                PIXI.Texture.from('sparkle1-1'),
                PIXI.Texture.from('sparkle2'),
                PIXI.Texture.from('sparkle2-1'),
            ],
            config
        );
        emitter.emit = false;

        emitter.autoUpdate = true;
        background.addChild(container);

        targetLocation = [
            {
                x: orientation.get() === orientation.LANDSCAPE ? 240 : 525,
                y: orientation.get() === orientation.LANDSCAPE ? 620 : 360
            },
            {
                x: orientation.get() === orientation.LANDSCAPE ? 310 : 585,
                y: orientation.get() === orientation.LANDSCAPE ? 620 : 360
            },
            {
                x: orientation.get() === orientation.LANDSCAPE ? 350 : 640,
                y: orientation.get() === orientation.LANDSCAPE ? 620 : 360
            },
            {
                x: orientation.get() === orientation.LANDSCAPE ? 400 : 680,
                y: orientation.get() === orientation.LANDSCAPE ? 620 : 360
            },
            {
                x: orientation.get() === orientation.LANDSCAPE ? 420 : 720,
                y: orientation.get() === orientation.LANDSCAPE ? 620 : 360
            },
        ];
    }

    function goto(data) {
        let loc = {};

        loc.x = targetLocation[index].x;
        loc.y = targetLocation[index].y;

        emitter.ownerPos.x = data.start.x;
        emitter.ownerPos.y = data.start.y;

        emitter.emit = true;

        index++;

        Tween.to(emitter.ownerPos, 0.25, {
            x: loc.x,
            y: loc.y,
            onComplete: () => {
                emitter.emit = false;
                msgBus.publish('game.meter.bonusIncrease');
            }
        });
    }

    function reset() {
        index = 0;
    }

    msgBus.subscribe('game.bonusParticles.goto', goto);
    msgBus.subscribe('game.bonusParticles.reset', reset);

    return {
        init
    };

});