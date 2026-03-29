const params = new URLSearchParams(window.location.search);
const id = window.location.pathname.split('/lk/')[1];

if(id){
    fetch(`/api/links?id=${id}`)
    .then(res => res.json())
    .then(data => {
        if(data.url){
            // Ativa botão pulsante
            const btn = document.getElementById('continue-btn');
            btn.disabled = false;
            btn.classList.add('active');
            btn.innerText = 'CONTINUAR PARA DOWNLOAD';
            btn.onclick = () => window.location.href = data.url;
        } else {
            document.getElementById('status-text').innerText = 'Link inválido ou expirado';
        }
    });
}
