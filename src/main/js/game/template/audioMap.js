define({
  // IMPLEMENT: Map SFX to channels

  /* 
   * If audio assets are named nicely you can do:
   * {
   *  fileName: channelNumber
   * }
   * 
   * Otherwise use a nice name for the keys and include the filename and channel as an array:
   * {
   *  soundName: ['Ugly_sound_file_V2-final', channelNumber]
   * }
   */

  music: ['BaseMusicLoop', 11],
  bonusMusic: ['BonusMusicLoop', 0],
  winTerminator: ['MusicTermWin', 1],
  loseTerminator: ['MusicTermLose', 1],
  transition: ['BonusTransition', 10],
  bonusTriggered: ['BonusTriggered', 10],
  loseLife: ['LoseLife', 10],


  click: ['Click', 4],
  costDown: ['BetDown', 1],
  costUp: ['BetUp', 2],
  costMax: ['BetMax', 3],
  cash: ['CashWin', 1],

  bounce: ['WinRollTerm', 9],
  rollUp: ['WinRollup', 8],

  /*
   * Audio groups
   * A game can include multiple variations of each of these sounds. Ensure each variation starts
   * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
   * item in the group will be used.
   */

  win_7: ['7Win01', 2],
  arrowWin: ['ArrowWin', 2],
  spinButton: ['SpinButton', 3],
  spinLoop: ['SpinLoop', 4],

  ruby: ['Ruby01', 3],
  ruby_1: ['Ruby02', 7],
  ruby_2: ['Ruby03', 6],
  ruby_3: ['Ruby04', 9],


  reveal_1: ['Reveal03', 4],
  reveal_2: ['Reveal02', 1],
  reveal_3: ['Reveal01', 3],
  reveal_4: ['Reveal04', 5],

  playAllSound: ['RevealAllButton', 4],

  //noMatch_1: ['NoMatch01', 5],
  //noMatch_2: ['NoMatch02', 6],
  //noMatch_3: ['NoMatch03', 7],
  //noMatch_4: ['NoMatch04', 8],

  // winningNumber_3: ['WinningNumberSelect3', 6],
  playerNumber: ['YourNumberSelect', 4],
  playerNumber_2: ['YourNumberSelect2', 3],
  playerNumber_3: ['YourNumberSelect3', 5],
  match: ['Match', 1],

  /*
   * Optional audio
   * The following audio is optional and will be ignored if not included
   */

  buy: ['BuyButton', 4],
  //revealAll: ['RevealAllButton', 4],
});