const express = require('express');
const router = express.Router();
const { addSingle, getAll, getSingle } = require('../controllers/FoodItem');

router.post('/fooditem/addsingle', addSingle);
router.get('/fooditem/getall', getAll);
router.get('/fooditem/:id', getSingle);

module.exports = router;