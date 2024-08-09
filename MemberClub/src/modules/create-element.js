import { fadeImageSrc } from './transition/fade.js';

export function createItemHistory(date, hour, parentElement) {
  const historyItem = document.createElement('li');
  historyItem.classList.add('history-item', 'flex', 'content-between');

  const historyListContainer = document.createElement('div');
  historyListContainer.classList.add('flex', 'flex-col');

  const pDate = document.createElement('p');
  pDate.classList.add('date-cut', 'bold');
  pDate.textContent = date;

  const spanHour = document.createElement('span');
  spanHour.classList.add('hour-cut');
  spanHour.textContent = hour;

  historyListContainer.appendChild(pDate);
  historyListContainer.appendChild(spanHour);

  const img = document.createElement('img');
  img.src = './src/assets/pinCheckSidebar.svg';
  img.alt = 'Icon Pin Check';

  historyItem.appendChild(historyListContainer);
  historyItem.appendChild(img);

  parentElement.appendChild(historyItem);
}

function createPinImage(src) {
  const img = document.createElement('img');
  img.classList.add('animation-source');
  fadeImageSrc(img, src);
  return img;
}

export function putPinCheckCard(parentElement, numberCuts) {
  const giftProgress = document.querySelector('.bg-gift-illustrator');
  const classReward = 'bg-reward';
  const imgSrc = {
    checked: './src/assets/pinCheck.svg',
    reward: './src/assets/pinGiftBottom.svg',
    unchecked: './src/assets/pinGiftGray.svg',
  };
  const cardArray =
    parentElement instanceof NodeList
      ? Array.from(parentElement)
      : [parentElement];

  if (cardArray.length > 9) {
    const lastCardItem = cardArray[cardArray.length - 1];
    const existingImage = lastCardItem.querySelector('img');

    if (!existingImage) {
      lastCardItem.appendChild(createPinImage(imgSrc.unchecked));
    }
    [lastCardItem, giftProgress].forEach((element) =>
      element.classList.remove(classReward),
    );
  }
  for (let index = 0; index < numberCuts; index++) {
    const element = cardArray[index];
    if (element) {
      const imgPinCheck = createPinImage(imgSrc.checked);
      if (index === 9) {
        cardArray[index].innerHTML = '';
        fadeImageSrc(imgPinCheck, imgSrc.reward);
        cardArray[index].classList.add(classReward);
        giftProgress.classList.add(classReward);
      }
      element.appendChild(imgPinCheck);
    }
  }
}
