export default function taskDeleted(element) {
  const cardToBeDeleted = element.currentTarget.closest('.tasks-column__task-container');
  const deletedCardTimeCreate = Number(cardToBeDeleted.dataset.createDate);
  const allCards = JSON.parse(localStorage.getItem('cardArray'));
  const deletedItemIndex = allCards.findIndex((item) => item.createDate === deletedCardTimeCreate);
  allCards.splice(deletedItemIndex, 1);
  localStorage.setItem('cardArray', JSON.stringify(allCards));
  cardToBeDeleted.remove();
}
