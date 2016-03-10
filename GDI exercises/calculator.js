//Calucator Exercise

//Square Number
function squareNumber(num){
  var square = num * num;
  console.log('The result of squaring the number ' + num + " is " + square + '.');
  return square;
}

squareNumber(3);


//Divide Number by 2
function halfOf(num){
  var half = num / 2;
  console.log('Half of ' + num + " is " + half + '.');
  return half;
}

halfOf(5);


//Percent of a Number
function percentOf(num1, num2){
  var percent = (num1 / num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2 + '.');
  return percent;
}

percentOf(5, 10);


//Area of Circle
function areaOfCircle(radius){
  var area = Math.PI * squareNumber(radius);
  area = area.toFixed(2);
  console.log('The area for a circle with ' + radius + ' is ' + area + '.');
  return area;
}

areaOfCircle(2);


//Calculate results using above functions
function calculateResults(num){
  var half = halfOf(num);
  var squared = squareNumber(half);
  var area = areaOfCircle(squared);
  var result = percentOf(squared, area);
}

calculateResults(5);

















