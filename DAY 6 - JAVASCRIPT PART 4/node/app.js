//Main application app.js

//Import necessary modules
const product =  require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');



//Add products to the cart
cart.addToCart(product[0]);
cart.addToCart(product[2]);

//Display the cart items
console.log('Cart Items', cart.getCartItems());

//Calculate and siplay the order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log('total order amount is: ', totalAmount);