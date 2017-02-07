angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/scifi', {
        templateUrl: 'categories/scifi/scifi.template.html',
        controller: 'ScifiController'
        controllerAs: 'vm'
      })
      .when('/action', {
        templateUrl: 'categories/action/action.template.html',
        controller: 'ActionController'
        controllerAs: 'vm'
      })
      .when('/family', {
        templateUrl: 'categories/family/family.template.html',
        controller: 'FamilyController'
        controllerAs: 'vm'
      })
      .when('/horror', {
        templateUrl: 'categories/horror/horror.template.html',
        controller: 'HorrorController'
        controllerAs: 'vm'
      })
      .when('/animation', {
        templateUrl: 'categories/animation/animation.template.html',
        controller: 'AnimationController'
        controllerAs: 'vm'
      })
      .when('/comedy', {
        templateUrl: 'categories/comedy/comedy.template.html',
        controller: 'ComedyController'
        controllerAs: 'vm'
      })
      .when('/thriller', {
        templateUrl: 'categories/thriller/thriller.template.html',
        controller: 'ThrillerController'
        controllerAs: 'vm'
      })
      .when('/romance', {
        templateUrl: 'categories/romance/romance.template.html',
        controller: 'RomanceController'
        controllerAs: 'vm'
      })

      .otherwise('/')
  })
