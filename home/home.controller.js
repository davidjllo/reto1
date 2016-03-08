angular.module('app')
.controller('HomeController', function($scope, $location, $rootScope, UserService) {
        $scope.newGame = newGame;
        
        
        function newGame(){
            console.log("creando partida");
            //uId da el id del jugador, almacenado en rootscope
            var uId = $rootScope.globals.currentUser.id;
           // UserService.newGame();
            $location.path('/Game');
         
        }
    

});