const params = new URLSearchParams(window.location.search);
let d = params.get('d') || sessionStorage.getItem('link_vip');

if (d) {
    sessionStorage.setItem('link_vip', d);
} else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:100px;'>Link Inválido</h2>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const statusTxt = document.getElementById("status-txt");

// Função para levar a visão do usuário até o botão
function focarNoBotao(elemento) {
    setTimeout(() => {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
}

btn.onclick = function() {
    // Direct Link Adsterra
    window.open("https://encouragingjawsordinarily.com/w3wbwkzk9?key=9f27a177c445f12758a69d7273fe6f04", "_blank");
    
    this.disabled = true;
    this.innerText = "AGUARDE...";
    fill.style.width = "50%";
    statusTxt.innerText = "Validando Etapa 1...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this);
        this.innerText = "CONTINUAR";
        this.disabled = false;
        focarNoBotao(this); // Foca no card
        this.onclick = etapaFinal;
    }, 3000);
};

function etapaFinal() {
    window.open("https://encouragingjawsordinarily.com/w3wbwkzk9?key=9f27a177c445f12758a69d7273fe6f04", "_blank");
    
    this.disabled = true;
    fill.style.width = "100%";
    statusTxt.innerText = "Acesso Liberado!";

    setTimeout(() => {
        // MOVE O BOTÃO PARA O DESTINO FINAL (FORA DO CARD)
        document.getElementById("pos-3").appendChild(this);
        this.innerText = "ACESSAR AGORA";
        this.style.background = "#22c55e"; 
        this.disabled = false;
        focarNoBotao(this); // Rola a página até o final
        
        this.onclick = () => {
            const finalLink = atob(sessionStorage.getItem('link_vip'));
            window.location.replace(finalLink);
        };
    }, 2500);
}
