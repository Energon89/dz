const arr = [];

function copyObject(obj) {
  if (arr.indexOf(obj) > -1) {
    return `Циклическая ссылка!`;
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
    }
  },
  circular: "circular"
};

obj1.circular = obj1;

const obj2 = copyObject(obj1);

console.log(obj2);
console.log(arr); //здесь можно проверить цикличность ссылки нажав на circular в concole
