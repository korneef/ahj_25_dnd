import Card from '../classCard';
import recordCardOnLocalStorage from '../recordOnLocalstorage';
import getCardCardsPosition from '../getCardCardsPosition';
import getCardColumnPosition from '../getCardColumnPosition';

export default function createNewCard(element) {
  const text = element.currentTarget.closest('.tasks-column').querySelector('.tasks-column__new-task-card-text-element').value;
  if (text === '') {
    return;
  }

  const imageContainer = element.currentTarget.closest('.tasks-column').querySelector('.tasks-column__new-task-image-container');
  let imageUrl = null;
  let imageHeight = null;
  if (imageContainer) {
    imageUrl = imageContainer.style.backgroundImage;
    imageHeight = imageContainer.style.height;
  }
  const newTaksCardObject = new Card(text, imageUrl, imageHeight);
  const newTaskCardContainer = newTaksCardObject.createTaskContainer();
  const taskColumn = element.currentTarget.closest('.tasks-column').querySelector('.tasks-column__column-tasks');

  taskColumn.insertAdjacentElement('beforeend', newTaskCardContainer);
  newTaksCardObject.columnNumber = getCardColumnPosition(newTaskCardContainer);
  // eslint-disable-next-line max-len
  newTaksCardObject.cardNumber = getCardCardsPosition(newTaskCardContainer, newTaksCardObject.columnNumber);

  const canselButton = element.currentTarget.closest('.tasks-column__new-task-form').querySelector('.tasks-column__new-task-cancel-button');
  canselButton.click();
  recordCardOnLocalStorage(newTaksCardObject);
}
