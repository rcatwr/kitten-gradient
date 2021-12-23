"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello Bulma!");
});

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.c1 = document.querySelector("#color1-input");
    this.c2 = document.querySelector("#color2-input");
    this.a1 = document.querySelector("#alpha1");
    this.a2 = document.querySelector("#alpha2");
    this.kitten = document.querySelector("#kittenBox");
    this.dir = document.querySelector("input#dg");
    this.inputs = document.querySelector("div#input-container");
    this.appContainer = document.querySelector(".app");
    this.markup = document.querySelector("#markup");
    this.a1Box = document.querySelector("#a1Box");
    this.a2Box = document.querySelector("#a2Box");
    this.dgBox = document.querySelector("#dgBox");
    this.eventHandler();
    this.kittenColor = {
      c1: "#0080ff",
      c2: "#ff0000",
      a1: "70",
      a2: "70",
      dg: "45",
      dgBox: function dgBox() {
        return this.dg;
      },
      a1Box: function a1Box() {
        return this.a1;
      },
      a2Box: function a2Box() {
        return this.a2;
      }
    };
    this.output = "";
    this.markup = document.querySelector("#markup");
  }

  App.prototype.eventHandler = function eventHandler() {
    var _this = this;

    this.inputs.addEventListener("input", function (e) {
      var _e$target = e.target,
          value = _e$target.value,
          id = _e$target.id,
          type = _e$target.type;

      console.log(id, value, type);
      if (type !== "number") {
        _this.kittenColor[id] = value;
      }
      _this.setTextInputs(id, type);
      _this.setKitten();
      _this.setText(_this.output);
    });
  };

  App.prototype.setTextInputs = function setTextInputs(id, type) {
    if (type !== "number") {
      if (type === "range") this[id + "Box"].value = this.kittenColor[id + "Box"]();
    } else {
      var idFix = id.slice(0, 2);
      this.kittenColor[idFix] = this[id].value;
    }
  };

  App.prototype.convertAlpha = function convertAlpha(alpha) {
    var hex = Math.round(alpha * 255 / 100).toString(16);
    if (hex.length !== 2) return hex.padStart(2, "0");
    return hex;
  };

  App.prototype.setKitten = function setKitten() {
    this.output = "linear-gradient(" + this.kittenColor.dg + "deg, " + this.kittenColor.c1 + this.convertAlpha(this.kittenColor.a1) + ", " + this.kittenColor.c2 + this.convertAlpha(this.kittenColor.a2) + "),url('https://placekitten.com/408/287')";

    this.kitten.style.backgroundImage = this.output;
  };

  App.prototype.setText = function setText(value) {
    this.markup.value = ".your-element{\n     background-image: " + value + ";\n    }";
  };

  return App;
}();

new App();