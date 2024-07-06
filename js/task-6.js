function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = { 
  number: document.querySelector("input[type=number]"),
  createBtn:document.querySelector("button[data-create]"),
  destroyBtn:document.querySelector("button[data-destroy]"),
  boxesContainer:document.querySelector("#boxes")
}

refs.createBtn.addEventListener("click", handleSqrCreation);
refs.destroyBtn.addEventListener("click", andleSqrDestroy);

function handleSqrCreation() {
  let number = parseInt(refs.number.value);
  const minValue = parseInt(refs.number.attributes.min.value);
  const maxValue = parseInt(refs.number.attributes.max.value);

  if (number >= minValue && number <= maxValue) { 
    createBoxes(number);
  }
  refs.number.value = null;
}

function andleSqrDestroy() {
  destroyBoxes()
 }

function createBoxes(amount) {
  const boxes = [];
  let initialWidth = 30;
  let initialHeight = 30;
  for (let index = 0; index < amount; index += 1) {
    const boxRandomColor = getRandomHexColor();
    let box = `<div class="js-box" style="background-color:${boxRandomColor};width: ${initialWidth}px; height: ${initialHeight}px"></div>`;
    boxes.push(box);
    initialWidth += 10;
    initialHeight += 10;
  }
   refs.boxesContainer.innerHTML = boxes.join(""); 
  }

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}