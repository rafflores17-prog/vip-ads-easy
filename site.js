const fill = document.getElementById("fill");
const statusText = document.getElementById("status-text");
const continueBtn = document.getElementById("continue-btn");

// Pegar ID curto da URL (/lk/ID)
const pathParts = window.location.pathname.split("/");
const shortID = pathParts[pathParts.length - 1];

// Buscar links do JSON do site principal
fetch("/links.json")
    .then(res => res.json())
    .then(linksMap => {
        const targetURL = linksMap[shortID];
        if(!targetURL){
            document.body.innerHTML = "<h2 style='text-align:center;margin-top:100px;'>Link inválido ou expirado.</h2>";
            return;
        }

        // Contador animado
        let progress = 0;
        const timer = setInterval(() => {
            progress += 10;
            fill.style.width = progress + "%";
            statusText.innerText = `Verificando sistema... ${progress}%`;
            if(progress >= 100){
                clearInterval(timer);
                continueBtn.disabled = false;
                continueBtn.innerText = "CONTINUAR PARA DOWNLOAD";
            }
        }, 500);

        continueBtn.onclick = () => {
            window.location.href = targetURL;
        };
    })
    .catch(err => {
        document.body.innerHTML = "<h2 style='text-align:center;margin-top:100px;'>Erro ao buscar link.</h2>";
        console.error(err);
    });
