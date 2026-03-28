const btn = document.getElementById("btn");
const countEl = document.getElementById("count");
const bar = document.getElementById("bar");
const status = document.getElementById("status");

// pegar destino
const params = new URLSearchParams(window.location.search);
let target = params.get("d");

if (!target) {
    document.body.innerHTML = "Link inválido";
    throw new Error("Sem destino");
}

// decode
function getFinal(){
    try {
        return atob(target);
    } catch {
        return target;
    }
}

// contador
let time = 4;

let interval = setInterval(() => {
    time--;
    countEl.innerText = time;
    bar.style.width = (100 - time * 20) + "%";

    if (time <= 0) {
        clearInterval(interval);
        btn.disabled = false;
        btn.classList.add("active");
        btn.innerText = "Continuar";
        status.innerText = "Pronto para prosseguir";
    }
}, 1000);

// clique
btn.onclick = () => {

    // 👉 COLOCA SEU LINK DE MONETIZAÇÃO AQUI
    window.open("https://SEU-LINK-AQUI.com", "_blank");

    btn.disabled = true;
    btn.innerText = "Redirecionando...";

    setTimeout(() => {
        window.location.href = getFinal();
    }, 2500);
};
