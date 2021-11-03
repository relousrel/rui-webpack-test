import '../css/image.css';

function packageImg() {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.width = 400;
  img.src = require("../img/01.jpeg");
  div.appendChild(img);
  const oDiv = document.createElement("div");
  oDiv.className = "oDiv";
  div.appendChild(oDiv);
  return div;
}

document.body.appendChild(packageImg());
