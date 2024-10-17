// Define the main AngularJS module
var app = angular.module('menuApp', []);

// Define StringService to handle current user email
app.factory('StringService', function() {
    var currentUserEmail = '';

    return {
        getCurrentUserEmail: function() {
            return currentUserEmail;
        },
        setCurrentUserEmail: function(email) {
            currentUserEmail = email;
        }
    };
});

// User class definition
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
}

// Main controller
app.controller('menuController', ['$scope', '$timeout', '$http', 'StringService', 
    function($scope, $timeout, $http, StringService) {

    $scope.users = [];
    $scope.notifierText = "temp";
    $scope.isFadingOut = true;

    // Get elements from the DOM
    $scope.mainMenu = document.getElementById('navigation-div');
    $scope.loginMenu = document.getElementById('login-div');
    $scope.SignupMenu = document.getElementById('signup-div');

    // Fetch users from the database at the start of the program
    $http.get('/api/users').then(function(response) {
        $scope.users = response.data.map(user => new User(user.name, user.email, user.password));
    }).catch(function(error) {
        console.error('Error fetching users:', error);
    });

    // Function to switch back to the main menu
    $scope.back = function() {
        $scope.mainMenu.style.display = 'flex';
        $scope.loginMenu.style.display = 'none';
        $scope.SignupMenu.style.display = 'none';
    };

    // Function to show the login menu
    $scope.gotologin = function() {
        $scope.mainMenu.style.display = 'none';
        $scope.loginMenu.style.display = 'flex';
        $scope.SignupMenu.style.display = 'none';
    };

    // Function to show the signup menu
    $scope.gotosignup = function() {
        $scope.mainMenu.style.display = 'none';
        $scope.loginMenu.style.display = 'none';
        $scope.SignupMenu.style.display = 'flex';
    };

    // Check if password length is sufficient
    $scope.isPasswordLongEnough = function(password) {
        return password.length >= 12;
    };

    // Validate email format
    $scope.isEmailFormatValid = function(email) {
        var pattern = /^[^@]+@[^@]+\.[^@]+$/;
        return email != null && pattern.test(email);
    };

    // Display notification messages
    $scope.throwNewNotification = function(msg) {
        $scope.notifierText = msg;
        $scope.isFadingOut = false;

        $timeout(function() {
            $scope.isFadingOut = true;
        }, 2000);
    };

    // Get user by email
    $scope.getUserByEmail = function(email) {
        for (let i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].getEmail() === email) {
                return $scope.users[i];
            }
        }
        return null;
    };

    // Handle signup validation errors
    $scope.handleSignupErrors = function(username, email, password, passwordRepeat) {
        if (username.length == 0) {
            $scope.throwNewNotification("error: please fill in your name!");
            return false;
        }

        if (!$scope.isEmailFormatValid(email)) {
            $scope.throwNewNotification("error: please enter a valid email!");
            return false;
        }

        if ($scope.getUserByEmail(email) != null) {
            $scope.throwNewNotification("error: this email is already in use!");
            return false;
        }

        if (!$scope.isPasswordLongEnough(password)) {
            $scope.throwNewNotification("error: password is not long enough!");
            return false;
        }

        if (password != passwordRepeat) {
            $scope.throwNewNotification("error: password is not repeated correctly!");
            return false;
        }

        return true;
    };

    // Function to create a new user
    $scope.createUser = function(username, email, password) {
        var newUser = new User(username, email, password);
        $scope.users.push(newUser);

        // Add new user to the database
        $http.post('/api/users', newUser).then(function(response) {
            console.log('User added:', response.data);

            // Save registered user to a JSON file
            $http.post('/api/saveRegisteredUser', newUser).then(function(response) {
                console.log('Registered user saved:', response.data);
            }).catch(function(error) {
                console.error('Error saving registered user:', error);
            });

        }).catch(function(error) {
            console.error('Error adding user:', error);
        });
    };

    // Function to handle signup process
    $scope.signup = function() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var passwordRepeat = document.getElementById('password_repeat').value;

        if ($scope.handleSignupErrors(username, email, password, passwordRepeat)) {
            $scope.createUser(username, email, password);
            $scope.gotologin();
        }
    };

    // Function to handle login validation errors
    $scope.handleLoginErrors = function(email, password) {
        var tempUser = $scope.getUserByEmail(email);
        if (tempUser == null) {
            $scope.throwNewNotification("error: no user with such email!");
            return false;
        }
        if (!(tempUser.getPassword() === password)) {
            $scope.throwNewNotification("error: wrong password!");
            return false;
        }
        return true;
    };

    // Update JSON file with email
    $scope.updateJsonFile = function(email) {
        var jsonData = { content: email };

        $http.post('/email-json', jsonData)
            .then(function(response) {
                console.log('Success:', response.data);
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    };

    // Function to handle login process
    $scope.login = function() {
        var email_login = document.getElementById('email_login').value;
        var password_login = document.getElementById('password_login').value;
        
        if ($scope.handleLoginErrors(email_login, password_login)) {
            StringService.setCurrentUserEmail(email_login);

            // Save logged-in user to a JSON file
            $http.post('/api/saveLoggedInUser', { email: email_login }).then(function(response) {
                console.log('Logged-in user saved:', response.data);
                window.location.href = 'todo.html';
            }).catch(function(error) {
                console.error('Error saving logged-in user:', error);
            });
        }
    };

}]);