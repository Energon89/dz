const htmlElements = {
  output: document.querySelector('.container [data-mode="clock"] .output')
};

class Clock {
  constructor() {}
  init() {
    setInterval(onNextTick, 1000);
    onNextTick();
  }
}

function onNextTick() {
  const currentTime = new Date();
  const timeStrLong = currentTime.toTimeString();
  const timeStrShort = timeStrLong.split(" ")[0];
  htmlElements.output.innerText = timeStrShort;
}

export { Clock };
