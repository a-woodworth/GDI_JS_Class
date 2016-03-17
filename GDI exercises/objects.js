//Object exercises

//Recipe Card
var myRecipe = {
  title: 'BLT',
  servings: 1,
  ingredients: ['2 slices of bread, toasted', '3 strips of bacon, cooked', 'lettuce', 'slice of pepperjack cheese']
};

console.log(myRecipe.title);
console.log('Servings: ' + myRecipe.servings);
for (var i = 0; i < myRecipe.ingredients.length; i++) console.log(myRecipe.ingredients[i]);


//Reading List
var books = [
  {
  title: 'To Kill A Mockingbird',
  author: 'Harper Lee',
  alreadyRead: true
  },
  {
  title: 'Indentured: The Inside Story of the Rebellion Against the NCAA',
  author: 'Joe Nocera',
  alreadyRead: false
  }
];

for (var i = 0; i < books.length; i++) {

  var book = books[i];
  var bookInfo = book.title + ' by ' + book.author + '.';

//  console.log(bookInfo);

  if (book.alreadyRead) {
    console.log('You already read ' + bookInfo);
  } else {
    console.log('You still need to read ' + bookInfo);
  }
}
