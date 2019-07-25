import { Promise2 } from "./promise2.js";

function AsyncAwait1(name) {
  this.name = name;
}

AsyncAwait1.prototype.run = async function(url) {
  const promise2 = new Promise2(this.name);
  return await promise2.run(url);
};

export { AsyncAwait1 };
