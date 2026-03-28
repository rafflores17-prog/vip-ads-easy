const btn = document.getElementById("btn");
const bar = document.getElementById("bar");
const status = document.getElementById("status");

let adDetected = false;
let step = 0;

// 🔍 PEGAR DESTINO
const params = new URLSearchParams(window.location.search);
let target = params.get("d");

if(target){
    sessionStorage.setItem("dest", target);
} else {
    document.body.innerHTML = "Link inválido";
}

// 🧠 DETECÇÃO INTELIGENTE (sem depender de ads)
setTimeout(() => {
    let test = document.createElement("div");
    test.className = "adsbox";
    document.body.appendChild(test);

    if(test.offsetHeight === 0){
        adDetected = true;
    }

    test.remove();
}, 1500);

// ⏳ PROGRESSO
let interval = setInterval(() => {
    step += 10;
    bar.style.width = step + "%";

    if(step >= 100){
        clearInterval(interval);
        liberar();
    }
}, 500);

// 🔓 LIBERAR COM CONTROLE
function liberar(){
    btn.disabled = false;

    if(adDetected){
        status.innerText = "Verificação mais lenta detectada...";
    } else {
        status.innerText = "Pronto para continuar";
    }

    btn.innerText = "CONTINUAR";
}

// 🖱️ CLICK
btn.onclick = () => {

    // 💰 fallback monetização
    window.open("SEU_LINK_ADS_AQUI", "_blank");

    let delay = adDetected ? 6000 : 2000;

    btn.disabled = true;
    btn.innerText = "Processando...";

    setTimeout(() => {
        const final = sessionStorage.getItem("dest");
        window.location.href = final;
    }, delay);
};