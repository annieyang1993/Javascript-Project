class Item{
    constructor(name, image, price, quantity){
        this.name = name;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
    }
};

const item1 = new Item("appleJuice", "./ItemPictures/appleJuice.jpeg");
const item2 = new Item("bagel", "./ItemPictures/bagel.jpeg");
const item3 = new Item("blackTea", "./ItemPictures/blackTea.jpeg");
const item4 = new Item("bread", "./ItemPictures/bread.jpeg");
const item5 = new Item("brownies", "./ItemPictures/brownies.jpeg");
const item6 = new Item("bubbletea", "./ItemPictures/bubbletea.jpeg");
const item7 = new Item("chocolateCake", "./ItemPictures/chocolateCake.jpeg");
const item8 = new Item("coffee", "./ItemPictures/coffee.jpeg");
const item9 = new Item("coffeeCake", "./ItemPictures/coffeeCake.jpeg");
const item10 = new Item("cookie", "./ItemPictures/cookie.jpeg");
const item11 = new Item("creamPuff", "./ItemPictures/creamPuff.jpeg");
const item12 = new Item("croissant", "./ItemPictures/croissant.jpeg");
const item13 = new Item("danish", "./ItemPictures/danish.jpeg");
const item14 = new Item("donut", "./ItemPictures/donut.jpeg");
const item15 = new Item("eggBite", "./ItemPictures/eggBite.jpeg");
const item16 = new Item("eggTart", "./ItemPictures/eggTart.jpeg");
const item17 = new Item("frappucino", "./ItemPictures/frappucino.jpeg");
const item18 = new Item("fruitCake", "./ItemPictures/fruitCake.jpeg");
const item19 = new Item("greenTea", "./ItemPictures/greenTea.jpeg");
const item20 = new Item("hotChocolate", "./ItemPictures/hotChocolate.jpeg");
const item21 = new Item("icedCoffee", "./ItemPictures/icedCoffee.jpeg");
const item22 = new Item("latte", "./ItemPictures/latte.jpeg");
const item23 = new Item("madeleine", "./ItemPictures/madeleine.jpeg");
const item24 = new Item("milk", "./ItemPictures/milk.jpeg");
const item25 = new Item("oatmeal", "./ItemPictures/oatmeal.jpeg");
const item26 = new Item("sandwich", "./ItemPictures/sandwich.jpeg");
const item27 = new Item("scone", "./ItemPictures/scone.jpeg");
const item28 = new Item("timbit", "./ItemPictures/timbit.jpeg");
const item29 = new Item("wrap", "./ItemPictures/wrap.jpeg");
const item30 = new Item("yogurt", "./ItemPictures/yogurt.jpeg");

items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10
    , item11, item12, item13, item14, item15, item16, item17, item18, item19, item20
    , item21, item22, item23, item24, item25, item26, item27, item28, item29, item30];
menu0 = [item1,item4,item5,item10,item11, item12];
menu1 = [item2, item6, item13, item19, item12, item8, item14];
menu2 = [item3, item7, item13, item25, item27, item29, item20];
menu3 = [item30, item28, item26, item24, item23, item22];
menu4 = [item21, item20, item18, item17, item16, item15, item14, item9];

localStorage.setItem('menu0', menu0);
localStorage.setItem('menu1', menu1);
localStorage.setItem('menu2', menu2);
localStorage.setItem('menu3', menu3);
localStorage.setItem('menu4', menu4);
localStorage.setItem('items', items);
console.log("TESTING MENUS")
console.log(items);





    
    //const rootEl = document.querySelector(".ttt");
    //new View(game, rootEl);
