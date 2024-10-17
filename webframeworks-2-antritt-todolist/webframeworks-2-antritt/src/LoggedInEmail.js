// sharedemail:

var app = angular.module('menuApp', []);
app.factory('StringService', function() {
    var currentUserEmail = '';

    return {
        getCurrentUserEmail: function() {
            return currentUserEmail;
        },
        setCurrentUserEmail: function(value) {
            currentUserEmail = value;
        }
    };
});