let section = document.querySelector("#section");
function randomColor() {
  let rang1 = Math.floor(Math.random() * 255);
  let rang2 = Math.floor(Math.random() * 255);
  let rang3 = Math.floor(Math.random() * 255);
  return `rgb(${rang1}, ${rang2}, ${rang3})`;
}
section.style.backgroundColor = randomColor();
