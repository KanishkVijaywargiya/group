const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopkeeperSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'myCustomer'
    },
    shopId: {
        type: String
    },
    shopName: {
        type: String,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    currentShopAddress: {
        type: String,
        required: true
    },
    alternateShopAddress: {
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
    },
    email: {
        type: String,
        required: true,
    },
    url: {
        type: String
    },
    paymentMethod: {
        type: String
    }
});
module.exports = shopkeeper = mongoose.model("myShopkeeper", shopkeeperSchema);
