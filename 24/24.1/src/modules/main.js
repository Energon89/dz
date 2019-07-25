import { SyncDelay1 } from "./syncDelay.js";
import { Xhr1 } from "./xmlHttpRequest.js";
import { SetTimeOut1 } from "./setTimeOut.js";
import { ButtonClick1 } from "./buttonClick.js";
import { Promise1 } from "./promise1.js";
import { Promise2 } from "./promise2.js";
import { Fetch1 } from "./fetch.js";
import { Jquery1 } from "./jquery.js";
import { AsyncAwait1 } from "./asyncAwait.js";

console.log("sync code start");

function Main() {
  this.url = "https://jsonplaceholder.typicode.com/photos";
  const asyncConstructors = [
    Xhr1,
    Promise1,
    Promise2,
    AsyncAwait1,
    SetTimeOut1,
    ButtonClick1,
    Fetch1,
    Jquery1
  ];

  SyncDelay1.seconds = 2;
  const syncConstructors = [SyncDelay1];

  this.runAsync(asyncConstructors);
  this.runSync(syncConstructors);
}

Main.prototype.runAsync = function(constructors) {
  constructors.forEach(Constructor => {
    new Constructor(Constructor.name)
      .run(this.url)
      .then(logger => logger.logInfo())
      .catch(error => {
        console.log(error);
      });
  });
};

Main.prototype.runSync = function(constructors) {
  constructors.forEach(Constructor => {
    try {
      new Constructor(Constructor.name).run(Constructor.seconds).logInfo();
    } catch (error) {
      console.log(error);
    }
  });
};

new Main();

console.log("sync code end");
