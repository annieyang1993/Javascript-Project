function loadAll(){ 
        list = document.querySelector(".menuBar");
        list = document.querySelector(".menuBar");
        //console.log(list.childNodes);
        list.childNodes.forEach((child) => {
            child.parentNode.removeChild(child);
        });
        for (let i = 0; i<markers.length; i++){
            const container = document.createElement("div");

            container.setAttribute("class", "float-container-list");
            
            
            const div1 = document.createElement("div");
            div1.setAttribute("class", "float-child-list-1");
            const div2 = document.createElement("div");
            div2.setAttribute("class", "float-child-list-2");
            //div1.setAttribute("width", "30%");
            //div2.setAttribute("width", "70%");
            container.setAttribute("border", "1px solid black");
            container.setAttribute("background-color", "black");
            container.setAttribute("overflow-y", "auto");
            const img = document.createElement("img");
            img.setAttribute("src", cafes[i].image);
            img.setAttribute("height", "110");
            img.setAttribute("width", "170");
            img.setAttribute("style", "vertical-align:middle;margin:15px");
            //img.setAttribute("border", "black");

            const div = document.createElement("div");
            div.innerHTML = cafes[i].name;
            div.setAttribute("style", "color:black");
            
            div.setAttribute("style", "text-align:center;margin-top:15px;color:rgb(62, 185, 181);font-weight:bold");
            //div.setAttribute("style", "color:rgb(62, 185, 181)")
            //div.setAttribute("style", "vertical-align:middle;margin:15px")


            div1.append(img);
            div2.append(div);
            //container.className = "listOfRestaurants";
            container.setAttribute("border", "1px solid black");
            
            //img.setAttribute("padding", "20")


            container.append(div1);
            container.append(div2);
            
            
            
            list.append(container);
        };

        for (let i = 0; i < markers.length; i++) {
            
            markers[i].addListener("click", () => {
                console.log(i);
                if (i%5===0){
                    location.href = "menu0.html";
                } else if (i%5===1){
                    location.href = "menu1.html";
                } else if (i % 5 === 2) {
                    location.href = "menu2.html";
                } else if (i % 5 === 3) {
                    location.href = "menu3.html";
                } else if (i % 5 === 4) {
                    location.href = "menu4.html";
                }
                
                //console.log("TEST2");
                //menuLoader("menu");
            })
        };
        //console.log(list.childNodes);
        for (let i = 0; i < list.childNodes.length; i++) {
            list.childNodes[i].addEventListener("click", () => {
                console.log(i);
                if (i % 5 === 0) {
                    location.href = "menu0.html";
                } else if (i % 5 === 1) {
                    location.href = "menu1.html";
                } else if (i % 5 === 2) {
                    location.href = "menu2.html";
                } else if (i % 5 === 3) {
                    location.href = "menu3.html";
                } else if (i % 5 === 4) {
                    location.href = "menu4.html";
                }
                //console.log("TEST1");
                //menuLoader("menu");
            });
        };

        for (let i = 0; i < list.childNodes.length; i++) {
            list.childNodes[i].addEventListener("mouseover", () => {
                list.childNodes[i].setAttribute("style", "background-color: rgb(205,220,219);");

                //     setTimeout(() => {
                //         list.childNodes[i].setAttribute("style", "background-color:white")
                //     }, 100)
                // }, false);

            });
        }

        for (let i = 0; i < list.childNodes.length; i++) {

            list.childNodes[i].addEventListener("mouseout", () => {
                list.childNodes[i].setAttribute("style", "background-color:white");

                //     setTimeout(() => {
                //         list.childNodes[i].setAttribute("style", "background-color:white")
                //     }, 100)
                // }, false);

            });
        }
        
};

function loadOne(currentShop){
        list = document.querySelector(".menuBar");
        //console.log(list.childNodes);
        list.childNodes.forEach((child)=>{
            child.parentNode.removeChild(child);
        });

            // a = document.createElement("div");
            // a.setAttribute("class", "menu-Bar");
            // list = document.querySelector(".menuBar");
            const container = document.createElement("div");

            container.setAttribute("class", "float-container-list");


            const div1 = document.createElement("div");
            div1.setAttribute("class", "float-child-list-1");
            const div2 = document.createElement("div");
            div2.setAttribute("class", "float-child-list-2");
            //div1.setAttribute("width", "30%");
            //div2.setAttribute("width", "70%");
            container.setAttribute("border", "1px solid black");
            container.setAttribute("background-color", "black");
            container.setAttribute("overflow-y", "auto");
            const img = document.createElement("img");
            img.setAttribute("src", currentShop.image);
            img.setAttribute("height", "110");
            img.setAttribute("width", "170");
            img.setAttribute("style", "vertical-align:middle;margin:15px");
            //img.setAttribute("border", "black");

            const div = document.createElement("div");
            div.innerHTML = currentShop.name;
            div.setAttribute("style", "color:black");

            div.setAttribute("style", "text-align:center;margin-top:15px;color:rgb(62, 185, 181);font-weight:bold");
            //div.setAttribute("style", "color:rgb(62, 185, 181)")
            //div.setAttribute("style", "vertical-align:middle;margin:15px")


            div1.append(img);
            div2.append(div);
            //container.className = "listOfRestaurants";
            container.setAttribute("border", "1px solid black");

            //img.setAttribute("padding", "20")


            container.append(div1);
            container.append(div2);



            list.append(container);

        for (let i = 0; i < markers.length; i++) {
            markers[i].addListener("click", () => {
                //location.href = "menu.html";
                //console.log("TEST2");
                //menuLoader("menu");
            })
        };
        //console.log(list.childNodes);
        for (let i = 0; i < list.childNodes.length; i++) {
            list.childNodes[i].addEventListener("click", () => {
                //location.href = "menu.html";
                //console.log("TEST1");
                //menuLoader("menu");
            });
        };

        for (let i = 0; i < list.childNodes.length; i++) {
            list.childNodes[i].addEventListener("mouseover", () => {
                list.childNodes[i].setAttribute("style", "background-color: rgb(205,220,219);");

                //     setTimeout(() => {
                //         list.childNodes[i].setAttribute("style", "background-color:white")
                //     }, 100)
                // }, false);

            });
        }

        for (let i = 0; i < list.childNodes.length; i++) {

            list.childNodes[i].addEventListener("mouseout", () => {
                list.childNodes[i].setAttribute("style", "background-color:white");

                //     setTimeout(() => {
                //         list.childNodes[i].setAttribute("style", "background-color:white")
                //     }, 100)
                // }, false);

            });
        }


}

// be able render menu view when either list item or icon item is clicked
// be able to geolocate - search a place, zoom in, and ONLY list cafes close to that location.


//NICE TO HAVES:
//three.js landing page
//