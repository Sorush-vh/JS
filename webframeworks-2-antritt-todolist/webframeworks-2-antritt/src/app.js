// app.js
var app = angular.module('todoApp', ['ngMaterial', 'ngAnimate', 'ngAria']).factory('UserService', function(){
    
    var logged_in_user=null;
    return {
        getUser: function() {
            return logged_in_user;
        },
        setUser: function(userData) {
            user.logged_in_user = userData;
        }
    };
});

app.controller('TodoController', function($scope, $http) {
    console.log('TodoController initialized');
    $scope.logged_in_email;
    $scope.todos = [];

    // Fetch todos from the server
    $http.get('http://localhost:3000/todos').then(function(response) {
        $scope.todos = response.data;
    });

    // Initialize newTodo
    $scope.newTodo = {};

    $scope.addTodo = function() {
        console.log('addTodo function called');
        if ($scope.newTodo && $scope.newTodo.text) {
            const newTodoItem = {
                text: $scope.newTodo.text,
                type: $scope.newTodo.type || 'task',
                date: $scope.newTodo.date || new Date(),
                completed: false
            };

            // Add the new todo item to the server
            $http.post('http://localhost:3000/todos', newTodoItem).then(function(response) {
                $scope.todos.push(response.data);
                $scope.newTodo = {};
            });
        } else {
            console.error('New todo item is invalid:', $scope.newTodo);
        }
    };

    $scope.removeTodo = function(index) {
        console.log('removeTodo function called');
        const todoId = $scope.todos[index]._id;
        $http.delete(`http://localhost:3000/todos/${todoId}`).then(function(response) {
            $scope.todos.splice(index, 1);
        });
    };

});