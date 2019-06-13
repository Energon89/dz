function addClass(className, elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.add(className);
  }
}

function removeClass(className, elem) {
  elem.forEach(function(elem) {
    elem.classList.remove(className);
  });
}

function ClassHelper() {}
ClassHelper.addClass = addClass;
ClassHelper.removeClass = removeClass;

export { ClassHelper };
