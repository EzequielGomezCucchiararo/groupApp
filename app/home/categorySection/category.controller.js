
(function () {
  angular
	    .module('app')
	    .controller('CategoryHomeController', CategoryHomeController)

  function CategoryHomeController (categoryFactory) {
  	var vm = this

  	this.categoriesOne = [
  		{
  			name: 'adventure',
  			id: 12
  		},
  		{
  			name: 'action',
  			id: 28
  		},
  		{
  			name: 'family',
  			id: 10751
  		},
  		{
  			name: 'horror',
  			id: 27
  		}
  	]

  	this.categoriesTwo = [
  		{
  			name: 'animation',
  			id: 16
  		},
  		{
  			name: 'comedy',
  			id: 35
  		},
  		{
  			name: 'documentary',
  			id: 99
  		},
  		{
  			name: 'romance',
  			id: 10749
  		}]

  	this.openCategory = function openCategory (categoryID) {
  		console.log(categoryFactory.getList(categoryID))
  	}
  }
})()

