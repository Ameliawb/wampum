var quotes = [
'the way you make me look-the way you make me feel',
'the color of your hat!-',
'winding road',
'nothing really matters',
'to me'
]

function newQuote() {
var randomNumber =  Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}