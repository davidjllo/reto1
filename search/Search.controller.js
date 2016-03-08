(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$rootScope','UserService'];
    function SearchController($scope, $rootScope, UserService) {
    loadAvailable();

    function loadAvailable(){
    	var uId = $rootScope.globals.currentUser.id;
    	$scope.getGames = UserService.getGames(uId);
    	$scope.getGames.then(function(val){
    		$scope.gameList = val;
    		console.log($scope.gameList);
    	});
    };    
    }

})();