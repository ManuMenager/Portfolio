const botonesAbrir = document.querySelectorAll('.js-abrir-modal');
botonesAbrir.forEach(boton => {
    boton.addEventListener('click', () => {
        const modalId = boton.dataset.target;
        const modal = document.querySelector(modalId);
        
        if (modal) {
            modal.showModal();
            document.body.style.overflow = 'hidden'; 
        }
    });
});

const todosLosModales = document.querySelectorAll('dialog');
todosLosModales.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
            document.body.style.overflow = 'auto'; 
        }
    });
});