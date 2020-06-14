let mainDiv = document.querySelector("#main-div");

class ButtonJS {
  constructor(color) {
    // `this` -> instance
    this.color = color;

    this.buttonTag = document.createElement("button");
    this.buttonTag.innerText = `Click: ${this.color}`;
    mainDiv.append(this.buttonTag);

    this.buttonTag.addEventListener("click", this.handleClick.bind(this));
  }

  //   handleClick = (evt) => {
  //     // this should be the ButtonJS
  //     console.log(this);
  //     // console.log(evt.target);
  //     document.body.style.backgroundColor = this.color;
  //     // debugger;
  //   };

  //instance method
  handleClick(evt) {
    // this should be the ButtonJS
    console.log(this);
    // console.log(evt.target);
    document.body.style.backgroundColor = this.color;
    // debugger;
  }
}
