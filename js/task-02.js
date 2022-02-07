const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const itemsEl = ingredients.map(ingredient => {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = ingredient;
  itemsEl.classList.add('item');

  return itemsEl;
});
listEl.append(...itemsEl);
