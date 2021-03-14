const Customer = require('../models/customer');

exports.addSingle = async (req, res) => {   

    const customerObj = {
      customerName: req.body.customerName,
    }

    const _customer = new Customer(customerObj);

    await _customer.save( (error, customer) => {
        if(error){
           return res.status(400).json({ error });
        }
        if(customer){
            return res.status(200).json({ customer });
        }
    });
}

exports.getAll= async (req, res) => {
    await Customer.find({}).exec((error, customers) => {
        if(error){
            return res.status(400).json({error});
        }
        if(customers){
            return res.status(200).json(customers);
        }
    })
}

exports.getSingle = async (req, res) => {
    await Customer.findById(req.params.id).exec((error, customer) => {
        if(error){
            return res.status(400).json({error});
        }
        if(customer){
            return res.status(200).json(customer);
        }
    })
}

exports.update = async (req, res) => {
    await Customer.findByIdAndUpdate(req.params.id, {"customerName": req.body.customerName})
    .exec( (error, updatedCollection) => {
        if(error){
            return res.status(400).json({error});
        }
        if(updatedCollection){
            return res.status(200).json(updatedCollection)
        }
    })
}