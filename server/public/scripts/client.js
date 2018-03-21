let myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", function(){
   console.log('WelcomeController working'); 
   let self = this;
   self.disclaimer = "Be a HADAR not a Hater!";
});