import { clientByID } from '../../services/client-fetch.js';
import { formatInputValue } from '../../utils/formatInput.js';
import { showConfette, showStatsUser } from '../client/show.js';
import { userID } from '../constants/client-dom.js';
import { showModal } from '../modal.js';

const inputSearchId = document.querySelector('.field-id');
const form = document.querySelector('.input-container');
const userHistory = document.querySelector('.history-list');
const limitInput = {
  maxNumbers: 12,
  groupNumeric: 3,
};

inputSearchId.addEventListener('input', (event) => {
  event.target.value = formatInputValue(
    event.target.value,
    limitInput.maxNumbers,
    limitInput.groupNumeric,
    '-',
  );
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const idUser = inputSearchId.value;
  if (idUser.length !== limitInput.maxNumbers + limitInput.groupNumeric) {
    showModal(event, 'invalidIDLength');
    return;
  }
  try {
    inputSearchId.value = '';
    const dataUser = await clientByID(idUser);
    if (!dataUser) {
      showModal(event, 'invalidID');
      return;
    }

    const { id, name, clientSince, appointmentHistory, loyaltyCard, avatar } =
      dataUser;
    if (id === userID.innerText) {
      console.log(id);
      console.log(userID.innerText);
      showModal(event, 'sameID');
      return;
    }
    await showStatsUser(
      id,
      name,
      avatar,
      clientSince,
      appointmentHistory,
      loyaltyCard,
    );
    if (loyaltyCard.totalCuts === 10) {
      showModal(event, 'sucess');
      showConfette();
    }
  } catch (error) {
    console.error('Erro ao buscar ou processar dados do usuário:', error);
    showModal(event, 'invalidID');
  }
});
