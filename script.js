document.addEventListener('DOMContentLoaded', function () {
    var whatsappButton = document.querySelector('.whatsapp-button');

    // Show or hide WhatsApp button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            whatsappButton.style.opacity = '1';
        } else {
            whatsappButton.style.opacity = '0.7';
        }
    });
});
