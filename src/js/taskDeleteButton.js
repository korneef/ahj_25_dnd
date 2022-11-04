export default function taskDeleted(element) {
  const cardToBeDeleted = element.currentTarget.closest('.tasks-column__task-container');
  cardToBeDeleted.remove();
}
