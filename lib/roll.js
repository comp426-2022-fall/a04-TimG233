// var diceSides;  // number of sides for your dice
// var diceNum;  // number of dices
// var rollTimes;  // number of times rolled

export function roll(diceSides, diceNum, rollTimes) {
    // loop through each roll
    var resultArray = [];
    for (let i = 0; i < rollTimes; i++) {
        var result = 0;
        for (let j = 0; j < diceNum; j++) {
            result += Math.floor(Math.random() * diceSides) + 1;
        }
        resultArray.push(result)
    }

    return {"sides": diceSides, "dice": diceNum, "rolls": rollTimes, "results": resultArray};   
}

