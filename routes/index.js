var express = require('express');
var router = express.Router();
Article = require("../models/article.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index',{title: 'Express'});
});

module.exports = router;
