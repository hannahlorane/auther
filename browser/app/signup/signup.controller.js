app.controller('SignupController', function($scope, SignupFactory, $state){
  $scope.submitSignup = function() {
    SignupFactory.submitSignup()
    .then( function(response){
      $state.go('stories')
    }).catch( function (err) {
      console.log(err);
    })
  }
})
