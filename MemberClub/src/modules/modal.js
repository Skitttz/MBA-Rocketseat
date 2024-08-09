const modal = document.querySelector('.modal');
const modalView = document.querySelector('.modal-content');
const messageModal = document.querySelector('.message-modal');
const statusMessageModal = document.querySelector('.message-status-modal');
const username = document.querySelector('.user-name');
const btnClose = document.querySelector('.btn-close-modal');

const activeClass = 'ativo';
const ObjectMessage = {
  reward: {
    title: '🎉🎉🎉',
    message: 'Parabéns! Seu próximo corte é gratuito!',
  },
  invalidValue: {
    title: 'Campo Invalido',
    message: 'O ID deve conter 12 dígitos.',
  },
  invalidID: {
    title: 'Usuário não encontrado',
    message: 'Verifique se o ID foi digitado corretamente e tente novamente.',
  },
  sameSearch: {
    title: 'Usuário Repetido',
    message:
      'Ops! Você inseriu um ID que já foi pesquisado anteriormente. Tente um ID diferente.',
  },
};

export function showModal(event, status) {
  event.preventDefault();
  generateMessage(status);
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });
  if (modal) {
    modal.classList.add(activeClass);
    modalView.addEventListener('click', handleClickOutside);
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove(activeClass);
    modalView.removeEventListener('click', handleClickOutside);
  }
}

function handleClickOutside(event) {
  if (event.target === modalView) {
    closeModal();
  }
}

function generateMessage(status) {
  switch (status) {
    case 'sucess':
      statusMessageModal.textContent = ObjectMessage.reward.title;
      messageModal.textContent = ObjectMessage.reward.message;
      break;
    case 'invalidIDLength':
      statusMessageModal.textContent = ObjectMessage.invalidValue.title;
      messageModal.textContent = ObjectMessage.invalidValue.message;
      break;
    case 'invalidID':
      statusMessageModal.textContent = ObjectMessage.invalidID.title;
      messageModal.textContent = ObjectMessage.invalidID.message;
      break;
    case 'sameID':
      statusMessageModal.textContent = ObjectMessage.sameSearch.title;
      messageModal.textContent = ObjectMessage.sameSearch.message;
      break;
    default:
      break;
  }
}
