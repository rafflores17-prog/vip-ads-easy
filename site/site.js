// Pega o link encriptado da URL gerada pelo painel
const params = new URLSearchParams(window.location.search);
let d = params.get('d') || sessionStorage.getItem('link_vip');

if (d) {
    sessionStorage.setItem('link_vip', d);
    // Limpa a URL para o usuário não ver o código feio
    window.history.replaceState({}, document.title, window.location.pathname);
} else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;padding-top:100px;'>ERRO: Link Expirado ou Inválido.</h2>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const statusTxt = document.getElementById("status-txt");

// ANTI-ADBLOCK: Só libera o botão quando o anúncio carregar
window.onload = () => {
    let checkAds = setInterval(() => {
        const ad = document.getElementById("container-694579ced308045c2c6c156cc2dceaba");
        if(ad && ad.innerHTML.length > 20) {
            clearInterval(checkAds);
            btn.disabled = false;
            btn.innerText = "INICIAR VERIFICAÇÃO";
            document.getElementById("ab-alert").style.display = "none";
        }
    }, 1000);
};

// PRIMEIRA ETAPA
btn.onclick = function() {
    window.open("https://omg10.com/4/9975998", "_blank"); // Abre Monetag
    this.disabled = true;
    fill.style.width = "50%";
    statusTxt.innerText = "Validando Etapa 1/2...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this); // Botão pula pro meio
        this.innerText = "CONTINUAR ACESSO";
        this.disabled = false;
        window.scrollTo({ top: document.querySelector('.card').offsetTop - 20, behavior: 'smooth' });
        this.onclick = etapaFinal;
    }, 3000);
};

// ETAPA FINAL
function etapaFinal() {
    window.open("https://encouragingjawsordinarily.com/fxgzhb5e?key=3823c25827101f6ca9e1188db300506f", "_blank"); // Abre AdsTerra
    this.disabled = true;
    fill.style.width = "100%";
    statusTxt.innerText = "Segurança Confirmada!";

    setTimeout(() => {
        document.getElementById("pos-3").appendChild(this); // Botão pula pro fim
        this.innerText = "ACESSAR AGORA";
        this.style.background = "#22c55e"; // Fica verde
        this.style.boxShadow = "0 5px 0 #16a34a";
        this.disabled = false;
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        
        this.onclick = () => {
            const finalLink = atob(sessionStorage.getItem('link_vip')); // Descriptografa
            window.location.replace(finalLink);
        };
    }, 2000);
}
