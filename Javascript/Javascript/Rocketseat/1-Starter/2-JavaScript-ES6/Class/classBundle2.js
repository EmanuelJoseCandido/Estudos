"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Static */
var Matematic = /*#__PURE__*/function () {
  function Matematic() {
    _classCallCheck(this, Matematic);
  }

  _createClass(Matematic, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Matematic;
}();

console.log(Matematic.sum(1, 4));
