// var diceSides;  // number of sides for your dice
// var diceNum;  // number of dices
// var rollTimes;  // number of times rolled

export function roll(diceSides, diceNum, rollTimes) {
    // loop through each roll
    var resultArray = [];
    for (let i = 0; i < diceNum; i++) {
        resultArray.push(Math.floor(Math.random() * 6) + 1);
    }

    return {"sides": diceSides, "dice": diceNum, "rolls": rollTimes, "results": resultArray};   
}

