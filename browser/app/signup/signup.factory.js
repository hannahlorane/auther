app.factory('SignupFactory', function($http){
  var signup = {};

  signup.submitSignup = function(user){
    console.log(user);
    return $http.post('/signup', {email: user.email, password: user.password});
  }
  return signup;
})
