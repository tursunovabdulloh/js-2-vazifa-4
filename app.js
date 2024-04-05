let button = document.querySelector("#button");
function randomColor() {
  let rang1 = Math.floor(Math.random() * 255);
  let rang2 = Math.floor(Math.random() * 255);
  let rang3 = Math.floor(Math.random() * 255);
  return `rgb(${rang1}, ${rang2}, ${rang3})`;
}
function gradus() {
  let gradus1 = Math.floor(Math.random() * 180);
  return `${gradus1}deg`;
}
container.style.backgroundColor = randomColor();
container.style.backgroundImage = `linear-gradient( ${gradus()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`;

button.addEventListener("click", () => {
  container.style.backgroundColor = randomColor();
  container.style.backgroundImage = `linear-gradient( ${gradus()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`;
});

// akhror web
// const body = document.querySelector("body");
// const container = document.querySelector(".container");
// const colorText = document.querySelector(".color-text");
// const values = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
// ];

// // random color function
// function getGradient() {
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     const randomNumber = Math.trunc(Math.random() * values.length);
//     color += values[randomNumber];
//   }

//   return color;
// }

// // set color to body
// function setGradient() {
//   const color1 = getGradient();
//   const color2 = getGradient();
//   const randomDeg = Math.trunc(Math.random() * 360);
//   const bgColor = `linear-gradient(
//     ${randomDeg}deg,
//     ${color1},
//     ${color2}
//   )`;
//   body.style.background = bgColor;
//   colorText.textContent = bgColor;
// }

// setGradient();

// container.addEventListener("click", setGradient);
