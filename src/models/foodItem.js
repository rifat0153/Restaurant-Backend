const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    foodItemName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
    
}, {timestamps: true });


module.exports = mongoose.model('FoodItem', foodItemSchema);