import log from "./logger.js";

function runFetch(name, url) {
  const before = new Date().getTime();
  fetch(url).then(() => {
    const after = new Date().getTime();
    log(name, before, after); //замыкание на name, before;
  });
}

export default runFetch;
