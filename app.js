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


const shareButtons = document.querySelectorAll('.share-button1');

// Agrega el evento de clic a cada botón
shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aquí puedes definir la acción que deseas realizar al hacer clic
        modalBackdrop.style.display = 'flex';
        // También puedes ejecutar cualquier otra función o lógica aquí
    });
});