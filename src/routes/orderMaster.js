const express = require('express');
const router = express.Router();
const { addSingle, getAll, getSingle, getAllWithCustomer, deleteById } = require('../controllers/orderMaster');

router.post('/ordermaster/addsingle', addSingle);
router.get('/ordermaster/getall', getAll);
router.get('/ordermaster/populate', getAllWithCustomer);
router.get('/ordermaster/getsingle/:id', getSingle);
router.delete('/ordermaster/delete/:id', deleteById);


module.exports = router;