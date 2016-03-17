//Create simple word guessing game

// var lettersForWord = [];
// var guessed = [];

// function guessLetter(guessed){
// //take guessed letter and cycle it through lettersForWord array

//   if ( lettersForWord.indexOf(guessed) > -1) {
//     console.log( guessed + ' is a letter in this word.' );
//     console.log(guessed); //Needs more code here --> loop through this array to show the blanks

// //    return guessed;
// //    guessed =  character at? + missing?

//   } else if ( lettersForWord.indexOf(guessed) === -1) {
//     console.log( 'Sorry, ' + guessed + ' is not a letter in this word. Try again.' );
//   }
// }

lettersForWord = ['F', 'O', 'X'];
guessed = ['_', '_', '_'];

var wordLength = (lettersForWord.length);
  console.log('There are ' + wordLength + ' letters in this word.');

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < lettersForWord.length; i++) {
        if (lettersForWord[i] == letter) {
            guessed[i] = letter;
            goodGuess = true;
        }
        if (guessed[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessed.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        }
    } else {
        console.log('Oh noes, thats not right!');
    }
}

guessLetter('F');
guessLetter('Y');
guessLetter('O');
guessLetter('X');

