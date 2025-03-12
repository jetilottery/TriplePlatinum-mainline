define({
  plaqueMessageSmall: {},
  buttonText: {},
  winningNumbersTitle: {
    fontFamily: 'oswald',
    fontWeight: 'bold',
    fontSize: 36,
    //fill: 'fontColourLuckyNumberTitle'
    fill: ["#ffffff", "#b2b6c1"] //fillGradientStops: [0.5, 0.5],

  },
  playerNumbersTitle: {
    fontFamily: 'oswald',
    fontWeight: 'bold',
    fontSize: 36,
    fill: 'fontColourYourNumberTitle',
    lineJoin: "round",
    miterLimit: 30
  },
  prizeValueNoWin: {
    fontFamily: 'ImpactCondensed',
    fontSize: 28,
    fontWeight: 'normal',
    fill: ["#9b9a7a", "#62614d"],
    lineJoin: "round",
    miterLimit: 30,
    alpha: 0.5 //fill: ["#b7b7b9", "#5c5c5f"] 

  },
  prizeValueWin: {
    fontFamily: 'ImpactCondensed',
    fontSize: 28,
    fontWeight: 'normal',
    lineJoin: "round",
    miterLimit: 30,
    fill: ["#ffffff", "#b2b6c1"] //fillGradientStops: [0.5, 0.5],
    //fill: 'fontColourCashValueWin'

  },
  winUpTo: {
    fontSize: 100,
    fontFamily: 'ImpactCondensed',
    fontWeight: "normal",
    align: "right",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 15,
    dropShadowDistance: 2,
    fill: ["#cec246", "#fffee0"],
    //fillGradientStops: [0.5, 0.5],
    lineJoin: "round",
    miterLimit: 30,
    padding: 41,
    stroke: "#000000",
    strokeThickness: 1
  },
  winUpToPortrait: {
    fontSize: 90,
    fontFamily: 'ImpactCondensed',
    fontWeight: "normal",
    align: "right",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 15,
    dropShadowDistance: 2,
    fill: ["#cec246", "#fffee0"],
    left: 25,
    //fillGradientStops: [0.5, 0.5],
    //lineJoin: "bevel",
    //lineJoin: "round",
    //miterLimit: 30,
    //padding: 41,
    stroke: "#000000",
    strokeThickness: 1
  },
  infoBar: {
    fontSize: 28,
    fontFamily: 'ImpactCondensed',
    fontWeight: "normal",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 33,
    dropShadowDistance: 0,
    fill: "#ffffff",
    lineJoin: "round",
    miterLimit: 30,
    //fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
    //fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
    //lineJoin: "round",
    //miterLimit: 28, //padding: -10
    padding: 40 //stroke: "#603c06",
    //strokeThickness: 5

  },
  winUpToTitle: {
    fontSize: 55,
    fontFamily: 'ImpactCondensed',
    fontWeight: "normal",
    align: "right",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 15,
    dropShadowDistance: 2,
    fill: ["#cec246", "#fffee0"],
    //fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
    lineJoin: "round",
    miterLimit: 30,
    padding: 41,
    stroke: "#000000",
    strokeThickness: 1
  },
  segment: {
    fontFamily: 'oswald',
    fontSize: 40,
    fontWeight: 'bold',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 33,
    dropShadowDistance: 0,
    fill: '#000000',
    //fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
    //fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
    lineJoin: "round",
    miterLimit: 30,
    padding: 41,
    stroke: "#ffffff",
    strokeThickness: 5
  },
  bonusLabel: {
    fontFamily: 'ImpactCondensed',
    fontSize: 44,
    fontWeight: 'normal',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    lineJoin: "round",
    miterLimit: 30,
    fill: ["#ffffff", "#b2b6c1"] //strokeThickness: 5

  },
  bonusLabelGold: {
    fontFamily: 'ImpactCondensed',
    fontSize: 44,
    fontWeight: "normal",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    fill: ["#cec246", "#fffee0"],
    //fillGradientStops: [0.5, 0.5],
    lineJoin: "round",
    miterLimit: 30,
    stroke: "#000000",
    strokeThickness: 1,
    padding: 41 //stroke: "#603c06",
    //strokeThickness: 5

  },
  bonusWin: {
    fontFamily: 'oswald',
    fontSize: 44,
    fontWeight: 'bold',
    fill: 'fontColourBonusWin',
    lineJoin: "round",
    miterLimit: 30
  },
  bonusNoWin: {
    fontFamily: 'oswald',
    fontSize: 44,
    fontWeight: 'bold',
    lineJoin: "round",
    miterLimit: 30
  },
  losePlaqueBody: {
    fontFamily: 'ImpactCondensed',
    fontSize: 100,
    fontWeight: 'normal',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 10,
    fill: ["#ffffff", "#9b9b9b", "#ffffff"],
    fillGradientStops: [0.2, 0.5, 0.7],
    align: 'center',
    stroke: "#000000",
    strokeThickness: 5,
    lineJoin: "round",
    miterLimit: 30
  },
  // This is for non-plaque present in endGame
  winPlaqueBodyNoPlaque: {
    fontFamily: 'ImpactCondensed',
    fontSize: 100,
    fontWeight: 'normal',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 10,
    fill: ["#ffffff", "#9b9b9b", "#ffffff"],
    fillGradientStops: [0.2, 0.5, 0.7],
    align: 'center',
    stroke: "#000000",
    strokeThickness: 5,
    lineJoin: "round",
    miterLimit: 30
  },
  // This is for plaque present in the endGame
  winPlaqueBody: {
    fontFamily: 'ImpactCondensed',
    fontSize: 60,
    fontWeight: 'normal',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 10,
    fill: ["#ffffff", "#9b9b9b", "#ffffff"],
    fillGradientStops: [0.2, 0.5, 0.7],
    align: 'center',
    stroke: "#000000",
    strokeThickness: 5,
    lineJoin: "round",
    miterLimit: 30
  },
  winPlaqueValue: {
    fontFamily: 'ImpactCondensed',
    fontSize: 120,
    fontWeight: 'normal',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 10,
    dropShadowQuality: 5,
    fill: ["#cec246", "#fffee0"],
    padding: 41,
    stroke: "#000000",
    strokeThickness: 5,
    lineJoin: "round",
    miterLimit: 30
  },
  bonusWinTitle: {
    fontFamily: 'ImpactCondensed',
    fontSize: 44,
    fontWeight: "normal",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    fill: ["#cec246", "#fffee0"],
    //fillGradientStops: [0.5, 0.5],
    lineJoin: "round",
    miterLimit: 30,
    stroke: "#000000",
    strokeThickness: 1,
    padding: 41 //stroke: "#603c06",
    //strokeThickness: 5

  },
  bonusWinValue: {
    fontFamily: 'ImpactCondensed',
    fontSize: 60,
    fontWeight: "normal",
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    fill: ["#cec246", "#fffee0"],
    //fillGradientStops: [0.5, 0.5],
    lineJoin: "round",
    miterLimit: 30,
    stroke: "#000000",
    strokeThickness: 1,
    padding: 41 //stroke: "#603c06",
    //strokeThickness: 5

  },
  bonusInfo: {
    fontFamily: 'ImpactCondensed',
    fontSize: 25,
    fontWeight: 'normal',
    dropShadow: true,
    dropShadowAlpha: 0.5,
    dropShadowAngle: 1.7,
    dropShadowBlur: 11,
    dropShadowDistance: 3,
    align: 'center',
    lineJoin: "round",
    miterLimit: 30,
    fill: '#ffffff' //fill: ["#97d3e6", "#c7e8f1"],
    //fillGradientStops: [0, 0.5, 0.6, 0.7],
    //strokeThickness: 5

  },
  tutorialOKButtonEnabled: {
    fontFamily: 'oswald',
    fontSize: 38,
    fill: '#000000',
    //fill: 'fontColourTutorialOKButtonEnabled',
    padding: 10
  },
  tutorialOKButtonOver: {
    fontFamily: 'oswald',
    fontSize: 38,
    //fill: 'fontColourTutorialOKButtonOver',
    fill: '#000000',
    padding: 10
  },
  tutorialOKButtonPressed: {
    fontFamily: 'oswald',
    fontSize: 38,
    //fill: 'fontColourTutorialOKButtonPressed',
    fill: '#000000',
    padding: 10
  },
  mainButtonEnabled: {
    fontFamily: 'oswald',
    fontSize: 38,
    fill: '#000000',
    lineJoin: "round",
    miterLimit: 30,
    padding: 10
  },
  mainButtonDisabled: {
    fontFamily: 'oswald',
    fontSize: 38,
    fill: '#000000',
    lineJoin: "round",
    miterLimit: 30,
    padding: 10
  },
  mainButtonOver: {
    fontFamily: 'oswald',
    fontSize: 38,
    fill: '#000000',
    lineJoin: "round",
    miterLimit: 30,
    padding: 10
  },
  mainButtonPressed: {
    fontFamily: 'oswald',
    fontSize: 38,
    fill: '#000000',
    lineJoin: "round",
    miterLimit: 30,
    padding: 10
  }
});