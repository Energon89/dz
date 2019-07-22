import log from "./logger.js";

function addEventListener(name) {
  const before = new Date().getTime();

  document.querySelector(".button").addEventListener("click", function() {
    const after = new Date().getTime();
    log(name, before, after); //замыкание на name, before
  });
}

export { addEventListener };
