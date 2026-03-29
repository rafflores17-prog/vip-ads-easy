const generateBtn = document.getElementById('generateBtn');
const realLinkInput = document.getElementById('realLink');
const historyDiv = document.getElementById('history');

generateBtn.addEventListener('click', async () => {
    const url = realLinkInput.value.trim();
    if(!url) return alert('Cole um link válido!');
    
    // cria ID curto aleatório
    const id = Math.random().toString(36).substr(2,6).toUpperCase();

    // envia para API do site principal
    try {
        const res = await fetch('/site/api/links', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ id, url })
        });
        const data = await res.json();
        if(data.success){
            historyDiv.innerHTML += `<div>${id} → <a href="${url}" target="_blank">${url}</a></div>`;
            realLinkInput.value = '';
        }
    } catch(err) {
        alert('Erro ao gerar link');
        console.error(err);
    }
});
