define(require=>{

    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const PIXI = require('com/pixijs/pixi');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');

    require('com/gsap/TimelineMax');
    let Timeline = window.TimelineMax;

    let sparkelArray = [];

    function init() {
        let sparkleDelay = (gameConfig.sparkleTimer * 1000);

        sparkelArray = [
            displayList.logoSparkle1,
            displayList.logoSparkle2,
            displayList.logoSparkle3,
            displayList.logoSparkle4,
            displayList.logoSparkle5,
        ];

        sparkelArray.forEach(e=>{e.alpha = 0;});

        PIXI.ticker.shared.add(()=>{
            sparkelArray.forEach(e=>{
                e.rotation += 0.01;
            });
        });

        setInterval(activeSparkle,sparkleDelay);
    }

    function activeSparkle() {
        let index = Math.floor(Math.random() * sparkelArray.length);

        let timeline = new Timeline();

        timeline.to(sparkelArray[index],1,{
            alpha:1
        },0);
        timeline.to(sparkelArray[index],1,{
            alpha:0
        },1);
    }

    return {
        init
    };

});