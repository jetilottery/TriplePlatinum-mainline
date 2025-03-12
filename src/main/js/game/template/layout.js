define({
    _BASE_APP: {
        children: ['background', 'gameAreas', 'logo', 'particles', 'winUpLabelcontainer', 'winUpTo', 'transitionContainer', 'endGameNoPlaqueContainer']
    },

    /*
     * BACKGROUND
     */
    background: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_background'
        },
        portrait: {
            texture: 'portrait_background'
        }
    },
    transitionContainer: {
        type: 'container'
    },
    gameAreas: {
        type: 'container',
        children: ['symbolsBackground', 'bonusContainer', 'bonusSymbolHoldingArea']
    },
    bonusSymbolHoldingArea: {
        type: 'container'
    },
    symbolsBackground: {
        type: 'sprite',
        children: ['infoBar', 'pointArray', 'pointArraySpineLayer', 'bonusBackground'],
        landscape: {
            texture: 'base-large',
            x: 580,
            y: 65
        },
        portrait: {
            texture: 'base-large',
            x: 8,
            y: 605,
            scale: 0.95
        }
    },
    infoBar: {
        type: 'sprite',
        texture: 'base',
        children: ['infoBarText'],
        x: 100,
        y: -40
    },
    infoBarText: {
        type: 'text',
        string: 'infoBarText',
        style: 'infoBar',
        fontSize: 28,
        maxWidth: 400,
        //wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        x: 160,
        y: 42 //wordWrapWidth: 700

    },
    particles: {
        type: 'container',
        portrait: {
            x: -180,
            y: 100
        },
        landscape: {
            y: -120
        }
    },
    bonusContainer: {
        type: 'container',
        children: ['bonusWheelContainer', 'bonusScoreContainer', 'bonusBackground_bonus'],
        landscape: {
            x: 920,
            y: 400,
            scale: 0.9
        },
        portrait: {
            x: 440,
            y: 718,
            scale: 0.8
        }
    },
    bonusScoreContainer: {
        type: 'container',
        children: ['totalWinBackground'],
        landscape: {
            x: -670,
            y: -70,
            scale: 1.10
        },
        portrait: {
            x: 10,
            y: 340,
            scale: 1
        }
    },
    totalWinBackground: {
        type: 'sprite',
        children: ['totalWinLabel', 'totalWinValue'],
        texture: 'win-panel',
        anchor: 0.5,
        portrait: {
            x: 180,
            y: -660
        },
        landscape: {
            x: 0,
            y: -20
        }
    },
    totalWinLabel: {
        type: 'text',
        style: 'bonusWinTitle',
        string: 'bonusWin',
        y: -43,
        anchor: 0.5,
        maxWidth: 300
    },
    totalWinValue: {
        type: 'text',
        style: 'bonusWinValue',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 400,
        y: 10
    },
    bonusWheelContainer: {
        type: 'container',
        children: ['bonusWheelFXLower', 'bonusWheelBottomBase', 'bonusWheelMiddleBase', 'bonusWheelTopBase', 'bonusArrow', 'bonusSpinButtonContainer', 'bonusWheelFXUpper', 'bonusWheelRespinTextContainer'],
        landscape: {
            x: 0,
            y: 0
        },
        portrait: {
            x: -15,
            y: 150,
            scale: 1.05
        }
    },
    bonusWheelRespinTextContainer: {
        children: ['bonusWheelRespinText'],
        type: 'container'
    },
    bonusWheelRespinText: {
        type: 'text',
        style: 'bonusWinValue',
        string: 'respin',
        anchor: 0.5,
        maxWidth: 400
    },
    bonusWheelFXLower: {
        type: 'container',
        landscape: {
            scale: 1.1
        }
    },
    bonusWheelFXUpper: {
        type: 'container',
        scale: 1.15,
        x: 3,
        y: 3
    },
    bonusArrow: {
        type: 'sprite',
        texture: 'selectorArrow',
        x: -440,
        y: -60,
        scale: 0.8
    },
    bonusWheelTopGem: {
        type: 'sprite',
        texture: 'ruby-particle',
        anchor: 0.5
    },
    bonusWheelTopRim: {
        type: 'sprite',
        texture: 'wheelInnerCircleRim',
        anchor: 0.5
    },
    bonusWheelTopShadow: {
        type: 'sprite',
        texture: 'small_wheel_shadow',
        anchor: 0.5,
        scale: 2.55
    },
    bonusWheelTopDivImg: {
        type: 'sprite',
        texture: 'wheelInnerCircleDivs',
        anchor: 0.5
    },
    bonusWheelTopDiv: {
        type: 'sprite',
        children: ['bonusWheelTopSegments', 'bonusWheelTopDivImg'],
        anchor: 0.5
    },
    bonusWheelTopSegments: {
        type: 'sprite',
        anchor: 0.5
    },
    bonusWheelTopBase: {
        type: 'sprite',
        children: ['bonusWheelTopDiv', 'bonusWheelTopRim', 'bonusWheelTopShadow', 'bonusWheelTopGem'],
        texture: 'wheelInnerCircle',
        anchor: 0.5
    },
    bonusWheelMiddleRim: {
        type: 'sprite',
        texture: 'wheelMiddleCircleRim',
        anchor: 0.5
    },
    bonusWheelMiddleShadow: {
        type: 'sprite',
        texture: 'medium_wheel_shadow',
        anchor: 0.5,
        scale: 1.55
    },
    bonusWheelMiddleDivImg: {
        type: 'sprite',
        texture: 'wheelMiddleCircleDivs',
        anchor: 0.5
    },
    bonusWheelMiddleDiv: {
        type: 'sprite',
        children: ['bonusWheelMiddleSegments', 'bonusWheelMiddleDivImg'],
        anchor: 0.5
    },
    bonusWheelMiddleSegments: {
        type: 'sprite',
        anchor: 0.5
    },
    bonusWheelMiddleBase: {
        type: 'sprite',
        children: ['bonusWheelMiddleDiv', 'bonusWheelMiddleRim', 'bonusWheelMiddleShadow'],
        texture: 'wheelMiddleCircle',
        anchor: 0.5
    },
    bonusWheelBottomRim: {
        type: 'sprite',
        texture: 'wheelOuterCircleRim',
        anchor: 0.5
    },
    bonusWheelBottomDivImg: {
        type: 'sprite',
        texture: 'wheelOuterCircleDivs',
        anchor: 0.5
    },
    bonusWheelBottomDiv: {
        type: 'sprite',
        children: ['bonusWheelBottomSegments', 'bonusWheelBottomDivImg'],
        anchor: 0.5
    },
    bonusWheelBottomSegments: {
        type: 'sprite',
        anchor: 0.5
    },
    bonusWheelBottomBase: {
        type: 'sprite',
        children: ['bonusWheelBottomDiv', 'bonusWheelBottomRim'],
        texture: 'wheelOuterCircle',
        anchor: 0.5
    },
    bonusSpinButtonContainer: {
        type: 'container',
        children: ['bonusSpinSpine', 'bonusSpinSprite', 'bonusSpinButton'],
        portrait: {
            x: 0,
            y: 440
        },
        landscape: {
            x: 470,
            y: 0
        }
    },
    bonusSpinButton: {
        type: 'button',
        textures: {
            enabled: 'spinButtonEnabled',
            over: 'spinButtonOver',
            pressed: 'spinButtonPressed',
            disabled: 'spinButtonDisabled'
        }
    },
    bonusSpinSprite: {
        type: 'spine',
        texture: '',
        landscape: {
            x: 0,
            y: 440
        },
        portrait: {
            x: 470,
            y: 0
        }
    },
    bonusSpinSpine: {
        type: 'continer'
    },
    bonusBackground: {
        type: 'container',
        children: ['bonusSpineContainer', 'bonusPointContainerArea', 'bonusTitle', 'bonusTitleGold', 'bonusInfoText'],
        landscape: {
            // texture: 'bonus_base_bg_silver',/**/
            x: -450,
            y: 377
        },
        portrait: {
            // texture: 'bonus_base_bg_silver',
            x: 235,
            y: -225,
            scale: 0.95
        }
    },
    bonusInfoText: {
        type: 'text',
        maxWidth: 450,
        string: 'bonusInfo',
        style: 'bonusInfo',
        anchor: 0.5,
        x: 180,
        y: -12
    },
    bonusSpineContainer: {
        type: 'container'
    },
    bonusPointContainer: {
        type: 'container',
        x: 0,
        y: -10
    },
    bonusPointContainerArea: {
        type: 'container',
        children: ['bonusPointContainer'],
        x: 190
    },
    bonusTitle: {
        type: 'text',
        style: 'bonusLabel',
        string: 'bonus',
        anchor: 0.5,
        maxWidth: 400,
        x: 180,
        y: 150
    },
    bonusTitleGold: {
        type: 'text',
        style: 'bonusLabelGold',
        string: 'bonus',
        anchor: 0.5,
        maxWidth: 400,
        x: 180,
        y: 150
    },
    bonusBackground_bonus: {
        type: 'container',
        children: ['bonusSpineContainer_bonus', 'bonusPointContainerArea_bonus', 'bonusTitle_bonus', 'bonusTitleGold_bonus', 'bonusInfoText_bonus'],
        landscape: {
            // texture: 'bonus_base_bg_silver',/**/
            x: -876,
            y: 47,
            scale: 1.1
        },
        portrait: {
            // texture: 'bonus_base_bg_silver',
            x: -440,
            y: -412,
            scale: 1
        }
    },
    bonusInfoText_bonus: {
        type: 'text',
        string: 'bonusInfo2',
        style: 'bonusInfo',
        maxWidth: 450,
        anchor: 0.5,
        x: 180,
        y: -12
    },
    bonusSpineContainer_bonus: {
        type: 'container'
    },
    bonusPointContainer_bonus: {
        type: 'container',
        landscape: {
            y: -10
        },
        portrait: {
            y: -10
        }
    },
    bonusPointContainerArea_bonus: {
        type: 'container',
        children: ['bonusPointContainer_bonus'],
        x: 190
    },
    bonusTitle_bonus: {
        type: 'text',
        style: 'bonusLabel',
        string: 'bonus',
        anchor: 0.5,
        maxWidth: 400,
        x: 180,
        y: 150,
        alpha: 0,
        visible: false
    },
    bonusTitleGold_bonus: {
        type: 'text',
        style: 'bonusLabelGold',
        string: 'bonus',
        anchor: 0.5,
        maxWidth: 400,
        x: 180,
        y: 150,
        alpha: 0,
        visible: false
    },

    /*
     * LOGO
     */
    logo: {
        type: 'container',
        children: ['logoSpine', 'logoSprite'],
        landscape: {
            x: 300,
            y: 130,
            scale: 0.95
        },
        portrait: {
            x: 380,
            y: 140,
            scale: 1.25
        }
    },
    logoSprite: {
        type: 'spine',
        texture: '',
        //ruby_logoz
        landscape: {
            x: -260,
            y: -320
        },
        portrait: {
            x: -260,
            y: -320
        }
    },
    logoSpine: {
        type: 'container'
    },
    winUpLabelcontainer: {
        type: 'container',
        children: ['winUpToLabel'],
        landscape: {
            anchor: {
                x: 0.5,
                y: 0.5
            },
            x: 315,
            y: 270,
            scale: 1
        },
        portrait: {
            anchor: {
                x: 1,
                y: 0.5
            },
            x: 260,
            y: 305,
            scale: 1
        }
    },
    winUpToLabel: {
        type: 'text',
        style: 'winUpToTitle',
        string: 'winUpTo',
        //anchor: 0.4,
        landscape: {
            maxWidth: 1000,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        },
        portrait: {
            maxWidth: 290,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }
    },

    /*
     * WIN UP TO
     */
    winUpTo: {
        type: 'container',
        children: ['winUpToIn', 'winUpToOut'],
        landscape: {
            x: 315,
            y: 340,
            scale: 0.8
        },
        portrait: {
            x: 415,
            y: 262,
            scale: 0.8
        }
    },
    winUpToIn: {
        type: 'container',
        children: ['winUpToInText']
    },
    winUpToInText: {
        type: 'text',
        string: 'winUpTo',
        maxWidth: 400,
        landscape: {
            anchor: 0.5,
            style: 'winUpTo'
        },
        portrait: {
            anchor: 0,
            style: 'winUpToPortrait'
        }
    },
    winUpToOut: {
        type: 'container',
        children: ['winUpToOutText']
    },
    winUpToOutText: {
        type: 'text',
        maxWidth: 400,
        landscape: {
            anchor: 0.5,
            style: 'winUpTo'
        },
        portrait: {
            anchor: 0,
            style: 'winUpToPortrait'
        }
    },
    sparkleArray: {
        type: 'container',
        children: ['logoSparkle1', 'logoSparkle2', 'logoSparkle3', 'logoSparkle4', 'logoSparkle5']
    },
    logoSparkle1: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: 120,
        y: -190,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle2: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: -190,
        y: -190,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle3: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: -160,
        y: 20,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle4: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: 50,
        y: -10,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle5: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: 120,
        y: 120,
        anchor: 0.5,
        scale: 2
    },

    /*
     * PLAYER NUMBERS
     */
    pointArray: {
        type: 'container',
        children: ['pickPoint1', 'pickPoint2', 'pickPoint3', 'pickPoint4', 'pickPoint5', 'pickPoint6', 'pickPoint7', 'pickPoint8', 'pickPoint9', 'pickPoint10', 'pickPoint11', 'pickPoint12', 'pickPoint13', 'pickPoint14', 'pickPoint15', 'pickPoint16', 'pickPoint17', 'pickPoint18', 'pickPoint19', 'pickPoint20'],
        landscape: {
            x: 25,
            y: -22,
            scale: 0.95
        },
        portrait: {
            x: 25,
            y: -20,
            scale: 0.95
        }
    },
    pointArraySpineLayer: {
        type: 'container',
        landscape: {
            x: 25,
            y: -30,
            scale: 0.94
        },
        portrait: {
            x: 25,
            y: -30,
            scale: 0.95
        }
    },
    pickPoint1: {
        type: 'container',
        x: 122,
        y: 133,
        scale: 0.95
    },
    pickPoint2: {
        type: 'container',
        x: 268,
        y: 133,
        scale: 0.95
    },
    pickPoint3: {
        type: 'container',
        x: 414,
        y: 133,
        scale: 0.95
    },
    pickPoint4: {
        type: 'container',
        x: 560,
        y: 133,
        scale: 0.95
    },
    pickPoint5: {
        type: 'container',
        x: 706,
        y: 133,
        scale: 0.95
    },
    pickPoint6: {
        type: 'container',
        x: 122,
        y: 255,
        scale: 0.95
    },
    pickPoint7: {
        type: 'container',
        x: 268,
        y: 255,
        scale: 0.95
    },
    pickPoint8: {
        type: 'container',
        x: 414,
        y: 255,
        scale: 0.95
    },
    pickPoint9: {
        type: 'container',
        x: 560,
        y: 255,
        scale: 0.95
    },
    pickPoint10: {
        type: 'container',
        x: 706,
        y: 255,
        scale: 0.95
    },
    pickPoint11: {
        type: 'container',
        x: 122,
        y: 379,
        scale: 0.95
    },
    pickPoint12: {
        type: 'container',
        x: 268,
        y: 379,
        scale: 0.95
    },
    pickPoint13: {
        type: 'container',
        x: 414,
        y: 379,
        scale: 0.95
    },
    pickPoint14: {
        type: 'container',
        x: 560,
        y: 379,
        scale: 0.95
    },
    pickPoint15: {
        type: 'container',
        x: 706,
        y: 379,
        scale: 0.95
    },
    pickPoint16: {
        type: 'container',
        x: 122,
        y: 500,
        scale: 0.95
    },
    pickPoint17: {
        type: 'container',
        x: 268,
        y: 500,
        scale: 0.95
    },
    pickPoint18: {
        type: 'container',
        x: 414,
        y: 500,
        scale: 0.95
    },
    pickPoint19: {
        type: 'container',
        x: 560,
        y: 500,
        scale: 0.95
    },
    pickPoint20: {
        type: 'container',
        x: 706,
        y: 500,
        scale: 0.95
    },

    /*
     * How To Play
     */
    howToPlayPages: {
        type: 'container',
        children: ['howToPlayPage1', 'howToPlayPage2'],
        portrait: {
            scale: 0.85
        },
        landscape: {
            scale: 1
        }
    },
    howToPlayPage1: {
        type: 'container',
        children: ['howToPlayPage1_1', 'howToPlayPage1_2', 'howToPlayPage1_3', 'howToPlayPage1_4'],
        landscape: {
            y: 10
        },
        portrait: {
            y: 300
        }
    },
    howToPlayPage2: {
        type: 'container',
        children: ['howToPlayPage2_1', 'howToPlayPage2_2', 'howToPlayPage2_3', 'howToPlayPage2_4'],
        landscape: {
            y: 50
        },
        portrait: {
            y: 350
        }
    },
    howToPlayPage1_1: {
        type: 'text',
        string: 'page1_line1',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage1_2: {
        type: 'text',
        string: 'page1_line2',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage1_3: {
        type: 'text',
        string: 'page1_line3',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage1_4: {
        type: 'text',
        string: 'page1_line4',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage2_1: {
        type: 'text',
        string: 'page2_line1',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage2_2: {
        type: 'text',
        string: 'page2_line2',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage2_3: {
        type: 'text',
        string: 'page2_line3',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },
    howToPlayPage2_4: {
        type: 'text',
        string: 'page2_line4',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500
        }
    },

    /*
    howToPlayPage2_5: {
      type: 'text',
      string: 'page2_line5',
      style: 'howToPlayText',
      fontSize: 30,
      wordWrap: true,
      anchor: {
        x: 0,
        y: 0.5
      },
      align: 'left',
      landscape: {
        x: 430,
        wordWrapWidth: 1100
      },
      portrait: {
        x: 225,
        wordWrapWidth: 500
      }
    },
    */
    losePlaqueMessage: {
        type: 'text',
        string: 'message_nonWin',
        style: 'losePlaqueBody',
        y: -50,
        anchor: 0.5,
        portrait: {
            maxWidth: 700
        },
        landscape: {
            maxWidth: 700
        }
    },
    endGameWinNoPlaque: {
        type: 'container',
        children: ['endGameWinNoPlaqueSpineContainer', 'endGameWinNoPlaqueValue'],
        portrait: {
            x: 410,
            y: 600
        },
        landscape: {
            x: 720,
            y: 410
        }
    },
    endGameNoPlaqueContainer: {
        type: 'container',
        children: ['endGameNoPlaqueContainerClick', 'endGameWinNoPlaque']
    },
    endGameNoPlaqueContainerClick: {
        type: 'pressable',
        children: ['endGameNoPlaqueContainerClickGraphic'] //portrait: {
        //y: 200
        //}

    },
    endGameNoPlaqueContainerClickGraphic: {
        type: 'rectangle',
        alpha: 0.5,
        landscape: {
            width: 1440,
            height: 810,
            fill: 0x000000
        },
        portrait: {
            width: 810,
            height: 1440,
            fill: 0x000000
        }
    },
    endGameWinNoPlaqueSpineContainer: {
        type: 'container',
        portrait: {
            y: 200
        },
        landscape: {
            y: 0
        }
    },
    endGameWinNoPlaqueValue: {
        children: ['endGameWinNoPlaqueLabel'],
        type: 'text',
        style: 'winPlaqueValue',
        anchor: 0.5,
        align: 'center',
        portrait: {
            y: 200
        },
        landscape: {
            y: 0
        }
    },
    endGameWinNoPlaqueLabel: {
        type: 'text',
        style: 'winPlaqueBodyNoPlaque',
        string: 'totalWin',
        anchor: 0.5,
        align: 'center',
        y: -140
    },
    buyButtonAnim: {
        type: 'sprite',
        anchor: 0.5,
        x: -10,
        y: -15
    },
    tryButtonAnim: {
        type: 'sprite',
        anchor: 0.5,
        x: -10,
        y: -5
    },
    buyButton: {
        landscape: {
            x: 758
        },
        portrait: {
            x: 0
        },
        type: 'button',
        string: 'button_buy',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        }
    },
    tryButton: {
        type: 'button',
        string: 'button_try',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        }
    },
    // buttonBar:{
    //     type: 'container',
    //     portrait: {
    //         y: 1245,
    //     }
    // },
    autoPlayButton_default: {
        type: 'pointer',
        landscape: {
            x: 720,
            y: 700
        },
        portrait: {
            x: 405,
            y: 1288 //scale: 0.5

        }
    },
    autoPlayButton_multi: {
        type: 'pointer',
        landscape: {
            x: 918,
            y: 700
        },
        portrait: {
            x: 405,
            y: 1288
        }
    },
    ticketSelectBarSmall: {
        type: 'container',
        landscape: {
            x: 595,
            y: 699
        },
        portrait: {
            x: 400,
            y: 1180 //scale: 0.85

        },
        children: ['ticketSelectBarBG', 'ticketSelectCostValue', 'ticketCostDownButtonStatic', 'ticketCostUpButtonStatic', 'ticketCostDownButton', 'ticketCostUpButton', 'ticketCostIndicators']
    },
    ticketSelectCostValue: {
        type: 'text',
        portrait: {
            y: -7
        },
        landscape: {
            y: -7,
            maxWidth: 150
        },
        anchor: 0.5,
        style: 'ticketSelectCostValue'
    },
    ticketCostDownButton: {
        type: 'button',
        portrait: {
            x: -208
        },
        landscape: {
            x: -143
        },
        textures: {
            enabled: 'minusButtonEnabled',
            disabled: 'minusButtonDisabled',
            over: 'minusButtonOver',
            pressed: 'minusButtonPressed'
        }
    },
    ticketCostIndicators: {
        type: 'container',
        children: ['ticketCostIndicatorActive', 'ticketCostIndicatorInactive'],
        portrait: {
            y: 20
        },
        landscape: {
            y: 20,
            scale: 0.8
        }
    },
    ticketCostUpButton: {
        type: 'button',
        portrait: {
            x: 208
        },
        landscape: {
            x: 143
        },
        textures: {
            enabled: 'plusButtonEnabled',
            disabled: 'plusButtonDisabled',
            over: 'plusButtonOver',
            pressed: 'plusButtonPressed'
        }
    },
    ticketCostDownButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        portrait: {
            x: -208
        },
        landscape: {
            x: -143
        },
        texture: 'minusButtonDisabled'
    },
    ticketCostUpButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        portrait: {
            x: 208
        },
        landscape: {
            x: 143
        },
        texture: 'plusButtonDisabled'
    },
    buttonBar: {
        type: 'container',
        landscape: {
            x: 0,
            y: 649
        },
        portrait: {
            x: 0,
            y: 1240 //scale: 0.9

        },
        children: ['helpButtonStatic', 'helpButton', 'homeButtonStatic', 'homeButton', 'exitButton', 'playAgainButton', 'tryAgainButton', 'buyButton', 'buyButtonAnim', 'tryButton', 'tryButtonAnim', 'moveToMoneyButton', 'retryButton']
    },
    footerContainer: {
        type: 'container',
        children: ['footerBG', 'balanceMeter', 'ticketCostMeter', 'winMeter', 'divider_1_3', 'divider_2_3', 'divider_1_2'],
        landscape: {
            y: 761
        },
        portrait: {
            y: 1349
        }
    },
    footerBG: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_footerBar',
            y: 5
        },
        portrait: {
            texture: 'portrait_footerBar',
            y: 5
        }
    },
    resultPlaqueOKButtonEnabled: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourEndOfGameMessageOKButtonEnabled',
        padding: 10
    },
    resultPlaqueOKButtonPressed: {
        fontFamily: 'oswald',
        fontSize: 41,
        fill: 'fontColourEndOfGameMessageOKButtonPressed',
        padding: 10
    },
    resultPlaqueOKButtonOver: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourEndOfGameMessageOKButtonOver',
        padding: 10
    },
    resultPlaquesContainer: {
        type: 'container',
        children: ['resultPlaqueOverlay', 'winPlaqueBG', 'winPlaqueMessage', 'winPlaqueValue', 'winPlaqueCloseButton', 'losePlaqueBG', 'losePlaqueMessage', 'losePlaqueCloseButton'],
        landscape: {
            x: 720,
            y: 370,
            maxWidth: 100
        },
        portrait: {
            x: 405,
            y: 720
        }
    },
    winPlaqueMessage: {
        type: 'text',
        string: 'message_win',
        style: 'winPlaqueBody',
        y: -100,
        anchor: 0.5,
        portrait: {
            maxWidth: 700
        },
        landscape: {
            maxWidth: 1200
        }
    },
    winPlaqueValue: {
        type: 'text',
        style: 'winPlaqueValue',
        y: 70,
        anchor: 0.5,
        maxWidth: 400
    },
    versionText: {
        type: 'text',
        style: 'versionText',
        x: 35,
        y: 120,
        alpha: 0.5,
        portrait: {
            y: 280
        }
    },
    howToPlayIndicators: {
        type: 'container',
        children: ['howToPlayIndicatorActive', 'howToPlayIndicatorInactive'],
        landscape: {
            x: 720,
            y: 590
        },
        portrait: {
            x: 405,
            y: 1000
        }
    },
    howToPlayIndicatorActive: {
        type: 'sprite',
        texture: 'tutorialPageIndicatorActive'
    },
    howToPlayIndicatorInactive: {
        type: 'sprite',
        texture: 'tutorialPageIndicatorInactive'
    },
    howToPlayBackground: {
        type: 'sprite',
        anchor: {
            x: 0.5
        },
        landscape: {
            x: 720,
            texture: 'landscape_tutorialBackground',
            y: 98
        },
        portrait: {
            x: 405,
            texture: 'portrait_tutorialBackground',
            y: 240
        }
    },
    howToPlayTitle: {
        type: 'text',
        string: 'howToPlay',
        style: 'howToPlayTitle',
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 178
        },
        portrait: {
            x: 405,
            y: 440
        }
    },
    audioButtonContainer: {
        type: 'container',
        landscape: {
            x: 79,
            y: 675
        },
        portrait: {
            x: 71,
            y: 1100
        }
    },
    howToPlayClose: {
        type: 'button',
        string: 'button_ok',
        landscape: {
            x: 720,
            y: 678
        },
        portrait: {
            x: 405,
            y: 1100
        },
        textures: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed'
        },
        style: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed'
        }
    },
    howToPlayPrevious: {
        type: 'button',
        landscape: {
            x: 72,
            y: 418
        },
        portrait: {
            x: 64,
            y: 700
        },
        textures: {
            enabled: 'tutorialLeftButtonEnabled',
            disabled: 'tutorialLeftButtonDisabled',
            over: 'tutorialLeftButtonOver',
            pressed: 'tutorialLeftButtonPressed'
        }
    },
    howToPlayNext: {
        type: 'button',
        landscape: {
            x: 1368,
            y: 418
        },
        portrait: {
            x: 746,
            y: 700
        },
        textures: {
            enabled: 'tutorialRightButtonEnabled',
            disabled: 'tutorialRightButtonDisabled',
            over: 'tutorialRightButtonOver',
            pressed: 'tutorialRightButtonPressed'
        }
    }
});