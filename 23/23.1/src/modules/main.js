function delay(ms) {
  return Promise.resolve().then(() => {
    return new Promise(resolve => {
      //      setTimeout(() => {
      //        resolve(ms);
      //      }, ms);
      setTimeout(resolve.bind(this, ms), ms);
    });
  });
}

delay(4000).then(ms => {
  console.log(ms);
});
