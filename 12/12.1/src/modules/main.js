function copyObject(obj) {
  const arr = [];

  if (arr.indexOf(obj) > -1) {
    console.log("Цикличная ссылка");
  }

  arr.push(obj);

  const clonObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clonObj[key] = copyObject(obj[key]);
    } else {
      clonObj[key] = obj[key];
    }
  }
  return clonObj;
}

const obj1 = {
  cpu: "Intel 9700",
  gpu: {
    name: "Nvidia",
    value: 2080,
    specification: {
      mhz: 1635,
      gbps: 14
    },
    displaySpecification() {
      console.log(`GPU: ${this.specification}`);
    }
  },
  displayCpu() {
    console.log(`CPU: ${this.cpu}`);
  }
};

const obj2 = copyObject(obj1);
console.log(obj2);
