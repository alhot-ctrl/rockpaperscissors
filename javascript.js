document.addEventListener("DOMContentLoaded", function (e) {
    function getComputerChoice() {
        let choice = Math.round(Math.random() * 3)
        if (choice === 1) {
            console.log('Computer Choice: Rock')
            return 'Rock'
        }
        else if (choice === 2) {
            console.log('Computer Choice: Paper')
            return 'Paper'
        }
        else {
            console.log('Computer Choice: Scissor')
            return 'Scissor'
        }
    };

    function playRound(compSec, playSec) {

        let ps = playSec.toString().toLowerCase();
        let cs = compSec.toString().toLowerCase();

        console.log('ps as lc:' + ps)
        console.log('cs as lc:' + compSec)

        if (ps === 'rock' && cs === 'rock') {
            return 'It is a Draw! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'rock' && cs === 'paper') {
            return 'You Lose! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'rock' && cs === 'scissor') {
            return 'You Win! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'paper' && cs === 'rock') {
            return 'You Win! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'paper' && cs === 'paper') {
            return 'It is a Draw! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'paper' && cs === 'paper') {
            return 'It is a Draw! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'paper' && cs === 'scissor') {
            return 'You Lose! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'scissor' && cs === 'rock') {
            return 'You Lose! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'scissor' && cs === 'paper') {
            return 'You Win! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }
        else if (ps === 'scissor' && cs === 'scissor') {
            return 'It is a Draw! ' + 'Your Choice: ' + ps + ' Computer Choice: ' + cs
        }

    };

    const choices = document.querySelectorAll('.choice');
    //console.log(choices.innerText);
    
    //funktioniert auf Einzelbasis
    //choices[0].addEventListener('click', function() {console.log(playRound(getComputerChoice(),choices[0].innerText))});
    for (let i = 0; i < choices.length; i++) {

        //console.log(choices[i].innerHTML);
        choices[i].addEventListener('click', function() {
            console.log(playRound(getComputerChoice(),choices[i].innerText))});
    };


    /*
    function game(numberOfRounds){
    
        for(let i=1;i<=numberOfRounds;i++){
            console.log(playRound(getComputerChoice(),prompt('Round '+i+' ! Enter Rock, Paper or Scissor')))
        }
    }
    
    game(5)
    */

    /* Tests
    const playerSelection ='ROCK';
    const computerSelection=getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
    */
});