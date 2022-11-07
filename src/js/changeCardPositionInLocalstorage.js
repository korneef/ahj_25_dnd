import getCardColumnPosition from './getCardColumnPosition';
import getCardCardsPosition from './getCardCardsPosition';

export default function changeCardPosition(card) {
  const cardCreateDate = Number(card.dataset.createDate);
  const key = 'cardArray';
  const cardArray = JSON.parse(localStorage.getItem(key));
  const elNum = cardArray.findIndex((item) => {
    if (item.createDate === cardCreateDate) {
      return true;
    }
    return false;
  });

  const columnPosition = getCardColumnPosition(card);
  const cardPosition = getCardCardsPosition(card, columnPosition);

  if (cardArray[elNum].columnNumber !== columnPosition) {
    for (let i = 0; i < cardArray.length; i += 1) {
      if (cardArray[i].columnNumber === columnPosition) {
        if (cardArray[i].cardNumber >= cardPosition) {
          cardArray[i].cardNumber += 1;
        }
      }
    }
    cardArray[elNum].cardNumber = cardPosition;
    cardArray[elNum].columnNumber = columnPosition;
  }

  if (cardArray[elNum].columnNumber === columnPosition) {
    if (cardArray[elNum].cardNumber < cardPosition) {
      for (let i = 0; i < cardArray.length; i += 1) {
        const arrEl = cardArray[i];
        if (arrEl.columnNumber === columnPosition) {
          if (arrEl.cardNumber <= cardPosition && arrEl.cardNumber > cardArray[elNum].cardNumber) {
            cardArray[i].cardNumber -= 1;
          }
        }
      }
    }
    if (cardArray[elNum].cardNumber > cardPosition) {
      for (let i = 0; i < cardArray.length; i += 1) {
        const arrEl = cardArray[i];
        if (arrEl.columnNumber === columnPosition) {
          if (arrEl.cardNumber >= cardPosition && arrEl.cardNumber < cardArray[elNum].cardNumber) {
            cardArray[i].cardNumber += 1;
          }
        }
      }
    }
    cardArray[elNum].cardNumber = cardPosition;
  }

  const sortArray = [];

  for (let i = 0; i < 3; i += 1) {
    sortArray[i] = [];
    cardArray.forEach((element) => {
      if (element.columnNumber === i) {
        sortArray[i].push(element);
      }
    });
    sortArray[i].sort((a, b) => a.cardNumber - b.cardNumber);
    for (let n = 0; n < sortArray[i].length; n += 1) {
      sortArray[i][n].cardNumber = n;
    }
  }

  const arraySorted = sortArray[0].concat(sortArray[1], sortArray[2]);

  localStorage.setItem(key, JSON.stringify(arraySorted));
}
