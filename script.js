//! Here is a code to generate a random number between 1 and 20.
var luckyNumber = Math.random() * 20; //` * generates a random number between 0 and 1 and multiply it by 20.
luckyNumber = Math.floor(luckyNumber); //` Removing the decimal part.

// ! Here is a variable to store the score.
var scoreNumber = 05;
var highScore = 0;

//! Here we are grabbing the input field and the button by ID
var guessing = document.getElementById('guessing');
var check = document.getElementById('check');
let message = document.getElementById('message');
var score = document.getElementById('score');
var main = document.getElementById('main');
var highscore = document.getElementById('highscore');
var newgame = document.getElementById('newgame');

//! Here is a function to check if the number is correct
function checkNumber() {
    var userNumber = guessing.value; //` Here we are grabbing the value of the input field.

  if (luckyNumber < userNumber) {
    message.innerHTML = 'Your number is too high.';
    scoreNumber = scoreNumber - 1;
    score.innerHTML = scoreNumber; //Calling id name "score" from Html to display scoreNumber.
    main.style.backgroundColor = 'red';
    main.style.color = 'aqua';
  }
  if (luckyNumber > userNumber) {
    message.innerHTML = 'Your number is too low.';
    scoreNumber = scoreNumber - 1;
    score.innerHTML = scoreNumber;
    main.style.backgroundColor = 'red';
    main.style.color = 'darkblue'
  }
  if (luckyNumber == userNumber) {
    message.innerHTML = 'Yeyeye!! You got it!';
    main.style.backgroundColor = 'green';
    highscore.innerHTML = scoreNumber;
    scoreNumber = 20;
    score.innerHTML = scoreNumber;
  }
  if(scoreNumber < 0) {
    message.innerHTML = `YOU LOST THE GAME<br> Correct answer :${luckyNumber}<br> Try Again &#128542;`
    main.style.backgroundColor = 'purple';
    main.style.color = 'black';
}
}


function startNewgame() {
  luckyNumber = Math.random() * 20;
  luckyNumber = Math.floor(luckyNumber);
  scoreNumber = 5;
  score.innerHTML = scoreNumber;
  console.log(luckyNumber);
  message.innerHTML = 'Start guessing...'
  main.style.backgroundColor = 'black'; 
  main.style.color = 'wheat';
}

//! Here are running the function when the button is clicked -> checkNumber
check.onclick = checkNumber;
newgame.onclick = startNewgame;

console.log(luckyNumber);