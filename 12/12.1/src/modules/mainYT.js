let arr = [];

function objectCopy(object) {
  if (arr.indexOf(object) > -1) {
    return "circular reference is detected";
  }

  arr.push(object);

  const clon = {};

  for (let key in object) {
    if (typeof object[key] === "object") {
      clon[key] = objectCopy(object[key]);
    } else {
      clon[key] = object[key];
    }
  }

  return clon;
}

const obj = {
  size: 123,
  coords: {
    x: 1,
    y: {
      value: 111,
      direction: "top"
    },
    showDirection() {
      console.log(`coords: ${this.y.direction}`);
    }
  },
  showSize() {
    console.log(`size: ${this.size}`);
  }
};

const obj2 = objectCopy(obj);
console.log(obj2);
