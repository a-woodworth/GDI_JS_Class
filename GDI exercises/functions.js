//Function exercises

//Fortune Teller
function tellFortune(jobTitle, geoLocation, partnerName, numberOfKids){
  var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numberOfKids + ' kids.';
  console.log(future);
}

tellFortune("Singer", "Las Vegas", "Rick", 6);

//Age Calculator
function ageCalc(currentYear, birthYear){
  var age = currentYear - birthYear;
  console.log('They are either ' + age + ' or ' + (age - 1) + '.');
}

ageCalc(2016, 1980);


//Lifetime Supply Calculator
function supplyForLife(age, maxAge, estDailyAmount ){
  var lifetimeSupply = (maxAge - age) * 365;
  console.log('You will need ' +  lifetimeSupply + ' to last you until the ripe old age of ' + maxAge + '.');
}

supplyForLife(25, 100, 1);


//Geometrizer
function calcCircle(radius) {
  var circumference = 2 * Math.PI * radius;

  console.log('The circumference is ' + circumference + '.');

  var area = Math.PI * (radius * radius);

  console.log('The area is ' + area + '.');
}

calcCircle(10);

//Temperature Converter
function celsiusToFarenheit(celsius) {
  var celsiusToF = (celsius * 9)/ 5 + 32;
  console.log(celsius + '°C is ' + celsiusToF + '°F.');
}

celsiusToFarenheit(0);


function farenheitToCelsius(farenheit) {
  var farenheitToC = ((farenheit - 32) * 5)/9;
  console.log(farenheit + '°F is ' + farenheitToC + '°C.');
}

farenheitToCelsius(32);










