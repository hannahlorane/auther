app.factory('SignupFactory', function($http){
  var signup = {};

  signup.submitSignup = function(e, p){
    $http.post({email: e, password: p})
  }
  return signup;
})
