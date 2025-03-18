// Seleciona o botão do menu hambúrguer e o body
const menuToggle = document.querySelector('.navbar__menu-toggle');
const body = document.body;

// Adiciona evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isOpen);
    body.classList.toggle('menu-open');
});

// Fecha o menu ao clicar em um link
const menuLinks = document.querySelectorAll('.navbar__link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    });
});

// Função para enviar mensagem pelo WhatsApp
function sendMessage(event) {
    event.preventDefault();
    const button = document.querySelector('.contact-me__form-button');
    button.textContent = 'Enviando...';
    button.disabled = true;

    // Sanitiza os campos para evitar injeção
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    // Valida se os campos estão preenchidos
    if (!name || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Abre o WhatsApp com a mensagem formatada
    const number = '553399305251';
    const text = `Olá! Me chamo ${name}, ${message}`;
    const msgFormated = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${msgFormated}`;
    window.open(url, '_blank', 'noopener');

    // Feedback visual para o usuário
    button.textContent = 'Mensagem enviada!';
    setTimeout(() => {
        button.textContent = 'Enviar mensagem';
        button.disabled = false;
    }, 2000);
}

// Fecha o menu ao pressionar ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('menu-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    }
});