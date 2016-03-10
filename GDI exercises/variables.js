//Variable exercises

//Fortune Teller
var numberOfKids = 2;
var partnerName = "Jim";
var geoLocation = "Libertyville";
var jobTitle = "Web Developer";

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numberOfKids + ' kids.');


//Age Calculator
var currentYear = 2016;
var birthYear = 1980;
var age = currentYear - birthYear;

console.log('They are either ' + age + ' or ' + (age - 1) + '.');


//Lifetime Supply Calculator
var age = 25;
var maxAge = 100;
var estDailyAmount = 1;
var lifetimeSupply = (maxAge - age) * 365;

console.log('You will need ' +  lifetimeSupply + ' to last you until the ripe old age of ' + maxAge + '.');


//Geometrizer
var diameter = 10;
var radius = diameter / 2;
var circumference = 2 * Math.PI * radius;

console.log('The circumference is ' + circumference + '.');

var area = Math.PI * (radius * radius);

console.log('The area is ' + area + '.');


//Temperature Converter
var celsius = 0;
var celsiusToFarenheit = (celsius * 9)/ 5 + 32;

console.log(celsius + '°C is ' + celsiusToFarenheit + '°F.');

var farenheit = 32;
var farenheitToCelsius = ((farenheit - 32) * 5)/9;


console.log(farenheit + '°F is ' + farenheitToCelsius + '°C.');
