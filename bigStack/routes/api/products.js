const express = require('express');
const router = express.Router();

// @type    GET
//@route    /api/category
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({ test: 'product api' }));

const Product = require('../../models/products');

// @type    POST
// @route   /api/products/postproductlist
// @desc    route for data of customer
// @access  PUBLIC
router.post('/postproductlist', (req, res, next) => {
    const newProduct = new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice,
        discountType: req.body.discountType,
        discountPrice: req.body.discountPrice,
    });
    newProduct.save()
        .then(
            () => {
                res.status(201).json({
                    message: 'Post saved successfully!'
                });
            }
        )
        .catch(
            (err) => {
                res.status(400).json({
                    err: err
                });
            }
        );
});

// @type    GET
// @route   /api/products/getproductlist
// @desc    route for product list
// @access  PRIVATE
router.get('/getproductlist', (req, res, next) => {
    Product.find()
        .then(
            (Product) => {
                res.status(200).json(Product);
            }
        )
        .catch(
            (err) => {
                res.status(400).json({
                    err: err
                });
            }
        );
});

// @type    DELETE
//@route    /api/products/delete
// @desc    route for deleting category based on ID
// @access  PRIVATE
router.delete('/id/:id', (req, res, next) => {
    Product.deleteOne({ _id: req.params.id }, Product)
        .then(
            () => {
                res.status(200).json({
                    message: 'Deleted!'
                });
            }
        )
        .catch(
            (err) => {
                res.status(400).json({
                    error: error
                });
            }
        );
})


module.exports = router;