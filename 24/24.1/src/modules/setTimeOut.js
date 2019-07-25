import { Logger } from "./logger.js";

class SetTimeOut1 {
  constructor(name, milliseconds) {
    this.name = name;
    this.milliseconds = 80;
  }

  run(url) {
    const before = new Date().getTime();
    return new Promise(resolve => {
      setTimeout(() => {
        const after = new Date().getTime();
        resolve(
          new Logger(
            this.name,
            before,
            after,
            `milliseconds: ${this.milliseconds}`
          )
        );
      }, this.milliseconds);
    });
  }
}

export { SetTimeOut1 };
