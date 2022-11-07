import changeCardPosition from '../changeCardPosition';

const cardField = document.getElementsByClassName('tasks_board')[0];

let draggedEl = null;
const ghostEl = document.createElement('div');
const ghostSpace = document.createElement('div');

let shiftX = 0;
let shiftY = 0;

cardField.addEventListener('mousedown', (evt) => {
  if (evt.button !== 0) {
    return;
  }
  if (!evt.target.closest('.tasks-column__task-container') || evt.target.closest('.tasks-column__delete-task-button')) {
    return;
  }
  draggedEl = evt.target.closest('.tasks-column__task-container');
  draggedEl.insertAdjacentElement('afterend', ghostEl);
  ghostEl.style.height = `${draggedEl.clientHeight}px`;
  ghostEl.style.width = `${draggedEl.clientWidth}px`;

  draggedEl.style.width = `${draggedEl.clientWidth}px`;
  draggedEl.classList.add('task-dragged');
  draggedEl.style.top = `${draggedEl.offsetTop}px`;
  draggedEl.style.left = `${draggedEl.offsetLeft}px`;

  ghostEl.classList.add('tasks-column__task-container');
  ghostEl.classList.add('task-column__ghost-element');

  shiftX = evt.clientX - draggedEl.offsetLeft;
  shiftY = evt.clientY - draggedEl.offsetTop;
});

document.getElementsByTagName('body')[0].addEventListener('mousemove', (evt) => {
  if (draggedEl === null) {
    return;
  }
  evt.preventDefault();
  draggedEl.style.left = `${evt.clientX - shiftX}px`;
  draggedEl.style.top = `${evt.clientY - shiftY}px`;
  ghostSpace.style.height = `${draggedEl.offsetHeight}px`;
  ghostSpace.classList.add('task-column__ghost-space');

  const taskColumn = document.elementsFromPoint(evt.clientX, evt.clientY)[2].closest('.tasks-column');
  const bottomElement = document.elementsFromPoint(evt.clientX, evt.clientY)[2].closest('.tasks-column__task-container');

  const perviosEl = ghostSpace.previousSibling;
  const nextEl = ghostSpace.nextElementSibling;

  if (perviosEl === ghostEl || nextEl === draggedEl || nextEl === ghostEl) {
    ghostSpace.style.display = 'none';
  } else {
    ghostSpace.style.display = '';
  }

  if (taskColumn === null) {
    return;
  }
  if (taskColumn.querySelectorAll('.tasks-column__task-container').length === 0) {
    const columnTasks = taskColumn.querySelector('.tasks-column__column-tasks');
    columnTasks.insertAdjacentElement('beforeend', ghostSpace);
  }

  if (bottomElement === null) {
    return;
  }

  if (evt.pageY < bottomElement.offsetTop + (bottomElement.offsetHeight / 2)) {
    bottomElement.insertAdjacentElement('beforebegin', ghostSpace);
  } else {
    bottomElement.insertAdjacentElement('afterend', ghostSpace);
  }
});

document.getElementsByTagName('body')[0].addEventListener('mouseup', (evt) => {
  if (draggedEl === null) {
    return;
  }
  if (evt.target.closest('.tasks-column')) {
    ghostSpace.replaceWith(draggedEl);
  }
  draggedEl.classList.remove('task-dragged');
  draggedEl.removeAttribute('style');
  ghostSpace.remove();
  ghostEl.remove();
  changeCardPosition(draggedEl);
  draggedEl = null;
});
