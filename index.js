
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

                     // counter
var dice = 99;
var counterPosition = 99;
var squaresArray = document.querySelectorAll(".square");
var counter = document.createElement("IMG");
    counter.setAttribute("src", "./media/gem-1.jpg");
    counter.setAttribute("class", "counter");

    squaresArray[counterPosition].appendChild(counter);

function moveCounter(num){
  if(dice !== 0){

    setInterval(function run(num){

        if(dice !== 0){
        counterPosition--;
        squaresArray[counterPosition].appendChild(counter);
      // alert(dice);
       dice--;
     }else{
       clearInterval(run);
     }
      }, 500);

    }else{
      alert("else was called");
      }
    }
    moveCounter();
