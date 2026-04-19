function gerarLink() {
    const urlOriginal = document.getElementById('urlInput').value;
    if(!urlOriginal) return alert("Insira um link!");
    
    // ==========================================
    // CAMADA 1: O Link Original (Telegram/Arquivo)
    // ==========================================
    const encodedDestino = btoa(urlOriginal); 
    
    // ==========================================
    // CAMADA 2: Passador VIP (Pasta /site)
    // ==========================================
    const urlVip = window.location.origin + "/site/index.html";
    const linkPassadorVip = `${urlVip}?d=${encodedDestino}`;
    
    // ==========================================
    // CAMADA 3: Passador Safe (Pasta /safe)
    // ==========================================
    const encodedVip = btoa(linkPassadorVip);
    const urlSafe = window.location.origin + "/safe/index.html"; 
    const linkPassadorSafe = `${urlSafe}?d=${encodedVip}`;

    // ==========================================
    // CAMADA 4: Terceiro Passador Externo (StartStatic)
    // ==========================================
    // ATENÇÃO: Se o código fonte desse outro site (startstatic-down) 
    // também decodificar usando "?d=", altere "?url=" para "?d=" abaixo.
    const urlVercel = "https://startstatic-down.vercel.app/?url="; 
    const finalLink = urlVercel + encodeURIComponent(linkPassadorSafe);

    // Exibe o resultado na tela do painel
    document.getElementById('resultBox').style.display = "block";
    document.getElementById('outputLink').value = finalLink;
}

function copiar() {
    const copyText = document.getElementById("outputLink");
    copyText.select();
    document.execCommand("copy");
    alert("Copiado com sucesso!");
}
