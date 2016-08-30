app.controller('LoginController', function ($scope, $state, LoginFactory) {
  $scope.submitLogin = function () {
    return LoginFactory.submitLogin()
      .then(function (response) {
        $state.go('stories');
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
