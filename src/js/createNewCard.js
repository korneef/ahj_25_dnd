import TaskCard from './taskCard';

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

  const newTaksCardObject = new TaskCard(text, imageUrl, imageHeight);
  const newTaskCardContainer = newTaksCardObject.createTaskContainer();
  const taskColumn = element.currentTarget.closest('.tasks-column').querySelector('.tasks-column__column-tasks');

  taskColumn.insertAdjacentElement('beforeend', newTaskCardContainer);

  const canselButton = element.currentTarget.closest('.tasks-column__new-task-form').querySelector('.tasks-column__new-task-cancel-button');
  canselButton.click();
}
