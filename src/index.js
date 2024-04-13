import _ from "lodash";
import myName from "./myName";
import "./style.css";
import MyImage from "./myImage.jpg";

function component() {
  const element = document.createElement("div");
  //lodash imported
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.textContent = myName("Cody");
  element.classList.add("hello");
  const image = new Image();
  image.src = MyImage;
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
