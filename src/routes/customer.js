const express = require('express');
const router = express.Router();
const { addSingle, getAll, getSingle, update } = require('../controllers/customer');

router.post('/customer/add', addSingle);
router.get('/customer/getall', getAll);
router.get('/customer/details/:id', getSingle);
router.put('/customer/update/:id', update);

module.exports = router;