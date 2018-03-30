// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes;
var quote;
var source;

function getRandomQuote(quotes){
    for (var i = 0; i < quotes.length; i++) {
       // quote = quotes[i].quote;
        //source = quotes[i].source;
        console.log(quotes);
        }
}

getRandomQuote(quotes);

function print(quotes) {
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = quotes;
    console.log(quotes);
}

//print(quotes);



for(var key in quotes){
   console.log(key,' :', quotes[key]);
}



/*
function getRandomQuote() {
    var quote = Math.floor(Math.random() * quotes.length) + 1;
    return quote;
}
console.log(getRandomQuote() );
getRandomQuote();
*/

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
    console.log(key);
}