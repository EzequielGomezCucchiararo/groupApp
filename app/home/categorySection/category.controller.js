
(function () {
  angular
	    .module('app')
	    .controller('CategoryHomeController', CategoryHomeController)

  function CategoryHomeController () {
  	var vm = this

  	this.categoriesOne = ['adventure', 'action', 'family', 'horror']

  	this.categoriesTwo = ['animation', 'comedy', 'documentary', 'romance']

  	this.openCategory = function openCategory () {

  	}
  }
})()

