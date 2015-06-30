var express = require('express');
var router = express.Router();
var Twit = require('twit');
var config = require('../keys');
var twitter = new Twit(config.twitter);
var TWEET_COUNT = 10;
var USER_TIMELINE_URL = 'statuses/user_timeline';


router.get('/:user', function(req, res) {

	params = {
	   screen_name: req.params.user, 
	   count: TWEET_COUNT 
	};

	var allTweets = [];
	var tweetObj = {};


	twitter.get(USER_TIMELINE_URL, params, function(error, data, next) {

		if(error) return next(error);

		data.forEach(function(e){
			tweetObj = {
				text: e.text,
				photo: e.user.profile_background_image_url,
				name: e.user.name,
				date: e.created_at
			};
			allTweets.push(tweetObj);
		});
		
		res.json(allTweets);
	});
});

module.exports = router;