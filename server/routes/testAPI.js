let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Express API is working properly');
});

module.exports = router;