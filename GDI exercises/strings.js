//String Exercises

//Dr. Evil
function DrEvil(amount){
  console.log(amount + ' dollars' + ' (pinky)');
  return DrEvil;
}

DrEvil(1000000);


//Mixup -- create function that mixes two strings
function mixUp(a, b) {
  console.log(b.slice(0, 2) + a.slice(2) + ' ' + a.slice(0, 2) + b.slice(2));
  return mixUp;
}

mixUp('mix', 'pod');


//FixStart -- return a version where all occurences of words' first character have been replaced with '*', except for the first character itself.
function fixStart(word) {
  var firstLetter = word.charAt(0);
  console.log(firstLetter + word.slice(1).replace(new RegExp(firstLetter, 'g'), '*'));
  return fixStart;
}

fixStart('babble');



