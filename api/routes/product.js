const express = require('express');
const { list, findOne } = require('../controllers/products');

const router = express.Router();

router.route('/').get(list);

router.route('/:category').get(findOne);

module.exports = router;
