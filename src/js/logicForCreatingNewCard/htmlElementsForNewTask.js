import cleaningTaskCreator from './cleaningTaskCreator';
import createNewCard from './createNewCard';

export default function htmlElementsForNewTask() {
  const htmlElements = {};
  htmlElements.newTaskForm = document.createElement('form');
  htmlElements.newTaskForm.name = 'new_task';
  htmlElements.newTaskForm.className = 'tasks-column__new-task-form';

  const newTaskInput = document.createElement('textarea');
  newTaskInput.className = 'tasks-column__new-task-card-text-element';

  htmlElements.newTaskCard = document.createElement('div');
  htmlElements.newTaskCard.className = 'tasks-column__new-task-card';
  htmlElements.newTaskCard.insertAdjacentElement('beforeend', newTaskInput);

  const newTaskCreateButton = document.createElement('button');
  newTaskCreateButton.type = 'button';
  newTaskCreateButton.textContent = 'Добавить карточку';
  newTaskCreateButton.className = 'tasks-column__new-task-button';

  newTaskCreateButton.addEventListener('click', (evt) => {
    createNewCard(evt);
  });

  const newTaskCreateImageGroup = document.createElement('div');
  newTaskCreateImageGroup.className = 'tasks-column__new-task-image-group';

  htmlElements.newTaskCreateImageInput = document.createElement('input');
  htmlElements.newTaskCreateImageInput.className = 'tasks-column__new-task-image-input';
  htmlElements.newTaskCreateImageInput.type = 'file';
  htmlElements.newTaskCreateImageInput.accept = 'image/jpeg, image/jpg, image/png';

  const newTaskCreateImageButton = document.createElement('button');
  newTaskCreateImageButton.type = 'button';
  newTaskCreateImageButton.className = 'tasks-column__new-task-image-button';

  const newTaskCreateCanselButton = document.createElement('button');
  newTaskCreateCanselButton.className = ('tasks-column__new-task-cancel-button');
  newTaskCreateCanselButton.type = 'button';
  newTaskCreateCanselButton.textContent = 'Отмена';

  newTaskCreateCanselButton.addEventListener('click', (element) => {
    cleaningTaskCreator(element);
  });

  newTaskCreateImageGroup.insertAdjacentElement('beforeend', htmlElements.newTaskCreateImageInput);
  newTaskCreateImageGroup.insertAdjacentElement('beforeend', newTaskCreateImageButton);

  htmlElements.newTaskForm.insertAdjacentElement('beforeend', newTaskCreateButton);
  htmlElements.newTaskForm.insertAdjacentElement('beforeend', newTaskCreateImageGroup);
  htmlElements.newTaskForm.insertAdjacentElement('beforeend', newTaskCreateCanselButton);

  return htmlElements;
}
