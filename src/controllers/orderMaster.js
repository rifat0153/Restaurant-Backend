const OrderMaster = require('../models/orderMaster');
const OrderDetail = require('../models/orderDetail');

exports.addSingle = async (req, res) => {   

    const Obj = {
      orderNumber: req.body.orderNumber,
      customerId: req.body.customerId,
      pMethod: req.body.pMethod,
      gTotal: req.body.gTotal,
    }

    const _collection = new OrderMaster(Obj);

    await _collection.save( (error, newAdded) => {
        if(error){
           return res.status(400).json({ error });
        }
        if(newAdded){
            return res.status(200).json(newAdded);
        }
    });
}

exports.getAll = async (req, res) => {
    await OrderMaster.find({}).exec((error, collections) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collections){
            return res.status(200).json(collections);
        }
    })
}

exports.getSingle = async (req, res) => {
    await OrderMaster.findById(req.params.id).exec((error, collection) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collection){
            return res.status(200).json(collection);
        }
    })
}

exports.getAllWithCustomer = async (req, res) => {

    await OrderMaster.find({})
    .select("_id orderNumber pMethod gTotal")
    .populate('orderDetails')
    .populate({ path: "customerId", select: "_id customerName" })
    .exec((error, collections) => {
        if(error){
            return res.status(400).json({error});
        }
        if(collections){
            return res.status(200).json(collections);
        }
    })
}

exports.deleteById = async (req, res) => {
    _orderMaster = await OrderMaster.findById(req.params.id);
    _orderDetails = _orderMaster.orderDetails

    _orderDetails.map((orderDetail, index) => {
        OrderDetail.findByIdAndDelete(orderDetail, (error, deleted) => {
            if(error){
               console.log({error});
            }
            if(deleted){
                console.log({deleted});
            }
        });
    })

    OrderMaster.findByIdAndDelete(req.params.id, (error, deleted) => {
        if(error){
            return res.status(400).json({error});
        }
        if(deleted){
            return res.status(200).json(deleted);
        }
    });

}