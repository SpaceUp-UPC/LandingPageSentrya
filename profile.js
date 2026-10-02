document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');
    const contactForm = document.getElementById('contact-form');

    function setMenu(open) {
        navList.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-times', open);
        icon.classList.toggle('fa-bars', !open);
    }

    // Menú de hamburguesa
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            setMenu(!navList.classList.contains('active'));
        });

        // Cerrar menú al hacer clic en un enlace (móvil)
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => setMenu(false));
        });
    }

    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias! El equipo de SpaceUp se pondrá en contacto contigo pronto.');
            contactForm.reset();
        });
    }
});
