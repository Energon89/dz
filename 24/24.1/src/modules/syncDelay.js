import { Logger } from "./logger.js";

function SyncDelay1(name) {
  this.name = name;
}

SyncDelay1.prototype.run = function(seconds) {
  const before = new Date().getTime();

  for (let j = 0; j < seconds; j++) {
    for (let i = 0; i < 800000000; i++) {}
  }

  const after = new Date().getTime();
  return new Logger(this.name, before, after, `delay: ${seconds}sec`);
};

export { SyncDelay1 };
