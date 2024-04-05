let section = document.querySelector("#section");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
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
button1.style.backgroundColor = randomColor();
button1.style.backgroundImage = `linear-gradient( ${gradus()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`;

function randomColor2() {
  let rang1 = Math.floor(Math.random() * 255);
  let rang2 = Math.floor(Math.random() * 255);
  let rang3 = Math.floor(Math.random() * 255);
  return `rgb(${rang1}, ${rang2}, ${rang3})`;
}
function gradus2() {
  let gradus1 = Math.floor(Math.random() * 180);
  return gradus1;
}
button2.style.backgroundColor = randomColor2();
button2.style.backgroundImage = `linear-gradient( ${gradus()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`;
