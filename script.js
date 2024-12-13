document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.gemini-input input');
    const micButton = document.querySelector('.mic-button');
    const newChatButton = document.querySelector('.new-chat-button');
    const chatHistory = document.querySelector('.chat-history');

    // Adiciona foco ao input quando a página carrega
    input.focus();

    // Manipula o envio do input
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            // Aqui você pode adicionar a lógica para processar a entrada
            console.log('Input enviado:', input.value);
            input.value = '';
        }
    });

    // Efeito de hover nos itens do histórico
    chatHistory.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            console.log('Chat selecionado:', this.textContent);
        });
    });

    // Nova conversa
    newChatButton.addEventListener('click', function() {
        console.log('Iniciando nova conversa');
        input.focus();
    });

    // Botão de microfone (você pode adicionar a lógica de reconhecimento de voz aqui)
    micButton.addEventListener('click', function() {
        console.log('Microfone clicado');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('aiForm');
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    // Adiciona classe de foco aos form-groups
    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        
        input.addEventListener('focus', () => {
            formGroup.style.borderColor = 'var(--accent-blue)';
        });

        input.addEventListener('blur', () => {
            formGroup.style.borderColor = 'var(--border-color)';
        });
    });

    // Manipula o envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        let isValid = true;
        let firstInvalid = null;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.closest('.form-group').classList.add('error');
                if (!firstInvalid) firstInvalid = input;
            } else {
                input.closest('.form-group').classList.remove('error');
            }
        });
        
        if (!isValid) {
            firstInvalid.focus();
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Coleta os dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Aqui você pode adicionar o código para enviar os dados para um servidor
        console.log('Dados do formulário:', data);
        alert('Formulário enviado com sucesso!');
        
        // Limpa o formulário
        form.reset();
    });
});
