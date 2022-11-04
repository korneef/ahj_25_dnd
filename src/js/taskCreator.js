import htmlElementsForNewTask from './htmlElementsForNewTask';
import imageCreator from './imageCreator';
import { buttonsCreateNewTask } from './newTaskButtons';

function creatingNewTask() {
  const button = this;

  const taskColumn = button.closest('.tasks-column');
  const columnFooter = button.closest('.tasks-column__column-footer');
  const tasksContainer = taskColumn.querySelector('.tasks-column__column-tasks');

  button.remove();

  const htmlElements = htmlElementsForNewTask();

  tasksContainer.insertAdjacentElement('beforeend', htmlElements.newTaskCard);
  columnFooter.insertAdjacentElement('beforeend', htmlElements.newTaskForm);

  htmlElements.newTaskCreateImageInput.addEventListener('change', (evt) => {
    imageCreator(evt);
  });
}

for (let i = 0; i < buttonsCreateNewTask.length; i += 1) {
  buttonsCreateNewTask[i].addEventListener('click', creatingNewTask);
}
