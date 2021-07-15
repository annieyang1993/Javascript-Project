//var Cafe = require("./cafe");
//console.log(parseFloat(Cafe.cafes()[0].lat));

//<script src="./dist/cafe.js"></script>
function initMap() {
    // The location of NYC
    //console.log(parseFloat(Cafe.cafes()[0].lat));
    const NYC = { lat: 40.7545417, lng: -73.9763488 };
    // The map, centered at NYC
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.5,
        center: NYC,
    });

    // The marker, positioned at NYC
    const image = "./CoffeeIcon10";
    markers = [];
    cafes.forEach((cafe)=>{
        const marker = new google.maps.Marker({
            position: { lat: parseFloat(cafe.lat), lng: parseFloat(cafe.lng) },
            //position: { lat: 40.7545417, lng: -73.9763488},
            map: map,
            label: {
                color: 'rgb(8, 50, 49)',
                fontWeight: 'bold',
                text: cafe.name,
            },
            icon: {
                url: 'CoffeeIcon10.png',
                labelOrigin: new google.maps.Point(11, 50),
                size: new google.maps.Size(30, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(11, 40),
            }
        });
        markers.push(marker);
    });
    
    //console.log(menuBar);

}




// function initMap(){
//     var options = {
//         center: {lat: 40.7128, lng: 74.0060},
//         zoom: 8
//     }

//     map = new google.maps.Map(document.getElementById('map'), options);
// }

// function initMap(){
//     var options = {
//         center: {lat: 40.7128, lng: 74.0060},
//         zoom: 8
//     }

//     map = new google.maps.Map(document.getElementById('map'), options);
// }



