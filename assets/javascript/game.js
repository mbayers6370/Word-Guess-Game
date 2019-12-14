var singers = [
    "rihanna",
    "beyonce",
    "cher",
    "gaga",
    "madonna",
    "enya",
    "pink",
];
var wordUnderscore = [];
var wins = 0;
var losses = 0;
var guessLeft = 8;
var counter = 0;
var keyPressed = [];
var wordIndex = 0;
var reset = 0;





// scores updated to page
function updateScore() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessLeft;
};






// main function for game
function renderWord() {
    // If there are still more singers, render the next one.
    if (wordIndex <= singers.length - 1) {
        var newDiv = document.getElementById('writeme');


        singers = singers[wordIndex];
        for (i = 0; i < singers.length; i++) {
            wordUnderscore[i] = '_';
            newDiv.innerHTML = wordUnderscore.join(" ");
        };
    }
    // If there aren't, render the end game screen.
    else {
        if (wordIndex == singers.length) {
            document.querySelector("#writeme").innerHTML = "Game Over!";
            document.querySelector("#finalScore").innerHTML = "Wins: " + wins + " Losses: " + losses;
        };
    }




    // capturing user input to manipulate with an onkeyup event
    document.onkeyup = function (event) {

        // If there are no more singers stop the function
        if (wordIndex === singers.length) {
            return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = event.key.toLowerCase();
        var writeMe = document.getElementById('writeme');
        var guessed = document.getElementById('guessed');

        // save userInput in keyPressed
        keyPressed.push(userInput);
        guessed.innerText = keyPressed.join(" ");





        // looping through array to replace with letters
        for (var i = 0; i < singers.length; i++) {

            if (singers[i] === userInput) {
                wordUnderscore[i] = userInput;
                writeMe.innerHTML = wordUnderscore.join(" ");
                counter++
            };
        };

        // checking string if letters are in array(singers), and updating guessLeft if not
        if (singers.includes(userInput)) {
            // this if statement is for the opposite of what it .includes 
        } else {
            guessLeft--;
            updateScore();
        };

        // for a loss
        if (guessLeft == 0) {
            document.querySelector("#writeme").innerHTML = "Game Over!";
            losses++;
            keyPressed = [];
            guessLeft = 8;
            counter = 0;
            wordIndex++;
            wordUnderscore = [];
            singers = [
                "rihanna",
                "beyonce",
                "cher",
                "gaga",
                "madonna",
                "enya",
                "pink",
            ];
            updateScore();
            renderWord();
        };

        // for a win
        if (counter === singers.length) {
            wins += 1;
            keyPressed = [];
            guessLeft = 8;
            counter = 0;
            wordIndex++;
            wordUnderscore = [];
            singers = [
                "rihanna",
                "beyonce",
                "cher",
                "gaga",
                "madonna",
                "enya",
                "pink",
            ];
            updateScore();
            let timeoutID = setTimeout(renderWord, 1000);
        };

    };
};












