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
    'introduce yourself to your partner and ask them their name',
    'you have completed your agreement please find another partner',
    'take a breath and look around you',
    'tell your partner 5 things that you are thankful for',
    'ask your partner to list 3 people they are grateful to have in their life',
    'ask your partner to make a commitment to something you agree upon',
    'think about a time when you had to convince someone to support an idea of yours, now smile at your partner and ask them how they are doing',
    'look around you, notice the other people in the room, nod to them if appropriate',
    'wampum is a public agreement, a contract, a ledger, story, a form of trade, it is woven but determined by the people participating in the process',
    'trade something with your partner, either for good or for a moment',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
