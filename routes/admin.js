const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', adminController.getProductForm);

router.post('/', adminController.postProduct); //gdy klikniemy button


//Exports
module.exports = router;
