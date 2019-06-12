let arr = [];

function copyObject(obj) {
  if (arr.indexOf(obj) > -1) {
    console.log(`Цикличная ссылка на индексе ${arr.indexOf(obj)}`);
    return;
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
      gbps: 14,
      name: "Nvidia"
    },
    displaySpecification() {
      console.log(`GPU: ${this.specification.name}`);
    }
  },
  displayCpu() {
    console.log(`CPU: ${this.cpu}`);
  },
  circular: "circular"
};

obj1.circular = obj1;

const obj2 = copyObject(obj1);

obj1.displayCpu();
obj2.displayCpu();

obj1.gpu.displaySpecification();
obj2.gpu.displaySpecification();

console.log(obj2);
console.log(arr);
