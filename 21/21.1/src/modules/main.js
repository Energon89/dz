import makeSyncDelay from './syncDelay.js';
import { runXhr } from './xmlHttpRequest.js';
import { runSetTimeOut } from './setTimeOut.js';
import { addEventListener } from './buttonClick.js';

const url = 'https://jsonplaceholder.typicode.com/photos';

console.log('sync code start');

makeSyncDelay('delay 1', 2, true);
runSetTimeOut('stm 1', 90);
runXhr('xhr 1', url);
runXhr('xhr 2', url);
addEventListener('btn');

console.log('sync code end');
