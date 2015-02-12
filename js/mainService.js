var app = angular.module('reddit')

app.service('FirebaseService', function($http, $q) {

this.getData = function() {
var deferred = $q.defer()
	$http({
		method: 'GET',
		url: 'https://devmtn.firebaseio.com/posts.json'
	}).then(function(response) {
		console.log(response)
		response = response.data;
		deferred.resolve(response)
	});

return deferred.promise;

};


this.addPost = function(post) {
  post.timestamp = Date.now();
  post.comments = [];
  post.karma = 0;
  post.id = guid();
	var deferred = $q.defer()
	$http({
		method:'POST',
		url: 'https://devmtn.firebaseio.com/posts/' + post.id + '.json'
	}).then(function(response) {
		console.log(response)
		response = response.data;
		deferred.resolve(response)
	})
return deferred.promise

}
 var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

});