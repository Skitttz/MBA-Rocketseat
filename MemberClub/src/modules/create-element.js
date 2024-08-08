export function createItemHistory(date, hour, parentElement) {
  const listItem = document.createElement('li');
  listItem.classList.add('history-item', 'flex', 'content-between');

  const divFlexCol = document.createElement('div');
  divFlexCol.classList.add('flex', 'flex-col');

  const pDate = document.createElement('p');
  pDate.classList.add('date-cut', 'bold');
  pDate.textContent = date;

  const spanHour = document.createElement('span');
  spanHour.classList.add('hour-cut');
  spanHour.textContent = hour;

  divFlexCol.appendChild(pDate);
  divFlexCol.appendChild(spanHour);

  const img = document.createElement('img');
  img.src = './src/assets/pinCheckSidebar.svg';
  img.alt = '';

  listItem.appendChild(divFlexCol);
  listItem.appendChild(img);

  parentElement.appendChild(listItem);
}

export function putPinCheckCard(parentElement, numberCuts) {
  const giftProgress = document.querySelector('.bg-gift-illustrator');
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
      const pinUnchecked = document.createElement('img');
      pinUnchecked.setAttribute('src', imgSrc.unchecked);
      lastCardItem.appendChild(pinUnchecked);
    }
  }
  for (let index = 0; index < numberCuts; index++) {
    const element = cardArray[index];
    if (element) {
      const imgPinCheck = document.createElement('img');
      imgPinCheck.setAttribute('src', imgSrc.checked);
      if (index === 9) {
        cardArray[index].innerHTML = '';
        imgPinCheck.setAttribute('src', imgSrc.reward);
        imgPinCheck.classList.add('bg-reward');
        giftProgress.classList.add('bg-reward');
      } else if (
        numberCuts > 10 &&
        cardArray[index].classList.contains('bg-reward')
      ) {
        cardArray[index].classList.remove('bg-reward');
      }

      element.appendChild(imgPinCheck);
    }
  }
}
