const params = new URLSearchParams(window.location.search);
let id = params.get('d');

fetch('api/links.json')
  .then(res => res.json())
  .then(data => {
      if(data[id]){
          // Redireciona após contador
          document.getElementById('main-btn').onclick = () => {
              window.location.href = data[id];
          }
      } else {
          alert('Link não encontrado');
      }
  });
