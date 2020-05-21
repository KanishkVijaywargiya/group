const express = require('express');
const router = express.Router();

// @type    GET
//@route    /api/category
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({ test: 'orders apis' }));

// load customerSchema
const customer = require('../../models/customer');
// load orderSchema
const order = require('../../models/orders');

// @type    POST
// @route   /api/order/postorderlist
// @desc    route for data of order
// @access  PUBLIC
router.post('/postorderlist', (req, res, next) => {
    const newOrder = new order({
        customer: req.params.id,
        orderId: req.body.orderId,
        orderDate: req.body.orderDate,
        billAmount: req.body.billAmount,
        paymentId: req.body.paymentId,
        transactionStatus: req.body.transactionStatus,
    });
    newOrder.save()
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
// @route   /api/orders/getorderlist
// @desc    route for order list
// @access  PRIVATE
router.get('/getorderlist', (req, res, next) => {
    order.find()
        .populate('customer', 'customerName currentDeliveryAddress city state pincode mobileno')
        .then(
            (order) => {
                res.status(200).json(order);
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
// @route   /api/orders/id
// @desc    route for order list
// @access  PRIVATE
router.get('/id/:id', (req, res, next) => {
    order.findOne({ _id: req.params.id })
        .populate('customer', 'customerName currentDeliveryAddress city state pincode mobileno')
        .exec()
        .then(
            (order) => {
                res.status(200).json(order);
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
//@route    /api/orders/delete
// @desc    route for deleting orders based on ID
// @access  PRIVATE
router.delete('/id/:id', (req, res, next) => {
    order.deleteOne({ _id: req.params.id }, order)
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
                    error: err
                });
            }
        );
});

module.exports = router;