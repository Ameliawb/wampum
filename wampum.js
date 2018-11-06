var quotes = [
'look into your partner\'s eyes',
'think of a problem you or your community is facing',
'tell your partner a story about something you value',
'tell your partner a story about a time when someone gave you an amazing gift',
'ask your partner to tell you an amazing gift they have been given',
'ask your partner to tell you about a problem they are facing',
'ask your partner to tell you about something they are thankful for',
'tell your partner about a place where you feel at peace',
'tell your partner about a time when you were thankful',
'tell your partner a funny story about an elder in your family',
'agree to something with your partner',
'hold up a hand to your partner as a sign of trust',
'you and your partner are making an agreement today in front of your community in a sacred spot',
'tell your partner the time of day and the season',
'say to your partner: I am happy you are with me today, I am thankful for you and your community',
'stop. Now our minds are one',
'say goodbye, your ritual is complete',
'end your time together',
'say thank you and goodbye'
]

function newQuote() {
var randomNumber =  Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}