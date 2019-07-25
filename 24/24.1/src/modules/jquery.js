import { Logger } from "./logger.js";

function Jquery1(name) {
  this.name = name;
}

Jquery1.prototype.run = function(url) {
  const before = new Date().getTime();
  return new Promise(resolve => {
    $.getJSON(url, () => {
      const after = new Date().getTime();
      resolve(new Logger(this.name, before, after));
    });
  });
};

export { Jquery1 };
