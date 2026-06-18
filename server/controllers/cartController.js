const Cart = require("../models/Cart");


// ADD TO CART
const addToCart = async (req, res) => {
try {

const { userId, productId, quantity } =
req.body;

const cartItem =
await Cart.create({

user: userId,

product: productId,

quantity

});

res.status(201).json({
message:
"Product added to cart",

cartItem
});

}

catch (error) {

res.status(500).json({
message:
error.message
});

}

};


// GET CART ITEMS
const getCartItems = async (
req,
res
) => {

try {

const cart =
await Cart.find()

.populate(
"product"
);

res.status(200).json(
cart
);

}

catch (error) {

res.status(500).json({
message:
error.message
});

}

};


// REMOVE ITEM
const removeFromCart =
async (
req,
res
) => {

try {

const cartItem =
await Cart.findByIdAndDelete(
req.params.id
);

if (!cartItem) {

return res
.status(404)
.json({

message:
"Cart item not found"

});

}

res.status(200).json({

message:
"Item removed"

});

}

catch (error) {

res.status(500).json({

message:
error.message

});

}

};


module.exports = {

addToCart,

getCartItems,

removeFromCart

};