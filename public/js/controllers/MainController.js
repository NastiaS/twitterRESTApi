app.controller("MainController", function($scope, twitterFactory){
	
    $scope.user = '';
 
    $scope.submit = function (user) {

        twitterFactory.getTweets(user)
            .then(function (tweets) {
                $scope.tweets = tweets;
            });
        };  

});

        
    