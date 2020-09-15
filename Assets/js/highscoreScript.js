var highscoreDiv = document.getElementById('highscoreDiv');
var erase = document.getElementById('erase');
var userInput = document.querySelector('#user');
var submit = document.querySelector('#submit');
var scoreSpan = document.getElementById('scoreSpan');

erase.addEventListener('click', function(){
    while (highscoreDiv.firstChild) {
        highscoreDiv.removeChild(highscoreDiv.firstChild);
    }
    localStorage.clear();
    
});

submit.addEventListener("click", function(){
    localStorage.setItem('username', userInput.value);
    var h = document.createElement('p');
    h.textContent = localStorage.getItem('username') + ": " + localStorage.getItem('score');
    highscoreDiv.appendChild(h);
})

window.onload = function() {
    scoreSpan.textContent = localStorage.getItem('score');
    if (localStorage.getItem('username') && localStorage.getItem('score')) {
        var h = document.createElement('p');
        h.textContent = localStorage.getItem('username') + ": " + localStorage.getItem('score');
        highscoreDiv.appendChild(h);
    }
}