Homework Assignment due Wednesday, September 16, 2020 11:59 PM

The goal of this assignment was to build a timed, multiple choice quiz application that dynamically updates its' HTML, is responsive to screen size, and stores scores in local storage
on the highscores page. In order to accomplish this, I first created a basic html structure on the index.html and highscore.html pages, with divs and spans to contain the elements
that I would create dynamically. I used BootStrap classes to ensure every element is responsive. 

The script.js file contains the Javascript that runs the quiz, and the highscoreScript.js file contains the code that manages highscores in local storage.
In script.js, I created variables to contain all of the data for the quiz, as well as to select specific elements on the page. I have a function to start the quiz, manage the timer, to create the answer buttons dynamically, to update the question and answer buttons, and to reset the entire page if needed.

As you go through the quiz, the page will update a span with the question, then create buttons with the text of all of the corrosponding choices. Once you choose an answer, it will compare the
text to the correct answer, and if they match, it will display "Correct!" and then update to the next question. If you choose a button with text that does not match the answer, it will display "Incorrect!", subtract 25 seconds from the timer, and then update to the next question. 

At the end of the quiz, it will store your remaining time into local storage as 'score'. Then, the page will change to the highscore page.

On page load, the highscoreScript.js file will check if you have any previously saved scores and display them. There is a text input for the user to input their initials, and when they click submit, the page udpates the highscore div to include their new score and initials. The highscores are stored first into an array, and then added to a stringified array within local storage.
This way, the page saves an array in local storage that includes all previous highscore entires. 


GitHub Repository: https://github.com/ericw142/CodeQuiz

GitHub Pages: https://ericw142.github.io/CodeQuiz/

Quiz Page

![Quiz Application](/Assets/images/homepage.png?raw=true "Quiz Application")

Highscore Page

![Highscores](/Assets/images/highscores.png?raw=true "Highscores")