function gerarLink() {
    const url = document.getElementById('urlInput').value;
    if(!url) return alert("Insira uma URL válida!");

    // Codifica a URL em Base64 para passar pelo parâmetro 'd'
    const encoded = btoa(url);
    
    // Define a rota do site principal (ajusta automaticamente no Vercel)
    const baseUrl = window.location.origin + "/site/index.html";
    const finalLink = `${baseUrl}?d=${encoded}`;

    document.getElementById('resultBox').style.display = "block";
    document.getElementById('outputLink').value = finalLink;
}

function copiar() {
    const copyText = document.getElementById("outputLink");
    copyText.select();
    document.execCommand("copy");
    alert("Link copiado para a área de transferência!");
}
