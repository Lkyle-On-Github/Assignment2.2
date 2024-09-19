
//Gets the first number that appears next to the button
function initializeGame() {
    //sets up the top number which is only randomised once
    number1 = Math.floor(Math.random() * 5);
    document.getElementById("startingNumber").innerHTML = number1;

    //sets the second random number to avoid a softlock
    number2 = Math.floor(Math.random() * 5);
    document.getElementById("randomNumber").innerHTML = number2;

    //keeps track of whether or not the button has been pressed
    buttonPressed = 0;
}

//this number changes randomly, the player must press the button at the right time
function randomizeNumber() {
    if(buttonPressed == 0) {
        number2 = Math.floor(Math.random() * 5);
        document.getElementById("randomNumber").innerHTML = number2;
    }
}

//checks if the number was correct and declares that the player has won
function gameButton() {
    //makes the number stop randomizing once the button is pressed
    buttonPressed = 1;

    //the button disappears once it has been pressed
    document.getElementById("buttonP").innerHTML = number1;
    
    //numbers are stored in variables to do this easier
    if(number1 == number2) {
        //text and gif for winning
        document.getElementById("result").innerHTML = "You Win!!!";
        document.getElementById("winImage").src = "KAngel Pose.gif";
        document.getElementById("resultText").style = "font-family: Zpix; font-weight: 900";
        document.getElementById("resultText").innerHTML = "Incredible! You did it!!!";
    } else {
        //text and image for losing
        document.getElementById("result").innerHTML = "You LOSE!!!";
        document.getElementById("loseImage").src = "Giovanna Thumbnail 8.png";
        document.getElementById("resultText").innerHTML = "The shame of this will haunt you forever...";
    }
}

//makes the second number change constantly
//if it looks like its changing at a random speed it is just because it is rolling the same number multiple times in a row
setInterval(randomizeNumber, 500)