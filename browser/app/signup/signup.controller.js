app.controller('SignupController', function($scope, SignupFactory, $state){
  $scope.submitSignup = function(user) {
    SignupFactory.submitSignup(user)
    .then( function(response){
      $state.go('stories')
    }).catch( function (err) {
      console.log(err);
    })
  }
})
