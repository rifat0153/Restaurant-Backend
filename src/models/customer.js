const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    }
    
}, {timestamps: true });


module.exports = mongoose.model('Customer', customerSchema);