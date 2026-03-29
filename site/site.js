// Recupera o link encriptado da URL
const urlParams = new URLSearchParams(window.location.search);
let encryptedUrl = urlParams.get('d') || sessionStorage.getItem('cached_d');

if (encryptedUrl) {
    sessionStorage.setItem('cached_d', encryptedUrl);
    // Limpa a URL para o usuário não ver o código base64
    window.history.replaceState({}, document.title, window.location.pathname);
} else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;padding:50px;'>ERRO: Link Inválido ou Expirado.</h2>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const statusTxt = document.getElementById("status-txt");

// ANTI-ADBLOCK AGRESSIVO
window.onload = () => {
    let checkAds = setInterval(() => {
        const adContainer = document.getElementById("container-694579ced308045c2c6c156cc2dceaba");
        if(adContainer && adContainer.innerHTML.length > 20) {
            clearInterval(checkAds);
            btn.disabled = false;
            btn.innerText = "INICIAR VERIFICAÇÃO";
            document.getElementById("ab-alert").style.display = "none";
        }
    }, 1000);
};

btn.onclick = function() {
    window.open("https://omg10.com/4/9975998", "_blank"); // Monetag
    this.disabled = true;
    fill.style.width = "40%";
    statusTxt.innerText = "Validando Etapa 1...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this);
        this.innerText = "PROSSEGUIR PARA ETAPA 2";
        this.disabled = false;
        window.scrollTo({ top: document.querySelector('.card').offsetTop - 20, behavior: 'smooth' });
        this.onclick = etapa2;
    }, 3000);
};

function etapa2() {
    window.open("https://encouragingjawsordinarily.com/fxgzhb5e?key=3823c25827101f6ca9e1188db300506f", "_blank"); // AdsTerra
    this.disabled = true;
    fill.style.width = "100%";
    statusTxt.innerText = "Acesso Liberado!";

    setTimeout(() => {
        document.getElementById("pos-3").appendChild(this);
        this.innerText = "ACESSAR CONTEÚDO AGORA";
        this.style.background = "#22c55e";
        this.disabled = false;
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        this.onclick = () => {
            const finalLink = atob(sessionStorage.getItem('cached_d'));
            window.location.replace(finalLink);
        };
    }, 2000);
}
