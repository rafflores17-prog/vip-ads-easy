function gerarLink() {
    const urlOriginal = document.getElementById('urlInput').value;
    if(!urlOriginal) return alert("Insira um link!");
    
    // ==========================================
    // CAMADA 1: O Link Original (Telegram/Arquivo)
    // ==========================================
    const encodedDestino = btoa(urlOriginal); 
    
    // ==========================================
    // CAMADA 2: Passador VIP (Acervo /site/index.html)
    // ==========================================
    const urlVip = window.location.origin + "/site/index.html";
    const linkPassadorVip = `${urlVip}?d=${encodedDestino}`;
    
    // ==========================================
    // CAMADA 3: Passador Safe (StartStatic)
    // ==========================================
    // IMPORTANTE: Coloquei "/safe/index.html" como exemplo. 
    // Você precisa alterar para a pasta/URL correta onde salvou o HTML do "passador safe".
    const encodedVip = btoa(linkPassadorVip);
    const urlSafe = window.location.origin + "/safe/index.html"; // <-- MUDE O CAMINHO AQUI SE NECESSÁRIO
    const linkPassadorSafe = `${urlSafe}?d=${encodedVip}`;

    // ==========================================
    // CAMADA 4: Terceiro Passador (Vercel)
    // ==========================================
    // Adicionamos a Vercel como a porta de entrada.
    // Usamos encodeURIComponent para não quebrar a URL.
    const urlVercel = "https://startstatic-down.vercel.app/?url="; // Se a Vercel usar "?d=" em vez de "?url=", mude aqui!
    const finalLink = urlVercel + encodeURIComponent(linkPassadorSafe);

    // Exibe o resultado na tela
    document.getElementById('resultBox').style.display = "block";
    document.getElementById('outputLink').value = finalLink;
}

function copiar() {
    const copyText = document.getElementById("outputLink");
    copyText.select();
    document.execCommand("copy");
    alert("Copiado com sucesso!");
}
