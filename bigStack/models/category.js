const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryId: {
        type: String,
    },
    shopno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        // required: true
    }
});

module.exports = category = mongoose.model("myCategory", categorySchema);