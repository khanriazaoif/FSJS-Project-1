// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called



var quote
var randomIndex;
var outputDiv;
let string;

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(getRandomQuote() );


console.log(quotes);
printQuote();


function printQuote() {
    quote = getRandomQuote();
		string = '<p class="quote">' + quote.quote + '</p>' +
        '<p class="source">' + quote.source + '</p>';
        if(quote.citation) {
            string += '<span class="citation">' + quote.citation + '</span>' 
            } else {
            	string;
            }
        if(quote.year) {
        	string += '<span class="year">' + quote.year + '</span>'
        } else {
        	string;
        }
    
       outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = string;
        
    console.log(quote.quote + ' ' + quote.source + ' ' + quote.citation + ' ' + quote.year);
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);