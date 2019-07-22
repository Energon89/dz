import log from "./logger.js";

function runJquery(name, url) {
  const before = new Date().getTime();
  $.getJSON(url, () => {
    const after = new Date().getTime();
    log(name, before, after); //замыкание на name, before
  });
}

export default runJquery;
