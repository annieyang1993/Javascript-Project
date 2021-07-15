score = 0;
time = 30;
level = 1;
list = [];
clickedList=["1", "2"];
play = false;
highScore = localStorage.getItem('highScore')||0;
localStorage.setItem('highScore', 0);

localStorage.setItem('score', score);
localStorage.setItem('list', list);
localStorage.setItem('play', play);
localStorage.setItem('time', time);

function newGame(){
    console.log(clickedList);
    localStorage.setItem('clickedList', clickedList.join(', '));
    interval = setInterval(
        this.tick.bind(this)
        , 1000);
    localStorage.setItem('play', true);

    var itemList = [];
    var nameList = [];
    var i = 0;
    while (i < 10 + (level - 1) * 2) {
        const randInt = Math.floor(Math.random() * 30);
        if (!itemList.includes(items[randInt])) {
            itemList.push(items[randInt]);
            nameList.push(items[randInt].name);
            i = i + 1;
        }

    }
    display = nameList.join(', ');
    console.log(display);
    localStorage.setItem('display', display);
    localStorage.setItem('list', itemList);
    console.log("NEW GAME!!!");
    console.log(itemList);


}

function tick(){
        localStorage.setItem('time', parseInt(localStorage.getItem('time'))-1);
        time = parseInt(localStorage.getItem('time'));
        const timer = document.getElementsByClassName("time");
        timer[0].innerText = `Time Left: ${time}`;
        timer[0].setAttribute("style", "color:red")
        const score = document.getElementsByClassName("score");
        score[0].innerText = `Score: ${localStorage.getItem('score')}`;
        const marqueeDisplay = document.getElementsByClassName("marquee");
        marqueeDisplay[0].setAttribute("style", "color:green");
        display = localStorage.getItem('display');
        const highScoreDisplay = document.getElementsByClassName("highScore");
        marqueeDisplay[0].innerText = `${display}`;
        if (time === 0) {

            if (parseInt(localStorage.getItem('score'))>highScore){
                highScore = localStorage.getItem('score');
                localStorage.setItem('highScore', highScore);
                highScoreDisplay[0].setAttribute("style", "color:green")
                highScoreDisplay[0].innerText = `NEW HIGH SCORE!!!: ${localStorage.getItem('highScore')}`
            }
            clearInterval(interval);
            //time = 60;
            localStorage.setItem('time', 60);
            //score = 0;
            localStorage.setItem('score', 0);
            timer[0].innerText = `GAME OVER!!!!`;
            //highScoreDisplay[0].setAttribute("style", "color:green")
            
            //play = false
            localStorage.setItem('play', false);
            
            
            setTimeout(()=>{
                timer[0].setAttribute("style", "color: white")
                timer[0].innerText = 'Time Left: 1:00'
                highScoreDisplay[0].setAttribute("style", "color:white")
                highScoreDisplay[0].innerText = `High Score: ${localStorage.getItem('highScore')}`}, 1000);
                const newDisplay = document.getElementsByClassName("marquee");
                marqueeDisplay[0].setAttribute("style", "color:white");
                marqueeDisplay[0].innerText = "Drinkly";
                
                //score[0].innerText = `Score: ${localStorage.getItem('score')}`;
        }
    
        //console.log(this.time);
    }


    // clickEvents(){
    //     const menul = document.querySelector(".menuLoader");
    //         menul.forEach((item)=>{
    //             item.addEventListener("click", ()=>{
    //                 if (this.list.includes(item)){
    //                     this.score+=10;
    //                     console.log(score);
    //                 }
    //             })
    //         })
    //         console.log("WHATISMENULISTLENGTH");
    //         console.log(menuList.length);
    // }



