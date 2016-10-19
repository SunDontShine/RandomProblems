function shuffleArray(incorrects, solution) {
    incorrects.push(solution)
    for (var i = incorrects.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = incorrects[i];
        incorrects[i] = incorrects[j];
        incorrects[j] = temp;
    }
    return incorrects;
}
var incorrect = [77,60,44,137];
var sol = 63;
var tmp = shuffleArray(incorrect,sol);

for(var i =0; i < tmp.length; i++){
    console.log(tmp[i]);
}
