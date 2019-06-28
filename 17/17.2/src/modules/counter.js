function getCounterObj() {
  let result = 0;

  function increase(value) {
    result += value;
  }

  function decrease(value) {
    result -= value;
  }

  function showResult() {
    console.log(result);
  }

  const obj = { increase, decrease, showResult };

  return obj;
}

const counter = getCounterObj();
counter.increase(5);
counter.decrease(7);
counter.showResult();
