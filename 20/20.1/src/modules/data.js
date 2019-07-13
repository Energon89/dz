function getJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onload = function() {
    callback(this.responseText);
  };
}

function Data() {}

Data.prototype.getUsefulContents = function(url) {
  return new Promise(function(resolve) {
    getJson(url, function(data) {
      resolve(JSON.parse(data));
    });
  });
};

export { Data };
