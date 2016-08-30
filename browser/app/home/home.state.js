'use strict';
console.log("Home state regise")
app.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/browser/app/home/home.html'
  });
});
