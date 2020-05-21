const express = require('express');
const router = express.Router();

// @type    GET
//@route    /api/category
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({ test: 'shopkeeper apis' }));

// importing customerSchema
const customer = require('../../models/customer');

// importing shopkeeprSchema
const shopkeeper = require('../../models/shopkeeper');

// @type    POST
// @route   /api/shopkeeper/postshopkeeperlist
// @desc    route for data of shopkeeper
// @access  PUBLIC
router.post('/postshopkeeperlist', (req, res, next) => {
    const newShopkeeper = new shopkeeper({
        shopId: req.body.shopId,
        email: req.body.email,
        shopName: req.body.shopName,
        contactName: req.body.contactName,
        currentShopAddress: req.body.currentShopAddress,
        alternateShopAddress: req.body.alternateShopAddress,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        mobileno: req.body.mobileno,
        url: req.body.url,
        paymentMethod: req.body.paymentMethod,
    });
    newShopkeeper.save()
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
// @route   /api/shopkeeper/getshopkeeperlist
// @desc    route for shopkeeper list
// @access  PRIVATE
router.get('/getshopkeeperlist', (req, res, next) => {
    customer.find()
        .then(
            (customer) => {
                res.status(200).json(customer);
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
//@route    /api/shopkeeper/find/everyone
// @desc    route for getting shopkeeper list based on _ID
// @access  PUBLIC
router.get('/find/everyone', (req, res) => {
    shopkeeper.find()
        .populate('user', ['customerName', 'currentDeliveryAddress'])
        .then(
            (shopkeeper) => {
                res.status(201).json(shopkeeper);
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


module.exports = router;