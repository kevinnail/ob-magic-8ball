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

btn1.addEventListener('click', tellFortune);

function tellFortune() {
    // console.log('clicked');
    questionContainer.classList.toggle('hide');
    answerContainer.classList.toggle('hide');
    // console.log(answerContainer.classList.value);
    // answerContainer.classList.toggle('hide');
    // console.log(answerContainer.classList.value);
    // console.log(textInput.textContent);
    const randNum = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randNum];
    answer.textContent = randomAnswer;
}

btn2.addEventListener('click', tryAgain);

function tryAgain() {
    console.log('clicked');
    questionContainer.classList.toggle('hide');
    answerContainer.classList.toggle('hide');
    console.log(questionContainer.classList.value);
}
