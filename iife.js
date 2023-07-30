function ProfilePage()
  var usernameInput = document.queryselector();

  usernameInput.oninput = function hello() {

  };
()


var x = function () {
  try {
    return someOpCanFail();
  } catch () {
    return null;
  }
}();


var a = 3;

function IIFE(def) {
  def(window);
}

function def(global) {
  var a = 2;
  console.log("a", a);
  console.log("global.a", global.a);
}

// IIFE(def);

(function IIFE(def) {
  def(window);
})(function def(global) {
  var a = 2;
  console.log("a", a);
  console.log("global.a", global.a);
});

// IIFE();
var React = (function IIFE(global) {
  function createElement() {

  }


  function cloneElement() {

  }


  return {
    createElement,
    cloneElement,
  };
})(window);
