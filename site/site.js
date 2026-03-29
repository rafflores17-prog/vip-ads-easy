const params = new URLSearchParams(window.location.search);
let d = params.get('d') || sessionStorage.getItem('link_vip');

if (d) {
    sessionStorage.setItem('link_vip', d);
} else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:50px;'>Link Inválido</h2>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const statusTxt = document.getElementById("status-txt");

// PRIMEIRA ETAPA
btn.onclick = function() {
    // Abre o seu anúncio em nova aba
    window.open("https://omg10.com/4/9975998", "_blank");
    
    this.disabled = true;
    this.innerText = "AGUARDE...";
    fill.style.width = "50%";
    statusTxt.innerText = "Validando Etapa 1...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this);
        this.innerText = "CONTINUAR";
        this.disabled = false;
        this.onclick = etapaFinal;
    }, 2500);
};

// ETAPA FINAL
function etapaFinal() {
    // Abre o segundo anúncio
    window.open("https://encouragingjawsordinarily.com/fxgzhb5e?key=3823c25827101f6ca9e1188db300506f", "_blank");
    
    this.disabled = true;
    fill.style.width = "100%";
    statusTxt.innerText = "Acesso Liberado!";

    setTimeout(() => {
        document.getElementById("pos-3").appendChild(this);
        this.innerText = "ACESSAR AGORA";
        this.style.background = "#22c55e"; // Cor Verde
        this.disabled = false;
        
        this.onclick = () => {
            const finalLink = atob(sessionStorage.getItem('link_vip'));
            window.location.replace(finalLink);
        };
    }, 2000);
}
