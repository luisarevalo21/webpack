import _ from "lodash";
import myName from "./myName";
import "./style.css";
import MyImage from "./myImage.jpg";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  //lodash imported
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.textContent = myName("Cody");
  element.classList.add("hello");
  // const image = new Image();
  // image.src = MyImage;
  // element.appendChild(image);

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
