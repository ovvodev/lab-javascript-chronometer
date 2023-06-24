class Chronometer {
  constructor(currentTime , intervalId) {
    // ... your code goes here
    this.currentTime = currentTime;
     this.intervalId = intervalId;
  }

  start(callback) {
    // ... your code goes here
   this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if ( typeof callback === "function"){
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return ("0" + value).slice(-2);

  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    let numbersElems = document.querySelectorAll(".number");
    numbersElems.forEach((element) => {
      element.innerHTML = "0";
    });
  }

  split() {
    // ... your code goes here
    let minuteSplit = this.computeTwoDigitNumber(this.getMinutes());
    let secondSplit = this.computeTwoDigitNumber(this.getSeconds());
    return minuteSplit + ":" + secondSplit;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
