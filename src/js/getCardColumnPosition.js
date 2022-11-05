export default function getCardColumnPosition(card) {
  const cardHeader = card.closest('.tasks-column').querySelector('.tasks-column__header-text');
  const cardHeaderText = cardHeader.textContent;
  const allHeaders = Array.from(document.querySelectorAll('.tasks-column__header-text'));
  const cardColumnNumber = allHeaders.findIndex((item) => item.textContent === cardHeaderText);
  return cardColumnNumber;
}
