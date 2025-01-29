'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// const currentScore = document.getElementsByClassName('current-score')
// const activePlayer = document.getElementsByClassName('player--active');
// const playerEl = document.querySelector('.player');

//initial conditions
let scores, currentScore, activePlayerNo, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayerNo = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

function switchPlayer() {
  //switch player
  document.querySelector(`#current--${activePlayerNo}`).textContent = 0;
  // document.querySelector(`.player--${activePlayerNo}`).classList.remove('player--active');
  activePlayerNo = activePlayerNo === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  // document.querySelector(`.player--${activePlayerNo}`).classList.add('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random dice roll no.
    let diceNo = Math.trunc(Math.random() * 6) + 1;
    console.log(`${diceNo}`);

    //display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNo}.png`;

    //is roll !== 1? true: add score and display score || false: switch player
    if (diceNo !== 1) {
      //add score and displayf
      currentScore += diceNo;
      document.querySelector(`#current--${activePlayerNo}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      // // switch player
      // document.querySelector(`#current--${activePlayerNo}`).textContent = 0;
      // // document.querySelector(`.player--${activePlayerNo}`).classList.remove('player--active');
      // activePlayerNo = activePlayerNo === 0 ? 1 : 0;
      // currentScore = 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      // // document.querySelector(`.player--${activePlayerNo}`).classList.add('player--active');
      switchPlayer();
      score0El.textContent = scores[0];
      score1El.textContent = scores[1];
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayerNo] += currentScore;
    if (scores[activePlayerNo] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayerNo}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayerNo}`)
        .classList.remove('player--active');
    } else {
      score0El.textContent = scores[0];
      score1El.textContent = scores[1];
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);