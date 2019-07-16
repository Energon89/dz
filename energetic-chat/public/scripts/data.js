function getJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(this.responseText);
    }
  };
  xhr.send(null);
}

function Data() {}

Data.prototype.getUsefulContents = function(url, callback) {
  getJson(url, function(data) {
    callback(JSON.parse(data));
  });
};

export { Data };
