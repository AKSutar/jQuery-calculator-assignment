
// function that display value
function display(num) {
 $("#userInput").val($("#userInput").val() + num);
}

// function that evalutes the input & return the results
function solve() {
  $("#userInput").val(eval($("#userInput").val()));
}

// function that clears the display
function clr() {
  $("#userInput").val(" ");
}

