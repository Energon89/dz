class UrlParser {
  constructor(url) {
    this.url = url;
  }

  getRegExp() {
    const result = {};
    this.url.replace(/[?&]+([^=&]+)=([^&]*)/g, (match, name, value) => {
      result[name] = value;
    });
    return result;
  }

  getSplit() {
    const parts = this.url.split("?");
    const result = {};
    if (parts.length === 2) {
      const rightPart = parts[1];
      const pairs = rightPart.split("&");
      pairs.forEach(pair => {
        const pairDetails = pair.split("=");
        const name = pairDetails[0];
        const value = pairDetails[1];
        result[name] = value;
      });

      return result;
    }
  }
}

const urlParser = new UrlParser("http://127.0.0.1:5500?a=1&b=2&c=3");
console.log(urlParser.getRegExp());
console.log(urlParser.getSplit());
