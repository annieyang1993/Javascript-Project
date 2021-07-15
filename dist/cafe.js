class Cafe {
    constructor(name, lat, lng, menu, image) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.menu = menu;
        this.image = image;
    }

    lat() {
        return this.lat;
    }

    name() {
        return this.name;
    }

    lng() {
        return this.lng;
    }

    menu() {
        return this.menu;
    }

}

const cafe1 = new Cafe("Kahve", 40.7643773, -73.98882, "menu1", "./CafePictures/cafe1.jpeg");
const cafe2 = new Cafe("Blue Bottle Coffee", 40.7522643, -73.978451, "menu2", "./CafePictures/cafe2.jpg");
const cafe3 = new Cafe("Stumptown", 40.7458046, -73.9883069, "menu3", "./CafePictures/cafe3.jpeg");
const cafe4 = new Cafe("Old Country Coffee", 40.754478, -73.9984169, "menu4", "./CafePictures/cafe4.jpeg");
const cafe5 = new Cafe("Peet's Coffee", 40.7346832, -73.990951, "menu5", "./CafePictures/cafe5.jpg");
const cafe6 = new Cafe("La Colombe Coffee Roasters", 40.7239892, -73.9986344, "menu6", "./CafePictures/cafe6.jpeg");
const cafe7 = new Cafe("Think Coffee", 40.728338, -73.9974747, "menu7", "./CafePictures/cafe7.jpeg");
const cafe8 = new Cafe("B Cup Cafe", 40.7287145, -73.9808812, "menu8", "./CafePictures/cafe8.jpeg");
const cafe9 = new Cafe("Cafe Standard", 40.7279622, -73.9930472, "menu9", "./CafePictures/cafe9.jpeg");
const cafe10 = new Cafe("Coffee Inn", 40.7668161, -73.9586267, "menu10", "./CafePictures/cafe10.jpeg");
const cafe11 = new Cafe("Parliament Espresso and Coffee Bar", 40.7823762, -73.9785181, "menu11", "./CafePictures/cafe11.jpeg");
const cafe12 = new Cafe("Plowshares Coffee", 40.7910521, -73.977316, "menu12", "./CafePictures/cafe12.jpeg");
const cafe13 = new Cafe("Cafe One", 40.8140119, -73.9495115, "menu13", "./CafePictures/cafe13.jpeg");
const cafe14 = new Cafe("Ginjan Cafe", 40.8016196, -73.9607124, "menu14", "./CafePictures/cafe14.jpeg");
const cafe15 = new Cafe("Pabade Cafe", 40.7972664, -73.948739, "menu15", "./CafePictures/cafe15.jpg");
const cafe16 = new Cafe("Matto Espresso", 40.8211895, -73.951786, "menu16", "./CafePictures/cafe16.jpeg");
const cafe17 = new Cafe("Silk Road Cafe", 40.7118027, -74.0053415, "menu17", "./CafePictures/cafe17.jpeg");
const cafe18 = new Cafe("Ground Central Coffee", 40.704109, -74.0116394, "menu18", "./CafePictures/cafe18.jpeg");
const cafe19 = new Cafe("Ateaz", 40.7764291, -73.9573282, "menu19", "./CafePictures/cafe19.jpeg");
const cafe20 = new Cafe("Forever Coffee Bar", 40.843375, -73.9456693, "menu20", "./CafePictures/cafe20.jpeg");

const cafes = [cafe1, cafe2, cafe3, cafe4, cafe5, cafe6, cafe7, cafe8, cafe9, cafe10,
                cafe11, cafe12, cafe13, cafe14, cafe15, cafe16, cafe17, cafe18, cafe19, cafe20];


//console.log(cafe1.lat);
//module.exports = Cafe;
// module.exports.cafes = function () {
//     return [cafe1, cafe2, cafe3, cafe4, cafe5];
// };
