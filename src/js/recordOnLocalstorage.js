export default function recordCardOnLocalStorage(card) {
  let cardArray;
  const key = 'cardArray';
  if (localStorage.getItem(key)) {
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
    cardArray.push(card);
  } else {
    cardArray = [];
    cardArray.push(card);
  }
  localStorage.setItem(key, JSON.stringify(cardArray));
}
