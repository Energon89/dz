function getJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onload = function() {
    callback(this.responseText);
  };
}

function Data() {}

Data.prototype.getUsefulContents = function(url, callback) {
  getJson(url, function(data) {
    callback(JSON.parse(data));
  });
};

export { Data };
