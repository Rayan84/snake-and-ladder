function createSquares() {
  var main = document.getElementById('main');
  for (let i = 99; i > -1; i--) {
    var square = document.createElement('DIV');
    var squareNumber = document.createElement('P');
    squareNumber.setAttribute('class', 'squareNumber');
    var squareNumberText = document.createTextNode(i);
    squareNumber.appendChild(squareNumberText);
    square.setAttribute('class', 'square');
    square.appendChild(squareNumber);
    main.appendChild(square);
  }
}

createSquares();

//                         dice
var start = 0;
var palyButton = document.getElementById('playButton');
var diceUI;
var dice;
var interva;

//                  dice roll
function diceRoll() {
  playButton.removeAttribute('onclick');
  console.log('onclick attribute removed');
  console.log('Rolling Dice...');
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceUI = document.createElement('IMG');
  diceUI.setAttribute('class', 'dice');
  console.log('diceUI set to gif');
  document.getElementById('main').appendChild(diceUI);
  diceUI.setAttribute('src', './media/dice.gif');
  setTimeout(function () {
          deleteDiceUI();
        }, 5000);

  setTimeout(function () {
        console.log('src, ./media/dice' + dice + '.svg');
        diceUI.setAttribute('src', './media/dice' + dice + '.svg');
        diceUI.style.display = 'block';
      }, 5010);

  setTimeout(function () {
        deleteDiceUI();
      }, 8000);

  setTimeout(function () {
          interva = setInterval(moveCounter, 500);
        }, 8500);
}

//                                    dice UI

function deleteDiceUI() {
  diceUI.style.display = 'none';
  console.log('deleted DiceUI');
}

//                                counters

var counter1Position = 99;
var squaresArray = document.querySelectorAll('.square');
var counter1 = document.createElement('IMG');
counter1.setAttribute('src', './media/user_2.png');
counter1.setAttribute('class', 'counter');
squaresArray[counter1Position].appendChild(counter1);

var counter2Position = 99;
var counter2 = document.createElement('IMG');
counter2.setAttribute('src', './media/superman.ico');
counter2.setAttribute('class', 'counter');
squaresArray[counter2Position].appendChild(counter2);

var activePlayer = counter1;
function moveCounter() {
  if (dice > 0) {
    if (activePlayer == counter1) {
      counter1Position--;
      dice--;
      squaresArray[counter1Position].appendChild(counter1);
      console.log('counter1 Position = ' + counter1Position);
    }else {
      counter2Position--;
      dice--;
      squaresArray[counter2Position].appendChild(counter2);
      console.log('counter2 Position = ' + counter2Position);
    }

  }else {
    if (activePlayer == counter1) {
      activePlayer = counter2;
      console.log('switching to Player 2');
      playButton.setAttribute('onclick', 'diceRoll();');
      console.log('Play button onclick attribute set to dice roll ');
    }else {
      activePlayer = counter1;
      console.log('switching to Player 1');
      playButton.setAttribute('onclick', 'diceRoll();');
      console.log('Play button onclick attribute set to dice roll');
    }

    clearInterval(interva);
  }
}
