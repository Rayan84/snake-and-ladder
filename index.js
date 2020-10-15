function createSquares() {
  var playBoardContainer = document.getElementById('playBoardContainer');
  for (let i = 99; i > -1; i--) {
    var square = document.createElement('DIV');
    var squareNumber = document.createElement('P');
    squareNumber.setAttribute('class', 'squareNumber');
    var squareNumberText = document.createTextNode(i);
    squareNumber.appendChild(squareNumberText);
    square.setAttribute('class', 'square');
    square.appendChild(squareNumber);
    playBoardContainer.appendChild(square);
  }
}

createSquares();
var checkbox = document.getElementById('checkbox');
var autoInterva;

checkbox.addEventListener('change', function () {
    if (this.checked) {
      // Checkbox is checked..

      console.log('Auto mode activated');
      autoInterva = setInterval(diceRoll, 4000);
      playButton.removeAttribute('onclick');
      console.log('onclick attribute removed');

      //  enableAuto();

    } else {
      console.log('auto disabled');
      clearInterval(autoInterva);

      //    disableAuto();

    }
  });

//                         dice
var start = 0;
var palyButton = document.getElementById('playButton');
var diceUI;
var dice;
var interva;
var steps;
var ladderOne = document.getElementById('ladder-1');
var ladderTwo = document.getElementById('ladder-2');
var ladderThree = document.getElementById('ladder-3');
var snakeOne = document.getElementById('snake-1-image');
var snakeTwo = document.getElementById('snake-2-image');
var snakeThree = document.getElementById('snake-3-image');
var snakeFour = document.getElementById('snake-4-image');

function invertColor(item) {
  item.style.filter = 'brightness(200%)';
  console.log('color inverted');
  setTimeout(function () {
    item.style.filter = 'brightness(100%)';
    console.log('image color inverted back');
  }, 800);
}

//                  dice roll
function diceRoll() {
  audioPlayer(4);
  playButton.removeAttribute('onclick');

  //  console.log('onclick attribute removed');
  console.log('Rolling Dice...');
  dice = Math.floor(Math.random() * 6) + 1;
  console.log('dice ' + dice);
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
          squaresArray[playerPosition].style.backgroundColor = 'green';
          interva = setInterval(moveCounter, 100);

          //  console.log('interval triggered');

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

var counter1Position = 99;
var squaresArray = document.querySelectorAll('.square');
var counter1 = document.createElement('IMG');
counter1.setAttribute('src', './media/user_2.png');
counter1.setAttribute('class', 'counter');
squaresArray[counter1Position].appendChild(counter1);

var counter2Position = 99;
var counter2 = document.createElement('IMG');
counter2.setAttribute('src', './media/superman.png');
counter2.setAttribute('class', 'counter');
squaresArray[counter2Position].appendChild(counter2);

var playerPosition = counter1Position;
var  player = counter1;

function audioPlayer(num) {
  var soundCheckbox = document.getElementById('sound-checkbox');
  var sounds = document.querySelectorAll('audio');
  if (soundCheckbox.checked == true) {
    sounds[num].play();
  }
}

function moveCounter() {
  if (steps > 0) {
    if (playerPosition - steps == 86) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
        audioPlayer(1);
      }else {
        squaresArray[76].appendChild(player);
        playerPosition = 76;
        steps--;
        console.log(' position ' + playerPosition);
        console.log('Ladder, woohoo!');
        invertColor(ladderTwo);
        audioPlayer(3);
      }
    }else if (playerPosition - steps == 70) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
        audioPlayer(1);
      }else {
        squaresArray[22].appendChild(player);
        playerPosition = 22;
        steps--;
        console.log(' position ' + playerPosition);
        console.log('Ladder, woohoo!');
        audioPlayer(3);
        invertColor(ladderThree);
      }
    }else if (playerPosition - steps == 67) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
        audioPlayer(1);
      }else {
        squaresArray[36].appendChild(player);
        playerPosition = 36;
        steps--;
        audioPlayer(1);
        console.log(' position ' + playerPosition);
        console.log('Ladder, woohoo!');
        audioPlayer(3);
        invertColor(ladderOne);
      }
    }else if (playerPosition - steps == 5) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
      }else {
        squaresArray[74].appendChild(player);
        playerPosition = 74;
        steps--;
        audioPlayer(1);
        console.log(' position ' + playerPosition);
        console.log('Oh noooo!');
        audioPlayer(0);
        invertColor(snakeOne);
      }
    }else if (playerPosition - steps == 10) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
      }else {
        squaresArray[30].appendChild(player);
        playerPosition = 30;
        steps--;
        audioPlayer(1);
        console.log(' position ' + playerPosition);
        console.log('Oh noooo!');
        audioPlayer(0);
        invertColor(snakeThree);
      }
    }else if (playerPosition - steps == 52) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
      }else {
        squaresArray[93].appendChild(player);
        playerPosition = 93;
        steps--;
        audioPlayer(1);
        console.log(' position ' + playerPosition);
        console.log('Oh noooo!');
        audioPlayer(0);
        invertColor(snakeTwo);
      }
    }else if (playerPosition - steps == 28) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        squaresArray[playerPosition].appendChild(player);
        console.log(' position ' + playerPosition);
      }else {
        squaresArray[48].appendChild(player);
        playerPosition = 48;
        steps--;
        audioPlayer(1);
        console.log(' position ' + playerPosition);
        console.log('Oh noooo!');
        audioPlayer(0);
        invertColor(snakeFour);
      }
    }else if (steps - playerPosition == 0) {
      if (steps > 1) {
        playerPosition--;
        steps--;
        audioPlayer(1);
        squaresArray[playerPosition].appendChild(player);
      }else {
        playerPosition--;
        steps--;
        audioPlayer(1);
        squaresArray[playerPosition].appendChild(player);
        celebration();
        playerPosition = 99;
        counter1Position = 99;
        counter2Position = 99;
      }
    }else if (playerPosition - steps < 0) {

      //  alert(" You can't play!,");
      console.log("Can't play");
      clearInterval(interva);
      switching();
    }else {
      playerPosition--;
      steps--;
      audioPlayer(1);
      squaresArray[playerPosition].appendChild(player);
      console.log(' position ' + playerPosition);
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
  squaresArray[playerPosition].style.backgroundColor = 'coral';
  console.log('============================');
}

var youWin = document.getElementById('you-win');
function celebration() {
  playButton.style.display = 'none';
  var winnerImg = player.src;
  document.getElementById('winner-img').setAttribute('src', winnerImg);

  clearInterval(autoInterva);
  document.getElementById('checkbox').checked = false;
  setTimeout(function () {
                  youWin.style.display = 'block';
                  audioPlayer(2);
                }, 1000);

  console.log('celebration function called');
}

//                         creating ladders

function reset() {
  youWin.style.display = 'none';
  playButton.style.display = 'block';
  squaresArray[counter1Position].appendChild(counter1);
  squaresArray[counter2Position].appendChild(counter2);
}
