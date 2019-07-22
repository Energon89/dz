import log from "./logger.js";

function promise(name) {
  const before = new Date().getTime();
  return new Promise((resolve, reject) => {
    resolve(new Date().getTime());
  }).then(after => {
    log(name, before, after); //замыкание на before
  });
}

export default promise;
