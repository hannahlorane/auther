'use strict';
console.log("Navbar being registered!")
app.directive('navbar', function ($state, $location) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      console.log("Navbar linked")
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
    }
  }
});
