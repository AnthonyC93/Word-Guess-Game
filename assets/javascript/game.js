//make array of words to be played
//make empty array of words already played
//make empty array of correctGuesses
//make empty array of incCorrectGuesses
//make var wins
//make var losses
var wins=0;
var losses=0;
var wordsToGuess = ["avengers  infinity  war", "sorry  to  bother  you","ant  man  and  the  wasp", "mission  impossible  fallout","blackkklansman", "black  panther", "annihilation", "a  quiet  place","the  incredibles"];
var newIndexCounter=0;
var wordsPlayed = [];

var indexWordToPlay;
var correctGuesses = [];
var incorrectGuesses = [];
var guessesLeft = 9;

//MAKE COUNTER OUTSIDE ONKEYUP
//UPDATE COUNTER TO BEGINNING OF KEYUP EVENT
//RUN IF STATEMENT EVALUATING COUNTER AT END OF EACH BUTTON PRESSr
//USE CONSOLE

//start part to be looped through
//clear previous game data
//wordsPLayed.length=0;
//correctGuesses.length=0;
//incorrectGuesses.length=0;

$(document).ready(function(){
    //display randomly generterated unplayed word from array wordtoplay
    displayWord(wordsToGuess[generateWordIndex()]);

    //start listening for buttons
    startListen();
})

// F U N C T I O N S
function generateWordIndex() {
  //figure out which word in array to play
  //get random number of index to play
    do {
      indexWordToPlay = Math.floor(Math.random() * wordsToGuess.length);
        

        if (wordsPlayed.indexOf(wordsToGuess[indexWordToPlay]) === -1) {
            newIndexCounter++;
           

            if(newIndexCounter===wordsToGuess.length){
                endGame();
            }
            
        }

    }while(wordsPlayed.indexOf(wordsToGuess[indexWordToPlay]) != -1);

  return indexWordToPlay;
}
function displayWord(wordToShow) {

     //check for spaces in word and add them to correctGuesses automatically if present
  if(wordToShow.indexOf(" ") != -1){
    correctGuesses.push(" ");
}
 // var dashWord = wordToShow.replace(/./g, "-");   
var dashWord = dashPartial(wordToShow);
  $("#wordToPlay").html(dashWord);
}
function evaluateGuess(l, x) {
  //x=array index for word
  //letter guessed
  var guessIndex = wordsToGuess[x].indexOf(l);

  if (guessIndex < 0) {
    return false;
  } else {
    return true;
  }
}
function dashPartial(word) {
  var newDisplay = "";
  //check if letter is in correctGuesses array
  for (var z = 0; z < word.length; z++) {
    if (correctGuesses.indexOf(word[z]) > -1) {
      newDisplay += word[z];
    } else {
      newDisplay += "-";
    }
  }
  document.getElementById("wordToPlay").innerHTML = newDisplay;
}
function resetGame() {
 correctGuesses = [];
incorrectGuesses = [];
guessesLeft = 9;

  displayWord(wordsToGuess[generateWordIndex()]);
  showRecords();
  startListen();
}
function showRecords() {
  $("#wins").html("Wins: <br>" + wins);
  $("#losses").html("Losses: <br>" + losses);
  $("#lettersGuessed").html("Letters Guessed: <br>"+" "+ niceList(incorrectGuesses));
  $("#guessesLeft").html("Guesses Remaining: <br>" + guessesLeft);
}
function startListen() {
  document.onkeyup = function(event) {
    $("#pressKey").hide();
    $("#rowOneCard").hide();
    var guess = event.key.toLowerCase();
    var guessStatus = evaluateGuess(guess, indexWordToPlay);
    var wordToFix = wordsToGuess[indexWordToPlay];
    //if guess is in word and correct
    if (guessStatus === true) {
      //before adding to correctGuesses, check that isn't already there
      if (correctGuesses.indexOf(guess) < 0) {
        correctGuesses.push(guess);
      }
      //update display
      wordToFix = wordsToGuess[indexWordToPlay];
      dashPartial(wordToFix);
      //if word is done, update wins

      var wordSoFar = $("#wordToPlay").html();
      if (wordSoFar === wordToFix) {
        wordsPlayed.push(wordToFix);
        wins++;
        changePic(wordToFix);
        resetGame();
      }
    } else {
      //incorrect guess
      //only add to incorrectGuesses if new incorrect guess. only reduce number of guesses if wrong guess is new.
      if (incorrectGuesses.indexOf(guess) < 0) {
        incorrectGuesses.push(guess);
        guessesLeft--;
      }
    }

    //check how many guesses left and resetGame depending on it.
    if (guessesLeft === 0) {
      losses++;
      wordsPlayed.push(wordsToGuess[indexWordToPlay]);
      changePic("loss");
      resetGame();
     }
    
    showRecords();
  }
}

function niceList(){
  
//   if(copyIncorrect.length===0){
//       console.log("copyIncorrect.length=0 returning empty string")
//     return "";
//   }
  var newString = "";
  for(var i=0;i<incorrectGuesses.length;i++){
    newString+=(incorrectGuesses[i]+" ");
    console.log("new newString value:" + newString)
  }

  console.log("returning newString")
  return newString;
}
function changePic(winOrLoss){
    if(winOrLoss==="loss"){
        $("body").css("background-image","url(assets/images/loss.jpg)");
        $("body").css("background-size","cover")
        //$("body").css("background-repeat","no-repeat")
    }else{
        if(winOrLoss==="sorry  to  bother  you"){
            $("body").css("background-image","url(assets/images/sorry.jpg)");
            $("body").css("background-size","cover")
           // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="avengers  infinity  war"){
          $("body").css("background-image","url(assets/images/avengers.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="ant  man  and  the  wasp"){
          $("body").css("background-image","url(assets/images/antMan.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="mission  impossible  fallout"){
          $("body").css("background-image","url(assets/images/mission.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="blackkklansman"){
          $("body").css("background-image","url(assets/images/blackkk.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="black  panther"){
          $("body").css("background-image","url(assets/images/panther.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="annihilation"){
          $("body").css("background-image","url(assets/images/annihilation.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="a  quiet  place"){
          $("body").css("background-image","url(assets/images/quiet.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        } 
        if(winOrLoss==="the  incredibles"){
          $("body").css("background-image","url(assets/images/incredible.jpg)");
          $("body").css("background-size","cover")
          // $("body").css("background-repeat","no-repeat")
        }
        
    }
}
function endGame(){
  $("#cardBody").hide();
  $("body").css("background-image","none");

    $("#endOfGameMessage").html("thanks for playing.<br><br>I'm out of words for you to guess.<br><br>...");

    window.stop();
}