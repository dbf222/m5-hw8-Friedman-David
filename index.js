// Create an Array of at least 3 losing messages
var lossmessage = [
  "Oh! Try Again!",
  "Almost Got It!",
  "Not This Time",
]


// Create variables to count wins and losses
var wincount = 0
var losscount = 0



// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById("message");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");




// target all .box elements and attach a click event listener to each one using a loop

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

var boxChoices = document.querySelectorAll('.box');

// from notes
function clickHandler(event) {
  console.log(event.target.textContent)
}

for (var i = 0; i < boxChoices.length; i++) {
  var button = boxChoices[i];
  button.onclick = clickHandler
}


// // within each click event...
// // determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

 // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

// https://stackoverflow.com/questions/53162168/random-box-generator



// create a random number between 1-3 and store it to a variable
// This number will represent the winning box


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses




function clickHandler(event){

  var whichBox = parseInt(this.textContent);

  var winner = Math.floor((Math.random () *3 ) +1);

  if (whichBox === winner) {
    message.textContent = "Wow! You won that time!"
    wincount += 1
    wins.textContent = "Number of Wins:" + wincount;
  }
  else {
    message.textContent = lossmessage[Math.floor((Math.random () *3 ))]
    losscount += 1
    losses.textContent = "Number of Losses" + losscount;
  }
}
