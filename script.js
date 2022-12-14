'use strict';

// Selecting elements
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById("score--1");
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnNew = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionality

