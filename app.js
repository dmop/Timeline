/*var app = angular.module('plunker', []);
app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
*/

var myApp = angular.module('social', []);

myApp.controller('FeedController', ['$scope','$http', function($scope, $http){
    $scope.title = 'Seu Feed';

    $http.get('posts.json').success(function(data){

        $scope.lista = data;


    });

}]);
