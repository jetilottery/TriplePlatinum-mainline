define(require => {
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');

    return function scenarioTransform(scenarioString) {
        // split the string into the three components; winning, instant and player numbers

        const [numbersString, bonusString] = scenarioString.split('|');

        // winning numbers are just a comma seperated list of numbers
        let numbers = numbersString.split(',').map(e=> e[0]);
        const prizes = numbersString.split(',').map(e => prizeData.prizeTable[e[1]]);
        // player numbers are a list of key:value pairs describing a number and its associated prize
        const bonus = [];

        bonusString.split('').forEach(e=>{
            if(e !== "0") {
                bonus.push(e);
            }
        });

        return {
            numbers,
            prizes,
            bonus,
        };
    };
});
