const mongoose = require('mongoose');

const orderMasterSchema = new mongoose.Schema({

    orderNumber: { type: String },
    orderDetails: [{type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetail'}],
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    pMethod: { type: String },
    gTotal: { type: Number},

}, {timestamps: true} );

module.exports = mongoose.model("OrderMaster", orderMasterSchema);