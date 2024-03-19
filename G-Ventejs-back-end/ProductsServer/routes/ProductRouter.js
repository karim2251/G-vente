const express = require('express');
const router = express.Router();
const produitController = require('../controllers/ProductController')
const cors = require('cors');

// CORS middleware 
router.use(cors());
// router.use(cors({
//     origin: 'http://example.com', // Allow requests from this origin
//     methods: ['GET', 'POST'], // Allow these HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
// }));

// get all produits
router.get('/', produitController.getAllProducts);

// Create a new produit
router.post('/create', produitController.createProduct);

// get a single produit
router.get('/:id', produitController.getProductById);

// update product
router.post('/update/:id', produitController.updateProduct);

// delete product
router.delete('/delete/:id', produitController.deleteProduct);

module.exports=router;