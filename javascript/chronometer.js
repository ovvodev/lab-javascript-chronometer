class Chronometer {
  constructor(currentTime , intervalId) {
    // ... your code goes here
    this.currentTime = currentTime;
     this.intervalId = intervalId;
     this.milliseconds = 0;
     this.millisecondId = null;
  }

  start(callback) {
    
      this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if ( typeof callback === "function"){
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  getMilliseconds(){
    this.millisecondId = setInterval(() => {
      this.milliseconds += 1;
      if(this.milliseconds === 99){
        clearInterval(this.millisecondId);
      }
    }, 1);
    return this.milliseconds;
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    return ("0" + value).slice(-2);

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    clearInterval(this.millisecondId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.milliseconds = 0;
    let numbersElems = document.querySelectorAll(".number");
    numbersElems.forEach((element) => {
      element.innerHTML = "0";
    });
  }

  split() {
    // ... your code goes here
    let minuteSplit = this.computeTwoDigitNumber(this.getMinutes());
    let secondSplit = this.computeTwoDigitNumber(this.getSeconds());
    let miliSplit = this.computeTwoDigitNumber(this.getMilliseconds());
    return minuteSplit + ":" + secondSplit + ":" + miliSplit;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
