var express = require('express');

var path = require('path');

var router = express.Router();
var Twitter = require('twit');

module.exports = router;


router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});