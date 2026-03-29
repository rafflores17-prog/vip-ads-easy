const params = new URLSearchParams(window.location.search);
let d = params.get('d') || sessionStorage.getItem('link_vip');

if (d) {
    sessionStorage.setItem('link_vip', d);
    window.history.replaceState({}, document.title, window.location.pathname);
} else {
    document.body.innerHTML = "<div style='color:white;text-align:center;padding-top:100px;'><h2>Link Inválido.</h2><p>Gere o link novamente no painel.</p></div>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const statusTxt = document.getElementById("status-txt");

window.onload = () => {
    let check = setInterval(() => {
        const ad = document.getElementById("container-694579ced308045c2c6c156cc2dceaba");
        if(ad && ad.innerHTML.length > 20) {
            clearInterval(check);
            btn.disabled = false;
            btn.innerText = "INICIAR VERIFICAÇÃO";
            document.getElementById("ab-alert").style.display = "none";
        }
    }, 1000);
};

btn.onclick = function() {
    window.open("https://omg10.com/4/9975998", "_blank");
    this.disabled = true;
    fill.style.width = "50%";
    statusTxt.innerText = "Analisando Etapa 1...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this);
        this.innerText = "CONTINUAR";
        this.disabled = false;
        this.onclick = etapa2;
    }, 3000);
};

function etapa2() {
    window.open("https://encouragingjawsordinarily.com/fxgzhb5e?key=3823c25827101f6ca9e1188db300506f", "_blank");
    this.disabled = true;
    fill.style.width = "100%";
    statusTxt.innerText = "Acesso Liberado!";

    setTimeout(() => {
        document.getElementById("pos-3").appendChild(this);
        this.innerText = "ACESSAR AGORA";
        this.style.background = "#22c55e";
        this.style.boxShadow = "0 6px 0 #16a34a";
        this.disabled = false;
        this.onclick = () => { 
            window.location.replace(atob(sessionStorage.getItem('link_vip'))); 
        };
    }, 2000);
}
