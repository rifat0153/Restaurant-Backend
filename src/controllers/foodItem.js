const FoodItem = require('../models/FoodItem');

exports.addSingle = async (req, res) => {   

    const Obj = {
      foodItemName: req.body.foodItemName,
      price: req.body.price
    }

    const _collection = new FoodItem(Obj);

    await _collection.save( (error, newAdded) => {
        if(error){
           return res.status(400).json({ error });
        }
        if(newAdded){
            return res.status(200).json({newAdded});
        }
    });
}

exports.getAll = async (req, res) => {
    await FoodItem.find({}).exec((error, collections) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collections){
            return res.status(200).json(collections);
        }
    })
}

exports.getSingle = async (req, res) => {
    await FoodItem.findById(req.params.id).exec((error, collection) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collection){
            return res.status(200).json(collection);
        }
    })
}
