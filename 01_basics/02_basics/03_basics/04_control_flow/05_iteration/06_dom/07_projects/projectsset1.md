# project related to DOM

## project link
1
# solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll(`.button`);

const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);

    button.addEventListener('click',function(e){
        
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }


    })
});
    



```

## project 2 solution

```javascript

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#calculate");
const results = document.querySelector("#results");

button.addEventListener("click", function (e) {

    e.preventDefault();

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    const heightInMeter = heightValue / 100;

    const bmi = weightValue / (heightInMeter * heightInMeter);

    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});

```

## project 3 solution

``` javascript

const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},500);

```

## project 4 solution

``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
} 

```