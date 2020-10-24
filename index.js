// Press any key to start event listener
// It generates two random numbers, compares them, and declares winner
document.addEventListener("keydown", function(event) {
  // Create two random numbers, ranging from 1 to 6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set sources according to the random numbers
  var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!"
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩"
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!"
  }
});
