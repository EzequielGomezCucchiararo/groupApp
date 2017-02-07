(function () {
  angular.module('app')
    .controller('ActionController', ActionController)

  function ActionController () {
    this.categoryName = 'Action'
  }
})()
