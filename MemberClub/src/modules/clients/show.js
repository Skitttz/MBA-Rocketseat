import { clearData } from '../../utils/clearData.js';
import { createItemHistory, putPinCheckCard } from '../create-element.js';

const username = document.querySelector('.user-name');
const userID = document.querySelector('.user-id span');
const userCreated = document.querySelector('.date-user-created');
const userAvatar = document.querySelector('.user-avatar');
const userHistory = document.querySelector('.history-list');
const userCardList = document.querySelectorAll('.card-item');
const numbercut = document.querySelectorAll('.number-cut');
const userCutsRemaning = document.querySelector('.user-cuts-remaining');
const progressBar = document.querySelector('.actual-progress');

export async function showStatsUser(
  id,
  name,
  avatar,
  clientSince,
  appointmentHistory,
  loyaltyCard,
) {
  const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard;
  clearData(
    username,
    userID,
    userCreated,
    userAvatar,
    userHistory,
    userCardList,
    numbercut,
    userCutsRemaning,
    progressBar,
  );
  userAvatar.setAttribute('src', avatar);
  progressBar.style.width = `${totalCuts}0%`;
  username.textContent = name;
  userID.textContent = id;
  userCreated.textContent = clientSince;
  userCutsRemaning.textContent = cutsRemaining;

  Array.from(numbercut).map((item) => {
    item.textContent = totalCuts;
  });
  appointmentHistory.map((item) => {
    createItemHistory(item.date, item.time, userHistory);
  });

  putPinCheckCard(userCardList, totalCuts);
}

export function showConfette() {
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '100';

  document.body.appendChild(confettiContainer);
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    zIndex: 100,
    appendTo: confettiContainer,
  });
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}
