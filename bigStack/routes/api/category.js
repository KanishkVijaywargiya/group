const express = require('express');
const router = express.Router();
const key = require('../../setup/MyUrl.js');

// @type    GET
//@route    /api/category
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({ test: 'category apis' }));

// importing categorySchema
const category = require('../../models/category');

// @type    POST
// @route   /api/category/postcategorylist
// @desc    route for registrations of users
// @access  PUBLIC
router.post('/postcategorylist', (req, res, next) => {
    const newCategory = new category({
        categoryId: req.body.categoryId,
        shopno: req.body.shopno,
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    });
    newCategory.save()
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
// @route   /api/category/getcategorylist
// @desc    route for category list
// @access  PRIVATE
router.get('/getcategorylist', (req, res, next) => {
    category.find()
        .then(
            (category) => {
                res.status(200).json(category);
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
//@route    /api/category/id/:id
// @desc    route for getting category list based on _ID
// @access  PUBLIC
router.get('/id/:id', (req, res, next) => {
    category.findOne({ _id: req.params.id })
        .then(
            (category) => {
                res.status(201).json(category);
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
//@route    /api/category/:name
// @desc    route for getting category based on NAME
// @access  PUBLIC
router.get('/:name', (req, res, next) => {
    category.findOne({ name: req.params.name })
        .then(
            (category) => {
                res.status(201).json(category);
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

// @type    GET
//@route    /api/category/:description
// @desc    route for getting category based on NAME
// @access  PUBLIC
router.get('/:description', (req, res, next) => {
    category.find({ description: req.params.description })
        .then(
            (category) => {
                res.status(201).json(category);
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


// @type    UPDATE
//@route    /api/category/update
// @desc    route for updating category based on ID
// @access  PUBLIC
router.put('/postcategorylist/id/:id', (req, res, next) => {
    const updateCategory = new category({
        categoryId: req.params.categoryId,
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        shopId: req.body.shopId
    });
    updateCategory.updateOne({ _id: req.params.id }, updateCategory)
        .then(
            () => {
                res.status(201).json({
                    message: 'Thing updated successfully!'
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

// @type    DELETE
//@route    /api/category/delete
// @desc    route for deleting category based on ID
// @access  PRIVATE
router.delete('/id/:id', (req, res, next) => {
    category.deleteOne({ _id: req.params.id }, category)
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