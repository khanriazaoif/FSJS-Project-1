// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called



var quote
var randomIndex;
var outputDiv;


function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(getRandomQuote() );


console.log(quotes);
printQuote();


function printQuote() {
    quote = getRandomQuote();
    

    outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = 
        '<p class="quote">' + quote.quote + '</p>' +
        '<p class="source">' + quote.source + '</p>';
        if(quote.citation !== undefined) {
           // outputDiv.innerHTML =
            outputDiv += '<span class="citation">' + quote.citation + '</span>'
        }
       
        //    '<span class="citation">' + quote.citation + '</span>' +
        //    '<span class="year">' + quote.year + '</span>' +
        
    console.log(quote.quote + ' ' + quote.source + ' ' + quote.citation + ' ' + quote.year);
    console.log(quote.source);
}

console.log(quote.citation);



document.getElementById('loadQuote').addEventListener("click", printQuote, false);