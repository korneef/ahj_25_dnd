export default function getCardCardsPosition(card, columnNuber) {
  const columnCards = document.getElementsByClassName('tasks-column__column-tasks')[columnNuber];
  const cards = Array.from(columnCards.getElementsByClassName('tasks-column__task-container'));
  const cardNumber = cards.findIndex((item) => card.dataset.createDate === item.dataset.createDate);
  return cardNumber;
}
