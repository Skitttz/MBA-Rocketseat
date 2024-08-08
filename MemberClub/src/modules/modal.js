const modal = document.querySelector('.modal');
const modalView = document.querySelector('.modal-content');
const messageModal = document.querySelector('.message-modal');
const username = document.querySelector('.user-name');
const btnClose = document.querySelector('.btn-close-modal');

const activeClass = 'ativo';
const message = {
  reward: `Parabéns! Seu próximo corte é gratuito!`,
  invalidValue: 'Por favor, insira um ID com 12 dígitos',
  invalidID: 'Não foi encontrado o ID do usuário',
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
      messageModal.textContent = message.reward;
      break;
    case 'invalidIDLength':
      messageModal.textContent = message.invalidValue;
      break;
    case 'invalidID':
      messageModal.textContent = message.invalidID;
      break;
    default:
      break;
  }
}
