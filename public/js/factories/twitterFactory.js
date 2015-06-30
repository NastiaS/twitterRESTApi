app.factory('twitterFactory', function($http){

	return {

		getTweets: function(user){
			
			return $http.get('/twitter/' + user).then(function(response){
					return response.data;
			});
		}
	}
});
