const express = require('express');
const router = express.Router();
const { addSingle, getAll, getSingle, getAllDetails } = require('../controllers/orderDetail');

router.post('/orderdetail/addsingle', addSingle);
router.get('/orderdetail/getall', getAll);
router.get('/orderdetail/getsingle/:id', getSingle);
router.get('/orderdetail/populate', getAllDetails);


module.exports = router;