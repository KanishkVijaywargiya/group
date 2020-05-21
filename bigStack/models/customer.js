const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
    },
    email: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        max: 50,
        required: true
    },
    currentDeliveryAddress: {
        type: String,
        required: true
    },
    alternateDeliveryAddress: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    mobileno: {
        type: Number,
        required: true,
    }
});
module.exports = customer = mongoose.model("myCustomer", customerSchema);
