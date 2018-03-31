// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quote
var randomIndex;
var source;
var printQ;
var outputDiv;


function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(getRandomQuote() );


function printQuote() {
    quote = getRandomQuote();
    outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = '<h1>' + quote.quote + '</h1>'
    console.log("This is my random quote: " + quote.quote);
}

     //   return getRandomQuote();
//}

console.log(quote);
printQuote();








/*

function print(quotes) {
    outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = quotes;
    console.log(quotes);
}

//print(quotes);

*/

for(var key in quotes){
//   console.log(key,' :', quotes[key]);
}





/*
function print(quotes) {
    var outputDiv = document.getElementById('quote-box"');
    outputDiv.innerHTML = quote;
  

for (var i = 0; i < quotes.length; i++) {
    quote = quotes[i].quote;
    source = quotes[i].source;
    }
}
print(quotes);
*/



  

var student = {
    name: 'Riaz',
    grades: [95, 96, 99, 100]
};
for (var key in student) {
//    console.log(key);
}

/*
function getRandomQuote(quotes){
    for (var i = 0; i < quotes.length; i++) {
       // quote = quotes[i].quote;
        //source = quotes[i].source;
        console.log(quotes);
        }
}

*/