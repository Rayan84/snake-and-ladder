
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

                     // stones
var stonePosition = 0;

document.querySelectorAll(".square");
