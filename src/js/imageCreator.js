export default function imageCreator(evt) {
  const imageFile = evt.currentTarget.files[0];
  const url = URL.createObjectURL(imageFile);
  const newTaskImage = new Image();
  newTaskImage.src = url;
  newTaskImage.className = 'tasks-column__new-task-card';
  newTaskImage.addEventListener('load', () => {
    const { naturalHeight } = newTaskImage;
    const { naturalWidth } = newTaskImage;
    const newTaskImageContainer = document.createElement('div');
    newTaskImageContainer.className = 'tasks-column__new-task-image-container';
    newTaskImageContainer.style.backgroundImage = `url(${newTaskImage.src})`;

    const imgageAspectRatio = naturalWidth / naturalHeight;
    if (imgageAspectRatio >= 1) {
      newTaskImageContainer.style.backgroundSize = 'cover';
      newTaskImageContainer.style.height = `${370 / imgageAspectRatio}px`;
    } else if (naturalHeight > 300) {
      newTaskImageContainer.style.backgroundSize = 'contain';
      newTaskImageContainer.style.height = '300px';
    } else {
      newTaskImageContainer.style.backgroundSize = 'contain';
      newTaskImageContainer.style.height = `${naturalHeight}px`;
    }
    const newTaskCard = document.querySelector('.tasks-column__new-task-card');
    newTaskCard.querySelector('.tasks-column__new-task-card-text-element').style.borderRadius = '0 0 5px 5px';
    newTaskCard.insertAdjacentElement('afterbegin', newTaskImageContainer);
  });
}
