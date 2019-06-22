import { StopwatchTimer } from "./stopwatchTimer.js";

function Timer() {
  const callFunction = StopwatchTimer.bind(this, "timer", 300);
  callFunction();
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  console.log(this);
};

export { Timer };
