# Angular Style Guide #

## 1. Single Responsibility ##

* Define 1 component per file, recommended to be less than 400 lines of code.

```
/* avoid */
angular
    .module('app', ['ngRoute'])
    .controller('SomeController', SomeController)
    .factory('someFactory', someFactory);

function SomeController() { }

function someFactory() { }
```