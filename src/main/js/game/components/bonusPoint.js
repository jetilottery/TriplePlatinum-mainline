define(require => {

    const PIXI = require('com/pixijs/pixi');
    const utils = require('skbJet/componentManchester/standardIW/layout/utils');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

    require('com/gsap/TweenLite');
    require('com/gsap/easing/EasePack');

    const Tween = window.TweenLite;

    let textures = {
        disabled_type1: 'sym-base-bonus',
        disabled_type2: 'sym-base-bonus',
        enabled: 'bonusSym'
    };

    class BonusPoint {
        constructor(index, parent, spineAnim) {
            let disabledTexture = textures['disabled_type1'];
            if (index > 2) {
                disabledTexture = textures['disabled_type2'];
            }

            this.index = index;
            this.parent = parent;

            this.spineAnim = null;

            this.container = new PIXI.Container();

            if (index < 3) {
                parent.addChild(this.container);
            }

            this.container.position.y = 90;

            const idleFrames = utils.findFrameSequence('cover');
            const transformFrames = utils.findFrameSequence('cover');
            const shiftPositionFrames = utils.findFrameSequence('cover');

            this.disabled = new PIXI.Sprite(PIXI.Texture.from(disabledTexture));
            this.enabled = new PIXI.Sprite(PIXI.Texture.from(textures['enabled']));

            this.loseLife = new PIXI.Sprite(PIXI.Texture.from('x'));

            this.idleAnim = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
            this.transformAnim = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
            this.shiftPositionAnim = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);

            this.idleAnim.textures = idleFrames.map(PIXI.Texture.from);
            this.transformAnim.textures = transformFrames.map(PIXI.Texture.from);
            this.shiftPositionAnim.textures = shiftPositionFrames.map(PIXI.Texture.from);

            parent.children.forEach(e => {
                if (e.index !== undefined && e.index === spineAnim) {
                    this.spineAnim = e;
                    this.container.addChild(e);
                    e.visible = false;
                }
            });

            [
                this.disabled,
                this.enabled,
                this.idleAnim,
                this.transformAnim,
                this.shiftPositionAnim,
                this.loseLife
            ].forEach(e => {
                this.container.addChild(e);
                e.anchor.set(0.5);
                e.visible = false;
            });

            this.disabled.visible = true;
        }

        setXPosition(position) {
            this.container.x = position;
        }

        transformToEnabled(center) {
            if (this.index > 2) {
                this.parent.addChild(this.container);
            }
            this.disabled.visible = false;

            this.spineAnim.visible = true;

            msgBus.publish('animation.play', {
                index: this.spineAnim.index,
                anim: 'bonusSymbol_meter_reveal',
                delay: 0.5,
                loop: 0
            });
            msgBus.publish('animation.add', {
                index: this.spineAnim.index,
                anim: 'bonusSymbol_meter_loop',
                delay: 0,
                loop: -1
            });

            center();
        }

        transformToLose() {
            this.loseLife.scale.set(2);
            this.loseLife.visible = true;

            Tween.to(this.loseLife.scale, 0.3, {
                ease: window.Back.easeOut.config(1.7),
                x: 1,
                y: 1
            });

        }

        reset() {
            this.spineAnim.visible = false;

            [
                this.disabled,
                this.enabled,
                this.idleAnim,
                this.transformAnim,
                this.shiftPositionAnim,
                this.loseLife
            ].forEach(e => {
                this.container.addChild(e);
                e.anchor.set(0.5);
                e.visible = false;
            });

            this.disabled.visible = true;

            if (this.index > 2) {
                this.parent.removeChild(this.container);
                this.disabled.visible = true;
            }
        }
    }

    return BonusPoint;

});