define(require=> {
    const PIXI = require('com/pixijs/pixi');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');

    let replaceSet = {
        '[7]':'tutorial7',
        '[77]':'tutorial77',
        '[777]':'tutorial777',
        '[RUBY]':'tutorialBonus',
        '[WHEEL]':'tutorialWheel',
        '[WHEELPRIZE]':'tutorialPoint',
        '[WHEELARROW]':'tutorialArrow',
        '[WHEELRESPIN]':'tutorialRespin',
        '[WHEELX]':'tutorialLoss',
        '[7sLOGO]' : 'infoBarSymbol',
    };

    let startPosition = [
        [275,340],
        [235,270]
    ];

    function parseLines(array,options = {}) {
        let spacing = options.linespacing || 0;

        array.forEach((e,i)=>{
            e.y = startPosition[options.index][orientation.get()===orientation.LANDSCAPE ? 0:1] + (spacing*i);
            replace(e.text,e, {spacing:options.spacing,padding:options.padding});
        });
    }

    function replaceMidString(data) {
        let options = data.options || null;
        let container = data.container || null;
        let str = data.str || ' ';
        let replace = data.replace || ' ';

        let padding = options.padding || 0;
        let textureOffset = options.textureOffsetY || 0;

        var parsedString = str.split(replace);
        var preText = parsedString[0];
        var postText = parsedString[1];

        if (str.includes(replace)) {
            let sprite = new PIXI.Sprite(PIXI.Texture.from(replaceSet[replace]));
            sprite.y -= textureOffset;

            container.addChild(sprite);


            let leftString = new PIXI.Text(preText);
            let rightString = new PIXI.Text(postText);

            leftString.style = container.style;
            rightString.style = container.style;

            container.addChild(leftString,rightString);

            container.text = ' ';

            sprite.x = leftString.width + padding;
            rightString.x = sprite.x + (sprite.width + padding);
        }
    }

    function replace(str,pixiContainer,options = {}) {
        let spacing = options.spacing || 0;

        Object.keys(replaceSet).forEach(e=>{
            if(str.includes(e)) {
                let sprite = new PIXI.Sprite(PIXI.Texture.from(replaceSet[e]));
                sprite.anchor.set(0.5);
                pixiContainer.addChild(sprite);

                sprite.x -= spacing;
                // sprite.y = padding;

                pixiContainer.text = str.replace(e,'');
            }
        });
    }

    function run() {
        parseLines(displayList.howToPlayPage1.children,{
            spacing:orientation.get() === orientation.LANDSCAPE ? 120 : 70,
            linespacing:orientation.get() === orientation.LANDSCAPE ? 80 : 120,
            index:0
        });
        parseLines(displayList.howToPlayPage2.children,{
            spacing:orientation.get() === orientation.LANDSCAPE ? 120 : 80,
            linespacing:orientation.get() === orientation.LANDSCAPE ? 80 : 120,
            index:1
        });
    }

    msgBus.subscribe('game.util.howToPlay',run);
    msgBus.subscribe('game.util.replace',replaceMidString);
    msgBus.subscribe('GameSize.OrientationChange',()=>{
        if(displayList.howToPlayPage2 !== undefined) {
            run();
        }
    });

});