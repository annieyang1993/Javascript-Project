

class Game{
    constructor(){
        this.score = 0;
        this.time = 60;
        this.level = 1;
        this.list=[];
        this.interval = setInterval(
            this.tick.bind(this)
            , 1000);
        this.play = true;
    }

    newGame(){
        this.generateList(this.level);
        // if (this.play===true){
        //     this.clickEvents();
        // }
        
    }

    //10*(level-1)*2;
    generateList(level){
        var itemList = [];
        var i=0;
        while (i < 10 + (level - 1) * 2){
            const randInt = Math.floor(Math.random()*31);
            if (!itemList.includes(items[randInt])){
                itemList.push(items[randInt]);
                i = i+1;
            }

        }
        console.log(itemList.length);
        console.log("TESTINGITEMSLENGTH");
        itemList.forEach((item)=>{
            console.log(item);
        })
        this.list = itemList;
    }


    tick(){
        this.time-=1;
        const timer = document.getElementsByClassName("time");
        timer[0].innerText = `Time Left: ${this.time}`;
        timer[0].setAttribute("style", "color:red")
        const score = document.getElementsByClassName("score");
        score[0].innerText = `Score: ${this.score}`;
        if (this.time === 0) {
            clearInterval(this.interval);
            this.time = 60;
            this.score = 0;
            
            timer[0].innerText = `GAME OVER!!!!`;
            setTimeout(()=>{
                timer[0].setAttribute("style", "color:black")
                timer[0].innerText = 'Time Left: 1:00'}, 1000);
            this.play = false;
            return;
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

}

