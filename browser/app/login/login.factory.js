app.factory('LoginFactory', function ($http) {
  var login = {}
  login.submitLogin = function (e, p) {
    console.log(e, p);
    return $http.post('/login', {email: e, password: p});
  }
  return login;
});
