(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams) {
  	console.log('hola')
    this.categoryName = $routeParams.name
  }
})()
