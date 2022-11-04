import { buttonsCreateNewTask } from './newTaskButtons';

export default function cleaningTaskCreator(element) {
  const footer = element.currentTarget.closest('.tasks-column__column-footer');
  const textAreaContainer = element.currentTarget.closest('.tasks-column').querySelector('.tasks-column__new-task-card');
  const taskInput = element.currentTarget.closest('.tasks-column__new-task-form');
  const newTaskCreateButton = buttonsCreateNewTask.find((item) => {
    if (item.parentElement === null) {
      return true;
    }
    return false;
  });
  taskInput.remove();
  textAreaContainer.remove();
  footer.insertAdjacentElement('beforeend', newTaskCreateButton);
}
