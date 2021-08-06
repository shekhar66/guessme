let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function checkUserValue() {
  if (score == 1) {
    playAgain();
  }
  const userNumber = Number(document.getElementById("userNumber").value);
  if (userNumber <= 0) {
    alert(
      "The Entered Number is Invalid,Please Enter the Correct Number...!"
    );
    return;
  }
  if (userNumber > 20) {
    alert(
      "The Entered Number is Greater Than Required,Please Enter the Correct Number...!"
    );
    document.getElementById("userNumber").focus();
    return;
  }
  console.warn(userNumber);
  console.warn(secretNumber);
  if (secretNumber === userNumber) {
    document.getElementById("myNumber").value = secretNumber;
    document.getElementById("myNumber").style.background = "yellow";
    document.body.style.backgroundColor = "#28a745";
    console.error(highScore);
    if(score>highScore){
      highScore = score;
      document.getElementById("highScore").textContent = score; 
    }
    document.getElementById("result").innerText = "Perfect";
    document.getElementById("result").style.color = "white";
    setTimeout(() => {
      const playAgain = confirm(
        "Congratulations...!!! You Won The Game, Do You Want to Play Again..?"
      );
      if (!playAgain) {
        return;
      }
      return restartGame();
    }, 100);
  } else if (secretNumber < userNumber) {
    displayMessage("Too High Than me..!")
    score--;
  } else if (secretNumber > userNumber) {
    displayMessage("Too Low Than me..!")
    score--;
  }
  document.getElementById("score").innerText = score;
}

const displayMessage = function(message)
{
  document.getElementById("result").innerText = message;
  document.getElementById("result").style.color = changeColor();
  document.getElementById("userNumber").focus();
}

function playAgain(){
  const playAgain = confirm(
      "Oops...!!! You Lost The Game, Do You Want to Play Again..?"
    );
  if (!playAgain) {
    return;
  }
  return restartGame();
}

function changeColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function restartGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.body.style.backgroundColor = "rgb(66, 231, 217)";
  document.getElementById('userNumber').value = "";
  document.getElementById('myNumber').value = "?"
  document.querySelector('#myNumber').style.background = "white";
  document.querySelector('#score').textContent = 20;
  document.getElementById('result').innerText = "Enter a Number";
  document.querySelector('#result').style.color = "black";
}