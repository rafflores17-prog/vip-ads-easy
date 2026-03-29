const btn = document.getElementById('mainBtn');

// pega ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('d') || urlParams.get('id');

if(!id) {
    btn.innerText = "Link Inválido";
} else {
    fetch(`/api/links?id=${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.url){
                btn.disabled = false;
                btn.innerText = "Clique para acessar";
                btn.onclick = () => window.location.href = data.url;
            } else {
                btn.innerText = "Link não encontrado";
            }
        })
        .catch(err => {
            btn.innerText = "Erro ao carregar";
            console.error(err);
        });
}
