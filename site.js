const pathParts = window.location.pathname.split('/lk/');
const id = pathParts[1];

if(id){
    fetch(`/api/links?id=${id}`)
    .then(res => res.json())
    .then(data => {
        const status = document.getElementById('status-text');
        const btn = document.getElementById('continue-btn');

        if(data.url){
            status.innerText = 'Link verificado com sucesso!';
            btn.disabled = false;
            btn.classList.add('active');
            btn.innerText = 'CONTINUAR PARA DOWNLOAD';
            btn.onclick = () => window.location.href = data.url;
        } else {
            status.innerText = 'Link inválido ou expirado';
            btn.disabled = true;
        }
    })
    .catch(() => {
        document.getElementById('status-text').innerText = 'Erro na verificação';
    });
} else {
    document.getElementById('status-text').innerText = 'ID não encontrado';
}
