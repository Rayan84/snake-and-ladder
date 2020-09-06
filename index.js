
 function testAlert(){
  alert("JS here!");
}
//testAlert();

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
                     // counter

var counterPosition = 99;
var squaresArray = document.querySelectorAll(".square");
var counter = document.createElement("IMG");
    counter.setAttribute("src", "./media/gem-1.jpg");
    counter.setAttribute("class", "counter");
    squaresArray[counterPosition].appendChild(counter);

var interva = setInterval(moveCounter, 500);
 function moveCounter(){
   if(dice > 0){
     counterPosition--;
     dice--;
     squaresArray[counterPosition].appendChild(counter);
   }else {

     clearInterval(interva)

   }
 }
