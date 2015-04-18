app.factory('spotifyFactory', function($http){
	return {
		getAlbums: function(artist){
			return $http.get('/spotify/' + artist).then(function(response){
					return response.data.albums.items;
				});
			},
		getFirstTrack: function(id){
			return $http.get('/spotify/album/' + id).then(function(response){
				return response.data;
			});
		}	
	}
});
