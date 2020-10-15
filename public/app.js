var totalScore, currentScore, activePlayer, gamePlaying;

start();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        let random = Math.ceil(Math.random() * 6);

        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + random + '.png';

        if (random !== 1) { 
        currentScore += random;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
        } else {
        switchActivePlayer();
        } 
    }     
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    totalScore[activePlayer] += currentScore;
    document.getElementById('score-' + activePlayer).textContent = totalScore[activePlayer];
        if (totalScore[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
            alert('Player ' + (activePlayer + 1) + ' Wins!');
            gamePlaying = false;
        } else {
            switchActivePlayer();
            document.querySelector('.dice').style.display = 'none';
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', start);

function start() {
    totalScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function switchActivePlayer() {
    currentScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
}