// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes;
var quote;
var source;


var quotes = [
    {
        quote: '“The Way Get Started Is To Quit Talking And Begin Doing.”';
        source: 'Walt Disney';
    },
    {
        quote: '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”';
        source: 'Winston Churchill';
    },
    {
        quote: '“Don’t Let Yesterday Take Up Too Much Of Today.”';
        source: 'Will Rogers';
    },
    {
        quote: '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”';
        source: 'Unknown';
    },
    {
        quote: '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”';
        source: 'Vince Lombardi';
    },
];

for (var i = 0; i < quotes.length; i++) {
    quote = quotes[i].quote;
    source = quotes[i].source;
}