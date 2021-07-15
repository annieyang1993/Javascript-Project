function updateScore(score){
    header = document.querySelector(".header");
    scoreEle = document.createElement("div");
    console.log(scoreEle);
    console.log(score);
    scoreEle.innerText = `Score: ${score}`;
    header.append(scoreEle);
    
}

