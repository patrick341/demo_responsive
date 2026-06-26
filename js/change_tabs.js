document.addEventListener('DOMContentLoaded', function() {
    // 1. Selector de Pestañas (Tabs)
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const informationSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    if (productTab && imagesTab) {
        productTab.addEventListener('click', function() {
            // Mostrar info, ocultar galería
            if (informationSection) informationSection.classList.remove('hidden');
            if (imagesSection) imagesSection.classList.add('hidden');

            // Actualizar clases de botones
            productTab.className = 'px-6 py-2 text-xs md:text-sm font-medium rounded-l-lg bg-blue-600 text-white focus:z-10 focus:outline-none';
            imagesTab.className = 'px-6 py-2 text-xs md:text-sm font-medium rounded-r-lg bg-gray-100 text-gray-700 focus:z-10 focus:outline-none';
        });

        imagesTab.addEventListener('click', function() {
            // Mostrar galería, ocultar info
            if (informationSection) informationSection.classList.add('hidden');
            if (imagesSection) imagesSection.classList.remove('hidden');

            // Actualizar clases de botones
            productTab.className = 'px-6 py-2 text-xs md:text-sm font-medium rounded-l-lg bg-gray-100 text-gray-700 focus:z-10 focus:outline-none';
            imagesTab.className = 'px-6 py-2 text-xs md:text-sm font-medium rounded-r-lg bg-blue-600 text-white focus:z-10 focus:outline-none';
        });
    }

    // 2. Cerrar Modal al hacer clic en el fondo oscuro
    const imageModal = document.getElementById('image-modal');
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal || e.target.tagName === 'SPAN') {
                closeModal();
            }
        });
    }
});

// 3. Intercambiar la imagen principal al pulsar una miniatura
function toExchangeImage(thumbnail) {
    const mainImg = document.getElementById('img_main');
    if (mainImg && thumbnail) {
        mainImg.src = thumbnail.src;
        mainImg.alt = thumbnail.alt;
    }
}

// 4. Abrir la imagen en el modal a pantalla completa
function viewImage(imgSrc) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evitar scroll
    }
}

// 5. Cerrar el modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}
