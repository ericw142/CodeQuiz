var highscoreDiv = document.getElementById('highscoreDiv');
var erase = document.getElementById('erase');
var userInput = document.querySelector('#user');
var submit = document.querySelector('#submit');
var scoreSpan = document.getElementById('scoreSpan');
// Function to clear all highscores
erase.addEventListener('click', function(){
    while (highscoreDiv.firstChild) {
        highscoreDiv.removeChild(highscoreDiv.firstChild);
    }
    localStorage.clear();
    
});
// Function to add a new highscore
submit.addEventListener("click", function(){
    if (!userInput.value) {
        alert("Please input your Initials");
    } else {
        var scoreArray = [userInput.value.trim(), localStorage.getItem('score')];
        // Add score to local storage in a way that can be repeated
        if (localStorage.getItem('highscores') !== null){
            scoreArray = scoreArray.concat(JSON.parse(localStorage.getItem('highscores')));
        }
        
        localStorage.setItem("highscores", JSON.stringify(scoreArray));
        // Create new element to display Highscore
        var h = document.createElement('p');
        var array = JSON.parse(localStorage.getItem('highscores'));
        var node = document.createTextNode(array[0]);
        h.appendChild(node);
        var dots = document.createTextNode(": ");
        h.appendChild(dots);
        var nodeTwo = document.createTextNode(array[1]);
        h.appendChild(nodeTwo);
        highscoreDiv.appendChild(h);
    }

    
});
// Function to load and display previously saved highscores
window.onload = function() {
    scoreSpan.textContent = localStorage.getItem('score');
    // Access array in local storage and print elements
    if (localStorage.getItem('highscores') !== null){ 
        for (var i = 0; i < JSON.parse(localStorage.getItem('highscores')).length; i++) {
            var h = document.createElement('p');
            var array = JSON.parse(localStorage.getItem('highscores'));
            var node = document.createTextNode(array[i]);
            h.appendChild(node);
            var dots = document.createTextNode(": ");
            h.appendChild(dots);
            i++;
            var nodeTwo = document.createTextNode(array[i]);
            h.appendChild(nodeTwo);
            highscoreDiv.appendChild(h);
        }    
    }
}