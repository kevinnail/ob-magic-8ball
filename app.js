// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const textInput = document.getElementById('question-input');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const questionContainer = document.getElementById('question-container');
const answerContainer = document.getElementById('answer-container');
const answer = document.getElementById('answer');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

// btn1.addEventListener('click', tellFortune);

function tellFortune() {
    console.log('clicked');
}

console.log(btn1.textContent);
