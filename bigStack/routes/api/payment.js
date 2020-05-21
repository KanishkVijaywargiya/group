const express = require('express');
const router = express.Router();

// @type    GET
//@route    /api/category
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({ test: 'payment apis' }));

module.exports = router;