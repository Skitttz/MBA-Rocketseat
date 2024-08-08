import { clientByID } from '../../services/client-fetch.js';
import { formatInputValue } from '../../utils/formatInput.js';
import { showStatsUser } from '../clients/show.js';
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

    await showStatsUser(
      id,
      name,
      avatar,
      clientSince,
      appointmentHistory,
      loyaltyCard,
    );
  } catch (error) {
    console.error('Erro ao buscar ou processar dados do usuário:', error);
    showModal(event, 'invalidID');
  }
});
