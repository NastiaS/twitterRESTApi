var express = require('express');

var path = require('path');

var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var router = express.Router();

module.exports = router;



router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});



router.get('/spotify/:artist', function(req, res, next) {
	request('https://api.spotify.com/v1/search?q=artist:' + req.params.artist + "&type=album&limit=5")
	.then(function(response) {
		res.send(response[0].body);
	}).catch(function(err) {
		next(err);
	});
});


router.get('/spotify/album/:trackId', function(req,res,next){
	request('https://api.spotify.com/v1/albums/' + req.params.trackId)
	.then(function(response){
		res.send(response[0].body);
	}).catch(function(err) {
		next(err);
	});
});


