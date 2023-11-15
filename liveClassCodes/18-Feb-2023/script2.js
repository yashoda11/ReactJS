function setState(){
    let score = 22;
    return score;
}

let myScore = setState();
myScore;
myScore = 12;
console.log(myScore);

let anotherScore = setState();
console.log(anotherScore);