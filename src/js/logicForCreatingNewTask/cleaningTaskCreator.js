import { buttonsCreateNewTask } from './gettingAddCardButtons';

export default function removeNewCardButtons() {
  const allFormElements = Array.from(document.getElementsByClassName('tasks-column__new-task-form'));

  allFormElements.forEach(((element) => {
    const footer = element.closest('.tasks-column__column-footer');
    const textAreaContainer = element.closest('.tasks-column').querySelector('.tasks-column__new-task-card');
    const taskInput = element.closest('.tasks-column__new-task-form');
    const newTaskCreateButton = buttonsCreateNewTask.find((item) => {
      if (item.parentElement === null) {
        return true;
      }
      return false;
    });
    taskInput.remove();
    textAreaContainer.remove();
    footer.insertAdjacentElement('beforeend', newTaskCreateButton);
  }));
}
