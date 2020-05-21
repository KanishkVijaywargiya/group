const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

// bringing all routes
const category = require('./routes/api/category.js');
const customer = require('./routes/api/customer.js');
const itemDetails = require('./routes/api/itemDetails.js');
const orders = require('./routes/api/orders.js');
const payment = require('./routes/api/payment.js');
const products = require('./routes/api/products.js');
const shopkeeper = require('./routes/api/shopkeeper.js');

const app = express();

// middleware for body-parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 3000;

// mongodb configure
const db = require('./Setup/MyUrl.js').mongoUrl;

// attempt to connect to db
mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is connected successfully'))
    .catch(err => console.log(err));

// just for testing purpose
// @route   -   GET   /home
// @desc    -   a route to home page
// @access  -   PUBLIC  
app.get('/', (req, res) => {
    res.send('GroceriesAPI')
});

// actual functioning routes
// @route   -   GET   /home
// @desc    -   a route to home page
// @access  -   PUBLIC  
app.use('/api/category', category);
app.use('/api/customer', customer);
app.use('/api/itemDetails', itemDetails);
app.use('/api/orders', orders);
app.use('/api/payment', payment);
app.use('/api/products', products);
app.use('/api/shopkeeper', shopkeeper);



app.listen(port, () => console.log(`Server is running at port ${port}...`));