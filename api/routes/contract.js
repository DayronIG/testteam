const express = require('express');
const { create } = require('../controllers/contract');

const router = express.Router();

router.route('/').pos(create);

module.exports = router;
