import log from "./logger.js";

function makeSyncDelay(name, seconds) {
  const before = new Date().getTime();

  for (let j = 0; j < seconds; j++) {
    for (let i = 0; i < 800000000; i++) {}
  }

  const after = new Date().getTime();
  log(name, before, after, `delay: ${seconds}sec`);
}

export { makeSyncDelay };
