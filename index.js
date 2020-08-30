
 function testAlert(){
  alert("JS here!");
}
testAlert();

// create squares
function createSquares() {
  //var squareTotalNumber = 100;
  var main = document.getElementById("main");
  var square = document.createElement("DIV");
  var squareNumber = document.createElement("P");
  for (let i = 0; i < 100; i++){
    square.setAttribute("class", "square");
    main.appendChild(square);
    alert("square just created");
  }
}

createSquares();
