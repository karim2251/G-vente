const Order = require('../models/Order')


const getallorders = async (req, res) => {
    try {
      const orders = await Order.find()
          // .populate('orderDetails.product', 'nom') 
          .populate('idutilisateur', 'nom email');   
  
          res.status(200).json({ orders });
  } catch (error) {
      res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
  };


// create order
const createOrder = async (req, res) => {
    try {
        const { dateorder, orderDetails, idutilisateur } = req.body;
  
        // Create a new order
        const order = new Order({
            dateorder,
            orderDetails,
            idutilisateur
        });
  
        // Save the order to the database
        await order.save();
  
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
  };

  module.exports = {
    createOrder,
    getallorders
  }