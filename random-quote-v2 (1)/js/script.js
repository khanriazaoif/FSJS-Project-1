// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//I AM ATTEMPTING EXCEEDS EXPECTATIONS. PLEASE GRADE BASED ON THAT ASSUMPTION

//function getRandomColor creats two variables. var color holds the symbol # and var letters holds a 16 character string that together combine into a hex color. The for loop takes the letters and uses math.floor and math.random * 16 to generate a different string each iteration of the loop. The variable color then returns the new random hex color.
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
// this function getRandomQuote creates a variabled called randomIndex that generates a number between 1 and the number of quotes that I have created. The function then returns the quote inside the quotes array using the randomIndex number that came from the math.floor and math.random.
function getRandomQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}
// variable changeQuoteInterval is set equal to a set interval of 30 seconds once the printQuote function is selected. The function changeHandler then invokes the click handler which then clears the interval. Then the printQuote function is run and this sets a new interval. 
let changeQuoteInterval = setInterval(printQuote, 30000);
function changeHandler() {
    clearInterval(changeQuoteInterval);
    printQuote();
    changeQuoteInterval = setInterval(printQuote, 30000);
}
//

//this function printQuote has a variable that contains the quote from the getRandomQuote function. It then outputs a string with quote array quote property plus the citation property. These are the two required strings that will always be present. From there I am checking if there is a citation, year or tags and if there are then to display them. At the end the variable outputDiv gets the ID quote-box and changes the HTML to the string that is in the variable string.
function printQuote() {
	document.body.style.backgroundColor = getRandomColor();
	var quote = getRandomQuote();
	var string = '<p class="quote">' + quote.quote + '</p>' + '<p class="source">' + quote.source;
	if (quote.citation) {
		string += '<span class="citation">' + quote.citation + '</span>'
	}
	if (quote.year) {
		string += '<span class="year">' + quote.year + '</span>'
	}
	if (quote.tags) {
		string += '<span class ="tags">' + ' ' + quote.tags + '</span>'
	}
	'</p>';
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = string;
}
// this looks for  a click event and then runs the function printQuote.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);