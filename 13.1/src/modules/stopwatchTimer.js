import { ClassHelper } from "./classHelper.js";

function StopwatchTimer(initMode, initSeconds) {
  let mode = initMode;
  let time;
  let startTime = initSeconds;

  this.htmlElements = {
    output: document.querySelector(
      `.container [data-mode = "${mode}"] .output`
    ),
    buttons: document.querySelectorAll(
      `.container .tabs [data-mode="${mode}"] .buttons button`
    ),
    startButton: document.querySelector(
      `.container .tabs [data-mode="${mode}"] .buttons .start`
    ),
    stopButton: document.querySelector(
      `.container .tabs [data-mode="${mode}"] .buttons .stop`
    ),
    resetButton: document.querySelector(
      `.container .tabs [data-mode="${mode}"] .buttons .reset`
    )
  };

  const htmlElements = this.htmlElements;

  htmlElements.startButton.addEventListener("click", onStartButtonClick);
  htmlElements.stopButton.addEventListener("click", onStopButtonClick);
  htmlElements.resetButton.addEventListener("click", onResetButtonClick);

  function onStartButtonClick() {
    ClassHelper.removeClass("disabled", htmlElements.buttons);
    ClassHelper.addClass("disabled", [htmlElements.startButton]);
    startTimer(startTime);
  }

  function onStopButtonClick() {
    ClassHelper.removeClass("disabled", htmlElements.buttons);
    ClassHelper.addClass("disabled", [htmlElements.stopButton]);
    clearInterval(time);
  }

  function onResetButtonClick() {
    ClassHelper.removeClass("disabled", htmlElements.buttons);
    ClassHelper.addClass("disabled", [htmlElements.resetButton]);
    clearInterval(time);
    startTime = initSeconds;
    if (mode === "timer") {
      htmlElements.output.innerText = "00:05:00";
    } else htmlElements.output.innerText = "00:00:00";
  }

  function startTimer(duration) {
    let start = new Date().getTime();
    let difference;

    time = setInterval(function() {
      if (mode === "timer") {
        difference =
          duration - Math.round((new Date().getTime() - start) / 1000);
      } else {
        difference = duration + (new Date().getTime() - start) / 1000;
      }

      let hours = parseInt(difference / 3600);
      let minutes = parseInt((difference / 60) % 60);
      let seconds = parseInt(difference % 60);

      startTime = hours * 3600 + minutes * 60 + seconds;

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;

      if (difference <= 0) {
        clearInterval(time);
        ClassHelper.removeClass("disabled", htmlElements.buttons);
        ClassHelper.addClass("disabled", [htmlElements.stopButton]);
        ClassHelper.addClass("disabled", [htmlElements.startButton]);
      }
    }, 1000);
  }
}

export { StopwatchTimer };
