# Word-Guess-Game

The global variables are created as soon as the page is loaded. Wins and losses are each set to 0, wordsToGuess=[] is populated with the words to be cycled through, newIndexCounter is set to 0, and wordsPlayed=[] is created as an empty Array. indexWordToPlay is created and correctGuesses[] and incorrectGuesses[] are created as empty arrays. 

Functions:

generateWordIndex(){
    this function takes no arguments. the purpose is to generate a random numbere between 0 and the length of the array wordsToGuess[].

    as soon as the function begins, a do while loop is entered{
        indexWordToPlay is set to a random number between 0 and the length of the array wordsToGuess.

        a check is done to see if the number generated is a new one or if it's been played already. if it is new, {
            : 1 is added to newIndexCounter.
            
            : a check is done to see if newIndexCounter is equal to the length of of the array to be played (wordsToGuess[]).{
                
                endGame()
                 This is the only place where the endGame() condition can be placed because of the do while loop. without this if statement, the loop would run forever. Unfortunately, since the check is done before the index is returned for the final word to be played, the game always ends with one word unplayed.
            
            }

    }

    once done with all evaluations, indexWordToPlay is returned
}

displayWord(wordToShow){
    This is a simple function that takes a string as a paramter and replaces all charactes in the string with a "-" symbol.

    as soon the function is called, a check is done to see if the word being displayed has spaces in it. if the word to be shown has spaces{

        add the character " " to the array incorrectGuesses[]. This is because the function that updates the display whenever a user presses a key, relies on it.
    }
}

evaluateGuess(l,x){
    this function accepts the index of the word being played and the letter to be evaluated.

    returns true or false depending on if the indexOf the letter exists in the word being played.
}

dashPartial(word){
    this function is meant to update the display whenever called.

    it first creates an empty string, newDisplay. then runs a for loop through every character in the word passed into the function. in the for loop, it checks if each character is in the correctGuesses array. if it is, it adds the letter to newDisplay, if it's not, the "-" character is added to newDisplay.

    the function then replaces the innerHTML with newDisplay. 
}

resetGame(){
    this function runs whenever the player either reaches 0 guesses, or if the word is completed. it sets correctGuesses and incorrectGuesses to new empty arrays. guessesLeft is given a value of 9, a new random unplayed index is generated, a new word is shown, the display is updated, and the game starts listening for presses again. 
}

showRecords(){
    this function updates the display by changing the innerHTML of the tags. 
}

niceList(){
    this function runs a for loop through the array incorrectGuesses array to add a space after each latter. just for a cleaner display. 
}

changePic(winOrLoss){
    gets passed a string winOrLoss which indicates if it was a win or a loss. if the string passed is "loss", they lost, and the picture is changed to loss.jpg. 

    if the string passed is anything other than "loss", it will evaluate the string and change the background of the page depending on the result. 
}