"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pessoa = /*#__PURE__*/function () {
  function Pessoa() {
    _classCallCheck(this, Pessoa);

    this.name;
    this.age;
    this.sex;
    this.yearBorn;
  }

  _createClass(Pessoa, [{
    key: "calculatAge",
    value: function calculatAge() {
      var age = new Date();
      this.age = age.getFullYear() - this.yearBorn;
    }
  }, {
    key: "addName",
    value: function addName(name) {
      this.name = name;
    }
  }, {
    key: "addYearBorn",
    value: function addYearBorn(yearBorn) {
      this.yearBorn = yearBorn;
    }
  }, {
    key: "addSex",
    value: function addSex(sex) {
      this.sex = sex;
    }
  }, {
    key: "showAge",
    value: function showAge() {
      if (this.age != null) console.log(this.age);
    }
  }, {
    key: "showName",
    value: function showName() {
      if (this.name.length != 0) console.log(this.name);
    }
  }, {
    key: "showSex",
    value: function showSex() {
      if (this.sex.length != 0) console.log(this.sex);
    }
  }, {
    key: "showDetails",
    value: function showDetails() {
      console.log("Mr.: ".concat(this.name));
      console.log("Sex: ".concat(this.sex));
      console.log("Age: ".concat(this.age));

      if (this.age > 17) {
        if (this.sex === "Masculino") {
          console.log("Your give 5000 Akz for get in party.");
        } else if (this.sex === "Femenino") {
          console.log("Your give 2500 Akz for get in party.");
        } else {
          console.log('Your Sex not exist.');
        }
      } else {
        console.log('You can\'t get in, you have small age.');
      }
    }
  }]);

  return Pessoa;
}();

var myPessoa = new Pessoa();
myPessoa.addName('Emanuel');
myPessoa.addYearBorn(2005);
myPessoa.addSex("Masculino");
myPessoa.calculatAge();
myPessoa.showDetails();
