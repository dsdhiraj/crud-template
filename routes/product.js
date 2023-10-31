const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authenticateJWT = require('../middleware/auth.middleware');
const Product = require('../models/product.model');
const Category = require('../models/category.model');

// router.use('/', authenticateJWT);
router.post('/',authenticateJWT, productController.createProduct);
router.post('/all', productController.getAllProducts);
router.post('/one/:id/', productController.getProductById);
router.put('/:id',authenticateJWT, productController.updateProductById);
router.delete('/:id', authenticateJWT,productController.deleteProductById);
router.post('/products',productController.getProductFilter )
router.post('/addImage',authenticateJWT,productController.AddImage )

module.exports = router;
