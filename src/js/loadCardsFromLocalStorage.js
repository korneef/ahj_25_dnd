import Card from './classCard';

window.addEventListener('load', () => {
  if (localStorage.getItem('cardArray')) {
    const cardsArray = JSON.parse(localStorage.getItem('cardArray'));
    cardsArray.sort((a, b) => (a.cardNumber > b.cardNumber ? 1 : -1));
    const cardsColumns = document.querySelectorAll('.tasks-column__column-tasks');

    for (let i = 0; i < cardsArray.length; i += 1) {
      const { textContent, imageUrl, imageHeight } = cardsArray[i];
      const cardObject = new Card(textContent, imageUrl, imageHeight);
      cardObject.createDate = cardsArray[i].createDate;
      const cardElement = cardObject.createTaskContainer();
      cardsColumns[cardsArray[i].columnNumber].insertAdjacentElement('beforeend', cardElement);
    }
  }
});
