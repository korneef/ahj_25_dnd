import taskDeleted from './taskDeleteButton';

export default class Card {
  constructor(textContent, imageUrl, imageHeight) {
    this.textContent = textContent;
    this.imageUrl = imageUrl;
    this.imageHeight = imageHeight;
    this.createDate = Date.now();
  }

  createTaskContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'tasks-column__task-container';
    taskContainer.dataset.createDate = this.createDate;

    if (this.imageUrl) {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'tasks-column__task-image-container';
      imageContainer.style.backgroundImage = this.imageUrl;
      imageContainer.style.height = this.imageHeight;
      taskContainer.insertAdjacentElement('beforeend', imageContainer);
    }

    const taskTextElement = document.createElement('div');
    taskTextElement.className = 'tasks-column__task-text';
    taskTextElement.textContent = this.textContent;
    taskContainer.insertAdjacentElement('beforeend', taskTextElement);

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.className = 'tasks-column__delete-task-button';
    taskDeleteButton.textContent = 'X';
    taskDeleteButton.addEventListener('click', (evt) => {
      taskDeleted(evt);
    });
    taskContainer.insertAdjacentElement('beforeend', taskDeleteButton);

    return taskContainer;
  }
}
