import { makeSyncDelay } from "./syncDelay.js";
import runXhr from "./xmlHttpRequest.js";
import { runSetTimeOut } from "./setTimeOut.js";
import { addEventListener } from "./buttonClick.js";
import promise from "./promise.js";
import runFetch from "./fetch.js";
import runJquery from "./jquery.js";

const url = "https://jsonplaceholder.typicode.com/photos";
const url1 = "https://jsonplaceholder.typicode.com/photos/1";
const url2 = "https://jsonplaceholder.typicode.com/photos/2";
const url3 = "https://jsonplaceholder.typicode.com/photos/3";

console.log("sync code start");

makeSyncDelay("delay 1", 4);
runSetTimeOut("setTimeout 1", 80);
runXhr("xhr 1", url1);
runXhr("xhr 2", url2);
runXhr("xhr 3", url3);
addEventListener("buttonClick");
promise("promise1");
runFetch("fetch1", url1);
runJquery("jQuery1", url);

console.log("sync code end");
