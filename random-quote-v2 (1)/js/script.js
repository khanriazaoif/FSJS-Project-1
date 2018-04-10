// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// declaring variables in the global scope
var quote;
var colorChange;
var randomIndex;
var outputDiv;
let string;
var color;
var flashTheQuote;
var changeQuoteInterval;  
// this function getRandomColor creats two variables. var color holds the symbol # and var letters holds a 16 character string that together combine into a hex color. The for loop takes the letters and uses math.floor and math.random * 16 to generate a different string each iteration of the loop. The variable color then returns the new random hex color.
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
// function changeColor creates a local variable called cc that takes the document body and changes the background to the hex color that came from the getRandomColor(); function.
function changeColor() {
	var cc = document.body.style.backgroundColor = getRandomColor();
}
// this function getRandomQuote creates a variabled called randomIndex that generates a number between 1 and the number of quotes that I have created. The function then returns the quote inside the quotes array using the randomIndex number that came from the math.floor and math.random.
function getRandomQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}
// this function flashQuote selects the ID 'quoote-box' from index.html page and changes the innerHTML contents to getRandomQuote()
// function flashQuote() {
//     var fq = document.getElementById('quote-box').innerHTML = getRandomQuote();
// }
//
function changeQuote() {
    var quoteChange = setInterval(getRandomQuote,1000);
}
//this function printQuote has a variable that contains the quote from the getRandomQuote function. It then outputs a string with quote array quote property plus the citation property. These are the two required strings that will always be present. From there I am checking if there is a citation, year or tags and if there are then to display them. At the end the variable outputDiv gets the ID quote-box and changes the HTML to the string that is in the variable string.
function printQuote() {
    quote = getRandomQuote();
	colorChange = changeColor();
	flashTheQuote = changeQuote();
	//changeQuoteInterval = flashQuote();
    string = '<p class="quote">' + quote.quote + '</p>' + '<p class="source">' + quote.source;
	if (quote.citation) {
		string += '<span class="citation">' + quote.citation + '</span>'
	} 
	if (quote.year) {
		string += '<span class="year">' + quote.year + '</span>'
	} 
	if (quote.tags) {
		string += '<span class ="tags">' + ' ' + quote.tags + '</span>'
	}'</p>';
	outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = string;
	//outputDiv += string.setInterval(getRandomQuote, 1000);
}

// this looks ofr  a click event and then runs the function printQuote.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);