app.controller("MainController", function($scope, spotifyFactory, $sce, ngAudio){
    $scope.albums = [];
    $scope.artist = '';
    $scope.playing = false;
    $scope.song = null;
    $scope.player = null;

    $scope.submit = function (artist) {
  
            spotifyFactory.getAlbums(artist)
                .then(function (alb) {
                        $scope.albums = alb;
                });
    };


    $scope.getTrackPreview = function(album) {
        if($scope.song) {
            if($scope.playing){
                $scope.player.pause();
                $scope.playing = false;
            }

            else{
                $scope.player.play();
                $scope.playing = true;
            }
        }
        else {
            spotifyFactory.getFirstTrack(album.id)
            .then(function(tracks){
                $scope.playing = true;
                $scope.song = tracks.tracks.items[0].preview_url;
                $scope.player = ngAudio.load($scope.song);
                $scope.player.play();
            });
        };
    };

});

        
    