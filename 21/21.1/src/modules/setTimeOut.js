import log from "./logger.js";

function runSetTimeOut(name, milliseconds) {
  const before = new Date().getTime();
  setTimeout(() => {
    const after = new Date().getTime();
    log(name, before, after, `milliseconds: ${milliseconds}`); //замыкание на name, before, milliseconds
  }, milliseconds);
}

export { runSetTimeOut };
