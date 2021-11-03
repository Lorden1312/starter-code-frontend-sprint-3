// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        id: 1

        //Si l'usuari compra més de 3 ampolles d'oli, el preu del producte descendeix a 10 euros.

    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        id: 2
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        id: 3

        //En comprar-se més de 10 mescles per a fer pastís, el seu preu es rebaixa a 2/3.
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        id: 4
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        id: 5
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        id: 6
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        id: 7
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        id: 9
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        id: 10
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0,
        discount: 0,
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (var i = 0; i < products.length; i++) {

        if (products[i].id === id) {
            cartList.push(products[i])
            console.log(cartList);
            return

        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = []

    console.log(cartList);
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes


    for (var i = 0; i < cartList.length; i++) {

        if (cartList[i].type === 'grocery') {
            subtotal.grocery.value += cartList[i].price

        } else if (cartList[i].type === 'beauty') {
            subtotal.beauty.value += cartList[i].price

        } else if (cartList[i].type === 'clothes') {
            subtotal.clothes.value += cartList[i].price
        }
    }
    console.log(subtotal);

    return subtotal;
}


// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    var subtotal = calculateSubtotals();

    var total = subtotal.grocery.value - subtotal.grocery.discount + subtotal.beauty.value - subtotal.beauty.discount + subtotal.clothes.value - subtotal.beauty.discount

    console.log(total);
    return total;

    //(Aqeust codi funciona pero no era exactament el que demanava lexercici)
    //var total = 0
    //for (var i = 0; i < cartList.length; i++) {
    //total += cartList[i].price
    //}

    //console.log(total);
    //return total
}

// Exercise 5
function applyPromotionsSubtotals() {
    //Si l'usuari compra més de 3 ampolles d'oli, el preu del producte descendeix a 10 euros.
    //En comprar-se més de 10 mescles per a fer pastís, el seu preu es rebaixa a 2/3.

    //oil discount after buy 3 botellas --->    -0.50


    var contadorAmpolles = 0;
    var contadorPastisos = 0;

    var AmpollesDiscount = 0.5;
    var PastisDiscount = 5 - 5 * 2 / 3;

    for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].id === 1) {
            contadorAmpolles++ /// contadorAmpolles = contadorAmpolles+1(seria el mateix)
        }
        if (cartList[i].id === 3) {
            contadorPastisos++
        }
    }
    if (contadorAmpolles >= 3) {
        subtotal.grocery.discount = contadorAmpolles * AmpollesDiscount

    }
    if (contadorPastisos > 10) {
        subtotal.grocery.discount = contadorPastisos * PastisDiscount
    }

    return calculateTotal();

}


// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


    for (var i = 0; i < cartList.length; i++) {
        var elementTrobat = cart.find(element => element.id === cartList[i].id)

        if (elementTrobat) {
            cart

        }
        else {
            cart.push(cartList[i])
        }
    }
}

function cleanCart() {
    cartList = []

    console.log(cartList);
}


// Exercise 7

var contadorPasta = 0;
var contadorAllinOne = 0;
var contadorZeroMakeUpKit = 0;
var contadorLipTints = 0;
var contadorLawnDress = 0;
var contadorLawnChiffonCombo = 0;
var contadorToddlerFrock = 0;

var PastaDiscount = 1;
var AllinOneDiscount = 5;
var ZeroMakeUpKitDiscount = 0.80;
var LipTintsDiscount = 1;
var LawnDressDiscount = 1.50;
var LawnChiffonComboDiscount = 0.60;
var ToddlerFrockDiscount = 0.30;


function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"


    for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].id === 2) {
            contadorPasta++
        }
        if (cartList[i].id === 4) {
            contadorAllinOne++
        }
        if (cartList[i].id === 5) {
            contadorZeroMakeUpKit++
        }
        if (cartList[i].id === 6) {
            contadorLipTints++
        }
        if (cartList[i].id === 7) {
            contadorLawnDress++
        }
        if (cartList[i].id === 8) {
            contadorLawnChiffonCombo++
        }
        if (cartList[i].id === 9) {
            contadorToddlerFrock++
        }
    }
    if (contadorPasta >= 2) {
        subtotal.grocery.discount = contadorPasta * PastaDiscount

    }
    if (contadorAllinOne >= 2) {
        subtotal.beauty.discount = contadorAllinOne * AllinOneDiscount
    }
    if (contadorZeroMakeUpKit >= 3) {
        subtotal.beauty.discount = contadorZeroMakeUpKit * ZeroMakeUpKitDiscount
    }
    if (contadorLipTints >= 4) {
        subtotal.beauty.discount = contadorLipTints * LipTintsDiscount
    }
    if (contadorLawnDress >= 2) {
        subtotal.clothes.discount = LawnDressAmpolles * LawnDressDiscount
    }
    if (contadorLawnChiffonCombo >= 2) {
        subtotal.clothes.discount = contadorLawnChiffonCombo * LawnChiffonComboDiscount
    }
    if (contadorToddlerFrock >= 4) {
        subtotal.clothes.discount = contadorToddlerFrock * ToddlerFrockDiscount
    }
    return calculateTotal();

}

// Exercise 8
function addToCart() {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cart.push(products[i])
            console.log(cart);
        }
    }
    return
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cart.cleanCart(products[i])
            console.log(cart);
        }
    }
    return
}
for (var i = 0; i < cartList.length; i++) {
    var elementTrobat = cartList.find(element => element.id === cartList[i].id)

    if (elementTrobat) {
        cartList

    }
    else {
        cartList.push(cartList[i])
    }


}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart



}
