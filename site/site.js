// site.js
const params = new URLSearchParams(window.location.search);
let d = params.get("d") || sessionStorage.getItem("link_vip");

if (d) {
    sessionStorage.setItem("link_vip", d);
    // Limpa a URL para ficar bonita
    window.history.replaceState({}, document.title, window.location.pathname);
} else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:50px'>Link Expirado. Gere um novo no painel.</h2>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const status = document.getElementById("scan-status");

// ANTI-ADBLOCK
window.onload = () => {
    let timer = 0;
    const check = setInterval(() => {
        timer++;
        const adLoaded = document.getElementById("container-694579ced308045c2c6c156cc2dceaba").innerHTML.length > 20;
        if(adLoaded || timer > 5) {
            clearInterval(check);
            btn.disabled = false;
            btn.innerText = "INICIAR ACESSO";
            document.getElementById("ab-alert").style.display = "none";
        }
    }, 1000);
};

btn.onclick = function() {
    window.open("https://omg10.com/4/9975998", "_blank"); // Monetag
    this.disabled = true;
    fill.style.width = "50%";
    status.innerText = "Validando Etapa 1...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this);
        this.innerText = "CONTINUAR PARA ETAPA 2";
        this.disabled = false;
        window.scrollTo({ top: document.getElementById("main-card").offsetTop - 20, behavior: 'smooth' });
        this.onclick = etapa2;
    }, 3000);
};

function etapa2() {
    window.open("https://encouragingjawsordinarily.com/fxgzhb5e?key=3823c25827101f6ca9e1188db300506f", "_blank"); // AdsTerra
    this.disabled = true;
    fill.style.width = "100%";
    status.innerText = "Segurança Confirmada!";

    setTimeout(() => {
        document.getElementById("pos-3").appendChild(this);
        this.innerText = "ACESSAR AGORA";
        this.style.background = "#22c55e";
        this.disabled = false;
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        this.onclick = () => {
            const finalUrl = atob(sessionStorage.getItem("link_vip"));
            window.location.replace(finalUrl);
        };
    }, 2000);
}
