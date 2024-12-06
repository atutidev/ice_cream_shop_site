const modalContainer = document.getElementById('modal-container');
const openModalBtn = document.getElementById('open-modal-btn'); // Assuming you have a button to open the modal
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
  searchInput.focus();
});

