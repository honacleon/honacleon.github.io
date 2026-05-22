# Portfólio — Honacleon Junior

Portfólio pessoal de **Honacleon Junior**, especialista em **Inteligência Artificial e Ciência de Dados**, com foco em:

- Sistemas multi-agente e RAG em produção (não PoCs)
- Engenharia de dados e SQL/PostgreSQL avançado (incluindo `pgvector`)
- BI e dashboards executivos com IA aplicada
- Automação e copilotos de decisão para negócio

## Stack do site

HTML5 + CSS3 + JavaScript vanilla, servido via GitHub Pages em [honacleon.github.io](https://honacleon.github.io). Sem framework front-end — o conteúdo é o produto.

## Estrutura

```
.
├── index.html              # Página única com hero, projetos, sobre, contato
├── css/
│   ├── style.css           # Estilo base (paleta dourada, dark mode)
│   └── responsive.css      # Breakpoints: 1200, 768, 480, 320
├── js/
│   ├── main.js             # Array `projetos[]` + modal/galeria/lightbox
│   └── particles.js        # Canvas com partículas douradas no background
├── img/projects/           # Screenshots e capas dos projetos
└── assets/                 # Favicon
```

## Adicionar um novo projeto

Edite o array `projetos` no início de `js/main.js`. Cada projeto é um objeto com:

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | string | sim | Slug único |
| `titulo` | string | sim | Título do card |
| `descricao` | string | sim | Resumo curto (1–2 frases) |
| `tecnologias` | string[] | sim | Tags exibidas no card |
| `thumbnail` | string | sim | Path da capa (`img/projects/<slug>/capa.png`) |
| `screenshots` | string[] | sim | Galeria do modal |
| `descricaoDetalhada` | HTML string | sim | Conteúdo do modal (HTML) |
| `liveDemo` | string\|null | não | URL para demo viva |
| `repositorio` | string\|null | não | URL do repo no GitHub |
| `video` | string\|null | não | URL para vídeo (não usado ainda) |

## Rodar local

```bash
npx vite
# ou simples
python3 -m http.server 8081
```

## Deploy

Push para `main` no GitHub atualiza automaticamente o GitHub Pages.

## Licença

Conteúdo (textos, projetos): © Honacleon Junior. Código do site disponível para inspiração e estudo.
