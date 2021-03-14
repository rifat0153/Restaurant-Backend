const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({

    orderMasterId: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderMaster'},
    foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true},
    foodItemPrice: { type: Number },
    quantity: { type: Number },

}, {timestamps: true} );

module.exports = mongoose.model("OrderDetail", orderDetailSchema);