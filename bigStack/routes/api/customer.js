const express = require('express');
const router = express.Router();

// @type    GET
//@route    /api/category
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({ test: 'customer apis' }));

// importing customerSchema
const customer = require('../../models/customer');

// @type    POST
// @route   /api/customer/postcustomerlist
// @desc    route for data of customer
// @access  PUBLIC
router.post('/postcustomerlist', (req, res, next) => {
    const newCustomer = new customer({
        customerId: req.body.customerId,
        email: req.body.email,
        customerName: req.body.customerName,
        currentDeliveryAddress: req.body.currentDeliveryAddress,
        alternateDeliveryAddress: req.body.alternateDeliveryAddress,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        mobileno: req.body.mobileno,
    });
    newCustomer.save()
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

// Now we can implement our GET route to return all of the Things in the database:
// @type    GET
// @route   /api/category/getcustomerlist
// @desc    route for customer list
// @access  PRIVATE
router.get('/getcustomerlist', (req, res, next) => {
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
//@route    /api/customer/id/:id
// @desc    route for getting customer list based on _ID
// @access  PUBLIC
router.get('/id/:id', (req, res, next) => {
    customer.findOne({ _id: req.params.id })
        .then(
            (customer) => {
                res.status(201).json(customer);
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
//@route    /api/customer/:mobileno
// @desc    route for getting customer based on MOBILENO
// @access  PUBLIC
router.get('/:mobileno', (req, res, next) => {
    customer.findOne({ mobileno: req.params.mobileno })
        .then(
            (customer) => {
                res.status(201).json(customer);
            }
        )
        .catch(
            (err) => {
                res.status(400).json({
                    err: err
                })
            }
        );
});

// @type    DELETE
//@route    /api/customer/delete
// @desc    route for deleting customer based on ID
// @access  PRIVATE
router.delete('/id/:id', (req, res, next) => {
    customer.deleteOne({ _id: req.params.id }, customer)
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
});

module.exports = router;