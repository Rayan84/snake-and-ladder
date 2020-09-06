
                            // create squares
function createSquares() {
                      //var squareTotalNumber = 100;
  var main = document.getElementById("main");
  for (let i = 99; i > -1; i--){
  var square = document.createElement("DIV");
  var squareNumber = document.createElement("P");
  squareNumber.setAttribute("class", "squareNumber");
  var squareNumberText = document.createTextNode(i);
  squareNumber.appendChild(squareNumberText);
    square.setAttribute("class", "square");
    square.appendChild(squareNumber);
    main.appendChild(square);
    //alert(i);
  }
}
createSquares();


                     // dice roll
var dice = 0;
function diceRoll(){
     dice = Math.floor(Math.random() * 6) + 1;
     console.log(dice);
}
diceRoll();
                     // counters

var counterPosition = 99;
var squaresArray = document.querySelectorAll(".square");
var counter1 = document.createElement("IMG");
    counter1.setAttribute("src", "./media/user_2.png");
    counter1.setAttribute("class", "counter");
    squaresArray[counterPosition].appendChild(counter1);

var counter2 = document.createElement("IMG");
    counter2.setAttribute("src", "./media/superman.ico");
    counter2.setAttribute("class", "counter");
    squaresArray[counterPosition].appendChild(counter2);

var interva = setInterval(moveCounter, 500);
 function moveCounter(){
   if(dice > 0){
     counterPosition--;
     dice--;
     squaresArray[counterPosition].appendChild(counter1);
   }else {

     clearInterval(interva)

   }
 }
