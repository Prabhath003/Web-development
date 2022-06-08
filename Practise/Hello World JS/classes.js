// Declaring a Class
class Product {
    constructor(itemName) {
        console.log('Passed by Furniture' + itemName);
        this.itemName = itemName;
    }

    getItemName(){
        return this.itemName + " is a Product";
    }
}

class Furniture extends Product {
    constructor(itemname) {
        super(itemName);
    }

    getItemName(){
        return this .itemName + " is Furniture"
    }
}

let pencil = new Product('Pencil', 20, 2, 'P10');
let chair = new Furniture('Chair', 499, 15, 'C10')

// const Product1 = class Product {
//     constructor(itemName, price, discount, productCode) {
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getdiscountValue(){
//         return this.discount;
//     }
//     /**
//      * @param {any} value
//      */
//     set setdiscountValue(value){
//         this.discount = value;
//     }

//     discountValue() {
//         return this.discount * this.price/100
//     }
// };

// let chair = new Product1('Chair', 499, 15, 'C10')

