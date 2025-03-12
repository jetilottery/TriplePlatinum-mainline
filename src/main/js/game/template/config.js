define({
  /*
   * Game configuration options
   * Anything defined here could be overwritten either based on the channel in
   * assetPacks/CHANNEL/layout/gameConfig.js or at an operator level by gameConfig.json in i18n
   */

  // Should the HowToPlay screen show when the game loads
  showHowToPlayOnLoad: false,
  // Use AutoPlay with toggle start/stop rather than single use RevealAll
  toggleAutoPlay: false,
  // Time between each number being revealed in autoplay. 0 for instant reaveal.

  autoPlayPlayerNumberInterval: 0,
  autoPlayPlayerRowInterval: 0.9,
  wheelSpeed: 2,
  gameEndDelay: 0.75,

  // Time over which the music will fade out on entering the result screen
  resultMusicFadeOutDuration: 0,
  // Time between entering the result screen and the terminator audio starting
  resultTerminatorFadeInDelay: 0,
  // Time over which the terminator audio will fade in
  resultTerminatorFadeInDuration: 0.5,
  // Should the Result screen show when ticket is complete
  showResultScreen: true,
  // Hide the coins if they're still visible
  hideCoinsOnWinDismiss: false,
  // Supress non-winning result plaque
  suppressNonWinResultPlaque: true,
  // Delay before plaque is able to be dismissed
  secondsDelayDismissResult: 0,
  // Coin shower on result screen
  resultCoinShowerEnabled: true,
  // Bypass the play again button
  bypassPlayAgain: true,
  // Ticket cost meter visible while playing (formerly UI3 Mode)
  ticketCostMeterVisibleWhilePlaying: true,
  // Fast fade buttons
  fastFadeButtons: true,
  fastFadeDuration: 0.5,
  // Actual idle times will be random, +/- this value
  idleIntervalVariation: 0.25,
  // Delay in base game before transition to bonus
  delayBeforeTransitionToBonus: 2,
  // Delay before transitioning back to base game (win)
  bonusHoldOnCompleteWin: 2,
  // Delay between revealing bonus symbols per player number
  delayBetweenBonusSymbolsInSeconds: 0.25,
  // Pulse bonus item when collected in bonus area
  pulseBonusItemOnCollect: true,
  pulseBonusItemDuration: 0.25,

  delayBeforeStartIdleInSeconds: 0.5,
  // Delay before restarting idle animations after interaction
  delayBeforeResumeIdleInSeconds: 0.5,
  // Total Win rollup
  rollUpTotalWin: true,
  totalWinRollupInSeconds: 0.5,
  pulseTotalWinAfterRollup: false,
  pulseTotalWinDuration: 0.25,

  // Toggle background music on/off
  backgroundMusicEnabled: true,
  autoPlayAudioInterval: 0.35,
  useUI2Plaques: false,

  //enable console on MNS
  consoleEnabledDuringPlay: true,

  // Override maximum button width (for example if we have a bevel on the texture)
  overrideMaxButtonWidth: true,
  overrideButtonWidthValue: 190
});