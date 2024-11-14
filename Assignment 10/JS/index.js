var arrayOfQuotes = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Maya Angelou',
        'quote': 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
    },
    {
        'author': 'C.S. Lewis',
        'quote': 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .'
    },
    {
        'author': 'Master Oogway',
        'quote': 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'
    },
    {
        'author': 'Shifu',
        'quote': 'If you only do what you can do, you’ll never be better than what you are.'
    },
    {
        'author': 'Sensei Wu',
        'quote': 'The best way to defeat an enemy is to make them your friend'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },
    {
        'author': 'olaf,Frozen',
        'quote': 'Some people are worth melting for.'
    },
    {
        'author': 'M4 fakr bs kan film',
        'quote': 'We can\'t be brave witout fear.'
    },
    {
        'author': 'Shifu',
        'quote': 'Anything is possible when you have inner peace.'
    },
    {
        'author': 'Megamind',
        'quote': 'There is a benefit from losing....you got to learn from your mistakes.'
    },
    {
        'author': 'Uncle ben from spiderman',
        'quote': 'With the great powers comes great responsibilities.'
    },
    {
        'author': 'Tony Stark',
        'quote': 'Heros are made by the paths they choosed, Not the powers they are graced with.'
    },
    {
        'author': 'Captain America',
        'quote': 'No matter how your day starts, always find time to make it great.'
    },
];


var random = [];
var quote;
function getQuote() {
    if (random.length === arrayOfQuotes.length) {
        random = []; 
    }
    do{
        quote= Math.floor(Math.random() * arrayOfQuotes.length);
    } while (random.includes(quote));
    random.unshift(quote);
    document.querySelector('#quoteOut').textContent = `\"${arrayOfQuotes[quote].quote}\"`;
    document.querySelector('#authorOut').textContent = `${arrayOfQuotes[quote].author}`;
}
function reFresh() {
    location.reload(true);
  }