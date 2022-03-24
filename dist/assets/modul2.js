Splitting({ target: ".poster__header", by: "chars" });

const characters = document.querySelectorAll(".char");
const darkCharacters = [
  1, 3, 6, 9, 11, 12, 14, 15, 17, 20, 23, 25, 26, 28, 29, 32, 34, 36, 38, 39,
  41, 43, 45, 48, 50, 52, 54, 55, 57, 59, 61,
];
characters.forEach((character) => {
  const correlativeIndex =
    parseInt(getComputedStyle(character).getPropertyValue("--char-index")) + 1;
  if (darkCharacters.includes(correlativeIndex))
    character.classList.add("char--dark");
});

let elements = document.querySelectorAll(".rolling-text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

// for presentation purpose
setTimeout(() => {
  elements.forEach((element) => {
    element.classList.add("play");
  });
}, 600);

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  });
});
