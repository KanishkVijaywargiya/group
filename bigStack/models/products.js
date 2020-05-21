const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: {
        type: String
    },
    shopkeeper: {
        type: Schema.Types.ObjectId,
        ref: 'myShopkeeper'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'myCategory'
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    discountType: {
        type: String,
    },
    discountPrice: {
        type: Number,
    },
});
module.exports = Product = mongoose.model("myProduct", productSchema);
