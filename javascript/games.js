var options = ['a','e','i','o'];
var wins = 0;
var losses = 0;
var guessesleft = 0;
var guessessofar = 0;

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
     
 

    var computerGuess = options[Math.floor(Math.random()*options.length)];

  

    if (userguess=='a'|| userguess=='e' || userguess=='i'|| userguess=='o') {
        if ((userguess=='a') && (computerGuess=='a')) {
            wins++;
           
        }
        if ((userguess=='e') && (computerGuess=='e')) {
            wins++;
            
        }
        if ((userguess=='i') && (computerGuess=='i')) {
            wins++;
            
        }
        if ((userguess=='o') && (computerGuess=='o')) {
            wins++;
            
        }    
        if ((userguess=='a') && (computerGuess=='e')) {
            losses++;
            
        }
        if ((userguess=='e') && (computerGuess=='a')) {
            losses++;
           
        }
        if ((userguess=='a') && (computerGuess=='i')) {
            guessesleft++;
            
        }
        if ((userguess=='i') && (computerGuess=='a')) {
            guessesleft++;
            
        }
        if ((userguess=='a') && (computerGuess=='o')) {
            guessessofar++;
           
        }
        if ((userguess=='o') && (computerGuess=='a')) {
            guessessofar++;
           
        }
    }   else {
        alert("Please choose a, e, i, o");
        }
        var html = "<h2>Press a, e, i, or u to start playing</h2>" +
        "<h2>wins:" + wins + "</h2>" +
        "<h2>losses:" + losses + "</h2>" +
        "<h2>Guessesleft:" + guessesleft + "</h2>" +
        "<h2>Guessessofar:" + guessessofar + "</h2>";

        document.querySelector('.container').innerHTML = html;

    }

