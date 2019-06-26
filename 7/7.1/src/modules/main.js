const timer = setInterval(onNextTick, 1000);
let timex;
let time = 0;
let lap = `00:00:00:00`;
let isRunning = false;

const htmlElements = {};
htmlElements.startBtn = document.querySelector(
  ".container .buttons button.start"
);
htmlElements.stopBtn = document.querySelector(
  ".container .buttons button.stop"
);
htmlElements.resetBtn = document.querySelector(
  ".container .buttons button.reset"
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.outputClock = document.querySelector(".container .output");
htmlElements.outputStopwatch = document.querySelector(
  ".container #outputStopwatch"
);

htmlElements.clock.addEventListener("click", function() {
  switchMode(this.dataset.mode);
});
htmlElements.stopwatch.addEventListener("click", function() {
  switchMode(this.dataset.mode);
});
htmlElements.timer.addEventListener("click", function() {
  switchMode(this.dataset.mode);
});
htmlElements.startBtn.addEventListener("click", start);
htmlElements.stopBtn.addEventListener("click", stop);
htmlElements.resetBtn.addEventListener("click", reset);

function onNextTick() {
  const currentTime = new Date();
  const timeStrLong = currentTime.toTimeString();
  const timeStrShort = timeStrLong.split(" ")[0];
  setOutput(timeStrShort);
}

function setOutput(currentTime) {
  htmlElements.outputClock.innerText = currentTime;
}

function switchMode(mode) {
  switch (mode) {
    case "clock":
      setLinks(htmlElements.clock);
      htmlElements.outputStopwatch.classList.add("hidden");
      htmlElements.outputClock.classList.remove("hidden");
      break;
    case "stopwatch":
      setLinks(htmlElements.stopwatch);
      goStopwatch();
      break;
    case "timer":
      setLinks(htmlElements.timer);
      break;
  }
}

function setLinks(link) {
  htmlElements.clock.classList.remove("selected");
  htmlElements.stopwatch.classList.remove("selected");
  htmlElements.timer.classList.remove("selected");
  link.classList.add("selected");
  htmlElements.startBtn.classList.add("hidden");
  htmlElements.stopBtn.classList.add("hidden");
  htmlElements.resetBtn.classList.add("hidden");
}

function goStopwatch() {
  htmlElements.startBtn.classList.remove("hidden");
  htmlElements.stopBtn.classList.remove("hidden");
  htmlElements.resetBtn.classList.remove("hidden");
  htmlElements.outputClock.classList.add("hidden");
  htmlElements.outputStopwatch.classList.remove("hidden");
  htmlElements.outputStopwatch.innerText = lap;
}

function startTimer() {
  if (isRunning) {
    timex = setTimeout(function() {
      time++;
      let t = time / 10;

      let milli = time % 10;
      let secs = parseInt(t % 60);
      let mins = parseInt(t / 60);
      let hours = parseInt(t / 3600);

      if (mins < 10) {
        mins = `0${mins}`;
      }
      if (milli < 10) {
        milli = `${milli}0`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (secs < 10) {
        secs = `0${secs}`;
      }

      lap = `${hours}:${mins}:${secs}:${milli}`;

      htmlElements.outputStopwatch.innerText = lap;

      startTimer();
    }, 100);
  }
}

function reset() {
  clearTimeout(timex);
  isRunning = false;
  time = -1;
  lap = `00:00:00:00`;
  htmlElements.outputStopwatch.innerText = lap;
}

function stop() {
  clearTimeout(timex);
  isRunning = false;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    startTimer();
  }
}
