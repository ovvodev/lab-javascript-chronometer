//const Chronometer = require("./chronometer");
// the above has been commented because gives error in the browser 

const chronometer = new Chronometer(0 , null);

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  milDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];

}

function printMinutes() {
  // ... your code goes here
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  
}

function printSeconds() {
  // ... your code goes here
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
  btnLeftElement.textContent = 'START';
  btnRightElement.textContent = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnLeftElement.textContent = 'STOP';
  btnRightElement.textContent = 'SPLIT';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('stop')) {
    // Stop the chronometer
    chronometer.stop();
    setStopBtn();
  } else {
    // Start the chronometer
    chronometer.start(() => {
      printTime();
    });
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    // Record a split time
    printSplit();
  } else {
    // Reset the chronometer
    chronometer.reset();
    clearSplits();
    printTime();
    setResetBtn();
  }
  
});

