//Which number is bigger?

function greaterNum(num1, num2){
  if ( num1 > num2 ) {
   return num1;

} else if ( num1 < num2 ) {
   return num2;

} else if ( num1 === num2 );
   return num1;

}

console.log(greaterNum(10, 5));
console.log(greaterNum(1, 9));
console.log(greaterNum(2, 2));


//World Translator
function helloWorld(language){
  if ( language === 'es' ) {
    return 'Hola, Mundo';

  } else if ( language === 'de' ) {
    return 'Hallo, Welt';

  } else if ( language === 'it' ) {
    return 'Ciao, mondo';

  } else {
    return 'Hello, World';
  }
}

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('it'));
console.log('------------------');
console.log(helloWorld('blah'));
console.log(helloWorld());


//Grade Assigner
function assignGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 65 && score < 70) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(95)); //A
console.log('You got a ' + assignGrade(100)); //A
console.log('You got a ' + assignGrade(90)); //A
console.log('You got a ' + assignGrade(85)); //B
console.log('You got a ' + assignGrade(70)); //C
console.log('You got a ' + assignGrade(65)); //D
console.log('You got a ' + assignGrade(64)); //F


//Pluralizer



