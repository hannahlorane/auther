'use strict';
console.log("Navbar being registered!")
app.directive('navbar', function ($state, $location) {
  return {
    restrict: 'E',
    template:`<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><img src="logo.png"></a>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li ng-class="{active: pathStartsWithStatePath('users')}">
              <a ui-sref="users">users</a>
            </li>
            <li ng-class="{active: pathStartsWithStatePath('stories')}">
              <a ui-sref="stories">stories</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li ui-sref-active="active">
              <a ui-sref="signup">signup</a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="login">login</a>
            </li>
            <li>
              <button class="navbar-btn btn btn-default">logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>`,
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
