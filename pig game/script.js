'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

const hidden = document.getElementsByClassName('hidden');

diceEl.classList.add('hidden');

let currentScore = 0;

btnRoll.addEventListener('click', function(){
    //generate random dice roll
    let diceNo = Math.trunc(Math.random()*6) + 1;
    console.log(`${diceNo}`);

    //display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNo}.png`

    //is roll = 1? true: switch player || false: add score and display score
    if(diceNo !== 1){
        //add score and display
    } else{
        //switch player
    }
})