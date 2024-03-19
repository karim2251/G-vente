const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Mongoose schema
const OrderSchema = new Schema({
  dateorder: { 
      type: Date, 
      required: true 
  },
  orderDetails: [{
      product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
      },
      quantity: {
          type: Number,
          min: 1,
          required: true
      }
  }],
  idutilisateur: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
  }
});


const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
