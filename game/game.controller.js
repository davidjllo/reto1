(function () {
    'use strict';

    angular
    .module('app')
    .controller('GameController', GameController);

    GameController.$inject = ['UserService','$rootScope'];
    function GameController($scope, $rootScope, UserService) {

        $scope.currentPlayer = 'O';
        $rootScope.player = 'O';
        $scope.winner = null;
        $scope.board = [
        ['O', null, null],
        [null, null, null],
        [null, null, null]
        ];
        

    //metodos tomados de http://jsfiddle.net/thai/8Gsyr/
    $scope.cell = function(row, column) {
        return $scope.board[row][column];
    }
    $scope.cellText = function(row, column) {
        var value = $scope.cell(row, column);
        if(value == null) value="-";
        console.log(value+""+row+","+column);
        return value;
    }
    
    function cellClass(row, column) {
        var value = $scope.cell(row, column);
        return 'cell cell-' + value;
    }
    //UserService.newGame();
}
})();