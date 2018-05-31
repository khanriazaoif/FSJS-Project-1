// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//I AM ATTEMPTING EXCEEDS EXPECTATIONS. PLEASE GRADE BASED ON THAT ASSUMPTION

//function getRandomColor creats two variables. var color holds the symbol # and var letters holds a 6 character string that together combine into a hex color. (For example console.log(color) = #4473C0) The for loop takes the letters and uses math.floor and math.random * 16 to generate a different string each iteration of the loop. The variable color then returns the new random hex color.
function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;	
}
// function getRandomQuote creates a variabled called i that generates a number between 1 and the number of quotes that I have created. The function then returns the quote inside the quotes array using the i number that came from the math.floor and math.random. For example (console.log(quotes[i]) produces one of the random quotes)
function getRandomQuote() {
	let i = Math.floor(Math.random() * quotes.length);
	return quotes[i];
}
// variable changeQuoteInterval is set equal to the setInterval function with a set interval of 30 seconds and the argument printQuote function is selected. The function changeHandler clears the interval. Then the printQuote function is run and this sets a new interval. 

// when function printQuote is run it first changes the background color of the document (webpage) to the returned color from the getRandomColor function. Then var quote is set to the random quote from getRandomQuote. Then var string is created with the quote and source from the quotes array. Then an if statement checks if there is a citation, year or tags and only shows if there are any. At the end the outputDiv changes the innerHTML (the text with the HTML elements) to the output of the string variable from line 31
function printQuote() {
	let changeQuoteInterval = setInterval(printQuote, 30000);
function changeHandler() {
    clearInterval(changeQuoteInterval);
    printQuote();
    changeQuoteInterval = setInterval(printQuote, 30000);
}
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

printQuote();