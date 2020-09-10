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

function automatize() {
  var checkbox = document.getElementById('checkbox');
  if (checkbox.checked == true) {
    console.log('Auto mode activated');
    setInterval(diceRoll, 4000);
    playButton.removeAttribute('onclick');
    console.log('onclick attribute removed');
  } else {
    playButton.setAttribute('onclick', 'diceRoll();');
    console.log('Play button onclick attribute set to dice roll');
    clearInterval(diceRoll);
  }
}

//                         dice
var start = 0;
var palyButton = document.getElementById('playButton');
var diceUI;
var dice;
var interva;
var steps;

//                  dice roll
function diceRoll() {
  playButton.removeAttribute('onclick');

  //  console.log('onclick attribute removed');
  console.log('Rolling Dice...');
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  playButton.removeAttribute('onclick');
  steps = dice;
  diceUI = document.createElement('IMG');
  diceUI.setAttribute('class', 'dice');

  //  console.log('diceUI set to gif');
  document.getElementById('main').appendChild(diceUI);
  diceUI.setAttribute('src', './media/dice.gif');
  setTimeout(function () {
          deleteDiceUI();
        }, 1000);

  setTimeout(function () {
        //      console.log('src, ./media/dice' + dice + '.svg');

        diceUI.setAttribute('src', './media/dice' + dice + '.svg');
        diceUI.style.display = 'block';
      }, 1100);

  setTimeout(function () {
        deleteDiceUI();
      }, 2000);

  setTimeout(function () {
          interva = setInterval(moveCounter, 100);
          console.log('interval triggered');

          //      console.log('active player is ' + activePlayer);
          //      console.log('active player position is ' + activePlayerPosition);
        }, 2500);
}

//                                    dice UI

function deleteDiceUI() {
  diceUI.style.display = 'none';

  //  console.log('deleted DiceUI');
}

//                                counters

var counter1Position = 20;
var squaresArray = document.querySelectorAll('.square');
var counter1 = document.createElement('IMG');
counter1.setAttribute('src', './media/user_2.png');
counter1.setAttribute('class', 'counter');
squaresArray[counter1Position].appendChild(counter1);

var counter2Position = 20;
var counter2 = document.createElement('IMG');
counter2.setAttribute('src', './media/superman.ico');
counter2.setAttribute('class', 'counter');
squaresArray[counter2Position].appendChild(counter2);

var playerPosition = counter1Position;
var  player = counter1;

function moveCounter() {
  //console.log('moveCounter called');
  if (steps > 0) {
    if (playerPosition - steps > 0) {
      playerPosition--;
      console.log(playerPosition);
      steps--;
      console.log(dice);
      squaresArray[playerPosition].appendChild(player);
      console.log(' position ' + playerPosition);
    }else if (steps - playerPosition == 0) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
      }else {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        celebration();
        playButton.removeAttribute('onclick');
      }

    }else {

      //  alert(" You can't play!,");
      console.log("Can't play");
      clearInterval(interva);
      switching();
    }
  }else {
    switching();
  }
}

function switching() {
  if (player == counter1) {
    counter1Position =  playerPosition;
    player = counter2;
    playerPosition = counter2Position;
    console.log('switching to Player 2');
    playButton.setAttribute('onclick', 'diceRoll();');

    //      console.log('Play button onclick attribute set to dice roll ');
    //  clearInterval(interva);
    //      console.log('interva cleared');

  }else {
    counter2Position = playerPosition;
    player = counter1;
    playerPosition = counter1Position;
    console.log('switching to Player 1');
    playButton.setAttribute('onclick', 'diceRoll();');
  }

  clearInterval(interva);
  console.log('============================');
}

var youWin = document.getElementById('you-win');
function celebration() {
  playButton.style.display = 'none';

  setTimeout(function () {
                  youWin.style.display = 'block';
                }, 1000);

  console.log('celebration funciton called');
}

function reset() {
  counter1Position = 99;
  counter2Position = 99;
  squaresArray[counter1Position].appendChild(counter1);
  squaresArray[counter2Position].appendChild(counter2);
  youWin.style.display = 'none';
  playButton.style.display = 'block';
}
