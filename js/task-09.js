function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('button.change-color');
const spanEl = document.querySelector('span.color');

const changeColor = event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  console.log(spanEl.textContent);
};

changeColorBtnEl.addEventListener('click', changeColor);