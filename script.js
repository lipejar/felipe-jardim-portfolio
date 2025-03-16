// Função para toggle do menu
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isOpen);
    body.classList.toggle('menu-open');
});

// Fecha o menu ao clicar em um link
const menuLinks = document.querySelectorAll('.link-menu');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    });
});

function sendMessage(event) {
    event.preventDefault();
    const button = document.querySelector('.form-button');
    button.textContent = 'Enviando...';
    button.disabled = true;

    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    if (!name || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const number = '553399305251';
    const text = `Olá! Me chamo ${name}, ${message}`;
    const msgFormated = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${msgFormated}`;
    window.open(url, '_blank', 'noopener');

    button.textContent = 'Mensagem enviada!';
    setTimeout(() => {
        button.textContent = 'Enviar mensagem';
        button.disabled = false;
    }, 2000);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('menu-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    }
});