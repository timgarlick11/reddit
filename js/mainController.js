var app = angular.module('reddit')

app.controller('PostsController', function($scope, FirebaseService) {



FirebaseService.getData().then(function(response) {
	$scope.posts = response;
});

$scope.addPost = function() {
	FirebaseService.addPost($scope.newPost).then(function(response) {

		$scope.newPost = '';
	})
}


});