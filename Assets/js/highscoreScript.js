var highscoreDiv = document.getElementById('highscoreDiv');
var erase = document.getElementById('erase');







erase.addEventListener('click', function(){
    while (highscoreDiv.firstChild) {
        highscoreDiv.removeChild(highscoreDiv.firstChild);
    }
});

var h = document.createElement('p');
h.textContent = localStorage.getItem('username') + ": " + localStorage.getItem('score');
highscoreDiv.appendChild(h);