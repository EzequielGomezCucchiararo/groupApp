(function () {
  angular.module('app')
    .controller('ThrillerController', ThrillerController)

  function ThrillerController () {
    this.categoryName = 'Thriller'
  }
})()
