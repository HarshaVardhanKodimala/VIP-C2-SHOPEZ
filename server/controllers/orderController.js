const Order = require("../models/Order");
const Cart = require("../models/Cart");

const placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const cartItems = await Cart.find({ user: userId })
      .populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const items = cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    const totalPrice = cartItems.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: userId,
      items,
      totalPrice,
    });

    await Cart.deleteMany({ user: userId });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("items.product", "name price");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  placeOrder,
  getOrders,
};