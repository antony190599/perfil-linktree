const openModalButton = document.getElementById('open-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', () => {
    modalBackdrop.style.display = 'flex';
});

modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
        modalBackdrop.style.display = 'none';
    }
});

function closeModal() {
    modalBackdrop.style.display = 'none';
}

// Evento para el botón de cerrar
closeModalButton.addEventListener('click', closeModal);


