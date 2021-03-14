


const OrderDetail = require('../models/orderDetail');
const OrderMaster = require('../models/orderMaster');

exports.addSingle = async (req, res) => {   

    const Obj = {
      orderMasterId: req.body.orderMasterId,
      foodItemId: req.body.foodItemId,
      foodItemPrice: req.body.foodItemPrice,
      quantity: req.body.quantity
    }

    const _collection = new OrderDetail(Obj);

    await _collection.save( (error, newAdded) => {
        if(error){
           return res.status(400).json({ error });
        }
        if(newAdded){

            OrderMaster.findOne({_id: newAdded.orderMasterId}, (err, orderMaster) => {
                if(orderMaster){
                    orderMaster.orderDetails.push(newAdded._id);
                    orderMaster.save();
                }
            })
            return res.status(200).json({newAdded});
        }
    });
}

exports.getAll = async (req, res) => {
    await OrderDetail.find({}).exec((error, collections) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collections){
            return res.status(200).json(collections);
        }
    })
}

exports.getSingle = async (req, res) => {
    await OrderDetail.findById(req.params.id).exec((error, collection) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collection){
            return res.status(200).json(collection);
        }
    })
}

exports.getAllDetails = async (req, res) => {

    await OrderDetail.find({})
    .populate({ path: "orderMasterId", populate: {path: "customerId" }} )
    .populate({ path: "foodItemId", select: "_id price" })
    .exec((error, collections) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collections){
            return res.status(200).json(collections);
        }
    })
}

















