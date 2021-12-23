document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Bulma!");
});
class App {
  constructor() {
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
      dgBox: function () {
        return this.dg;
      },
      a1Box: function () {
        return this.a1;
      },
      a2Box: function () {
        return this.a2;
      },
    };
    this.output = "";
    this.markup = document.querySelector("#markup");
  }

  eventHandler() {
    this.inputs.addEventListener("input", (e) => {
      let { value, id, type } = e.target;
      console.log(id, value, type);
      if (type !== "number") {
        this.kittenColor[id] = value;
      }
      this.setTextInputs(id, type);
      this.setKitten();
      this.setText(this.output);
    });
  }

  setTextInputs(id, type) {
    if (type !== "number") {
      if (type === "range")
        this[`${id}Box`].value = this.kittenColor[`${id}Box`]();
    } else {
      const idFix = id.slice(0, 2);
      this.kittenColor[idFix] = this[id].value;
    }
  }

  convertAlpha(alpha) {
    const hex = Math.round((alpha * 255) / 100).toString(16);
    if (hex.length !== 2) return hex.padStart(2, "0");
    return hex;
  }
  setKitten() {
    this.output = `linear-gradient(${this.kittenColor.dg}deg, ${
      this.kittenColor.c1
    }${this.convertAlpha(this.kittenColor.a1)}, ${
      this.kittenColor.c2
    }${this.convertAlpha(
      this.kittenColor.a2
    )}),url('https://placekitten.com/408/287')`;

    this.kitten.style.backgroundImage = this.output;
  }

  setText(value) {
    this.markup.value = `.your-element{
     background-image: ${value};
    }`;
  }
}

new App();
