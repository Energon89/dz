function sum(value) {
  let result = 0;

  function sum2(value) {
    result += value;
    return sum2;
  }

  sum2.showResult = function() {
    console.log(result);
  };

  return sum2(value);
}

sum(3)(7)(8)(-6)(-2).showResult();
