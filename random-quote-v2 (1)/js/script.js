// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called



var quote
var randomIndex;
var outputDiv;
let string;
var nIntervId;
var color;
 
    function changeColor() {
      nIntervId = setInterval(flashBackground, 1000);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function flashBackground() {
        var oElem = document.getElementById('my_box').style.backgroundColor == getRandomColor();
      }
   

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

printQuote();
getRandomColor();
flashBackground();

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
        
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);