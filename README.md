# Vidiofy Blog - Estrutura Completa

## URLs Finais

| URL | Função |
|-----|--------|
| `vidiofy.com.br/` | Redireciona para /blog/ |
| `vidiofy.com.br/blog/` | Página inicial do blog |
| `vidiofy.com.br/blog/artigos/` | Listagem de todos os artigos |
| `vidiofy.com.br/site/` | Seu passador VIP (INALTERADO) |
| `vidiofy.com.br/painel/` | Seu painel (INALTERADO) |
| `vidiofy.com.br/safe/` | Seu safe (INALTERADO) |

## Estrutura de Pastas

```
/
├── index.html          → Redirecionador para /blog/
├── robots.txt          → Bloqueia /painel, /safe, /site do Google
├── sitemap.xml         → Mapa do site para indexação
├── vercel.json         → Rewrites do Vercel
├── blog/
│   ├── index.html      → Página inicial do blog
│   ├── css/
│   │   ├── blog.css    → Estilos globais
│   │   └── artigo.css  → Estilos de artigos
│   ├── js/
│   │   └── blog.js     → Scripts do blog
│   └── artigos/
│       ├── index.html              → Listagem de artigos
│       ├── melhores-apps-streaming-2026.html
│       ├── como-economizar-streaming.html
│       ├── guia-smart-tv-2026.html
│       ├── chromecast-vs-firestick.html
│       ├── criar-conta-netflix-segura.html
│       └── vpn-streaming-2026.html
├── site/               → SEU PASSADOR VIP (mantido)
├── painel/             → SEU PAINEL (mantido)
└── safe/               → SEU SAFE (mantido)
```

## Próximos Passos

1. **Substituir `ca-pub-XXXXXXXXXX`** nos arquivos pelo seu ID real do AdSense
2. **Criar mais 9 artigos** (mínimo 15 total para aprovação do AdSense)
3. **Aplicar no AdSense** usando `https://vidiofy.com.br/blog/`
4. **Enviar sitemap** no Google Search Console

## Artigos Incluídos (6 iniciais)

1. Melhores Aplicativos de Streaming 2026
2. Como Economizar na Assinatura de Streaming
3. Guia Completo: Como Escolher sua Smart TV
4. Chromecast 4K vs Fire TV Stick 4K Max
5. Como Criar uma Conta Netflix Segura
6. VPN para Streaming em 2026

## Tecnologias

- HTML5 semântico
- CSS3 com Grid e Flexbox
- JavaScript vanilla
- Google AdSense (async)
- 100% responsivo
- Dark mode nativo
