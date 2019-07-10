function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(ms);
    }, ms);
  }).then(function(ms) {
    console.log(ms);
  });
}

delay(4000);
