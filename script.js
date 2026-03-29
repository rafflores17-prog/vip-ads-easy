const fill = document.getElementById("fill");
const statusText = document.getElementById("status-text");
const continueBtn = document.getElementById("continue-btn");

// Mapa de IDs curtos -> base64 (do painel)
const linksMap = {
    "CWFFO8": "aHR0cHM6Ly9kZXZ1cGxvYWRzLmNvbS8wMnA3ZXh3b2x4ejM=",
    // Adicione outros IDs aqui
};

// Pegar ID curto da URL
const path = window.location.pathname.split("/");
let shortID = path[path.length - 1];

// Verifica se o ID existe
if (!linksMap[shortID]) {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:100px;'>Link inválido ou expirado.</h2>";
} else {
    const targetBase64 = linksMap[shortID];
    const targetURL = atob(targetBase64);

    let progress = 0;
    const timer = setInterval(() => {
        progress += 10;
        fill.style.width = progress + "%";
        statusText.innerText = `Verificando sistema... ${progress}%`;

        if(progress >= 100) {
            clearInterval(timer);
            continueBtn.disabled = false;
            continueBtn.innerText = "CONTINUAR PARA DOWNLOAD";
        }
    }, 500);
}

continueBtn.onclick = () => {
    // Adicionar aqui o seu script de ads se quiser
    window.location.href = atob(linksMap[shortID]); // Redireciona para link real
};
