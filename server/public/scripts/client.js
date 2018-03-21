let myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", function(){
   console.log('WelcomeController working'); 
   let self = this;
   self.disclaimer = "Be a HADAR not a Hater!";
   self.thisIsMyName = "Call me Sparticus!";
});

console.log('AngularJS is cooooool');
console.log('I just found out that this comes BEFORE the controller');