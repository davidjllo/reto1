(function () {
    'use strict';

    angular
    .module('app')
    .factory('UserService', UserService);

    UserService.$inject = ['$http','$rootScope'];
    function UserService($http, $rootScope) {
        var service = {};
        var urlBase = "http://10.131.137.200/reto1controller/dataAccess.php?op=";
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;
        
        function newGame(){
            var id = $rootScope.globals.currentUser.id;
            console.log("player id: " +id);
        }

        function GetAll() {
            return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user, callback) {
            return $http.get(urlBase+"2&user="+user.username+"&pass="+user.password).then(function successCallback(response){
                response = { success : true};    
                return response;
            }, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions
    function getGames(playerId){
        try {
            var q = $q.defer();
            $http.get(urlBase+"7&player="+playerId).success(function(data){
            q.resolve(data);
              });
            return q.promise;

            }
            catch(err) {

            }
        }
    }



    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }


})();
