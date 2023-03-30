# Front-End-Game
A Game of Hangman by Grant Terdoslavich

## Hangman
Hangman is a word guessing game where players take turns guesssing eachothers hidden words. One player will set up a word, and the other will try to guess the word letter by letter. For every letter the guesser gets wrong, a piece of the hangman is drawn until either the word has been correctly filled out or the hangman is fully drawn. In the former case the player wins, in the latter the player loses.

## Technology used
I used standard HTML, CSS, and JS in order to write the base frame of the site, and how it looks, as well as how the internal game logic works. As for the hangman himself, I am using a tag called 'Canvas' in order to draw the 'paper-looseleaf' baclground, the gallows, and the pieces of the hangman.

## Process
I focused on developing the internal game logic first so that way I could be sure that my game would work once I started including the DOM.
I went back to some old work of mine in order to reacquaint myself with the 'canvas' tag, so that way I could draw the hangman.

## Challenges
At first the process for checking for duplicate letters was challenging, but returning to some documentation on the methods of arrays in order to check to see that the player's input was already recorded and stored inside an array of correct or incorrect letters. Getting the last leg to draw after losing was also a challenge, as the the game would end and the last leg wouldn't draw. Later challenges presented themselves while I was trying to update the styling of the DOM.

## Stretch/Future Goals
Future goals will include stripping out special characters from the user's input for the string to be guessed, and have an API to return a random word as a string if a player doesn't give an input. I would also like to add a timer that goes for a minute after the user enters their prompt, using an integer that starts at 60 and using setInterval, every second decrement that integer until it is 0, and then the player loses. The final thing I would like to do with this project would be to make the CSS more reactive.