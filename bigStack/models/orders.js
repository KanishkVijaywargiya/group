const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'myCustomer'
    },
    orderId: {
        type: String
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    billAmount: {
        type: Number
    },
    paymentId: {
        type: String
    },
    transactionStatus: {
        type: String
    },
    // currentDeliveryAddress: {
    //     type: String,
    //     required: true
    // },
    // alternateDeliveryAddress: {
    //     type: String
    // },
    // deliveryCity: {
    //     type: String,
    //     required: true
    // },
    // deliveryState: {
    //     type: String,
    //     required: true
    // },
    // deliveryPincode: {
    //     type: String,
    //     required: true
    // }
});
module.exports = order = mongoose.model("myOrder", orderSchema);