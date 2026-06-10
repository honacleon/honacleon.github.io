# Template nbconvert — visual do portfólio

Converte seus notebooks reais (`.ipynb`) para HTML estático **read-only** no mesmo
visual dark + dourado dos notebooks de exemplo da seção **ML & Finanças Quant**.

O código fica aberto para leitura; **a base de dados permanece privada** (conexão
por variável de ambiente, nunca credenciais no notebook) — o banner de aviso é
inserido automaticamente em todo notebook convertido.

## 1. Instalar o nbconvert (uma vez)

```bash
python3 -m pip install --user --break-system-packages nbconvert
```

Verifique:

```bash
~/.local/bin/jupyter nbconvert --version
```

## 2. Converter um notebook

```bash
# a partir da raiz do site (honacleon.github.io/)
quant/templates/convert.sh /caminho/do/seu_notebook.ipynb audusd-momentum-rf
```

- 1º argumento: caminho do `.ipynb`.
- 2º argumento (opcional): nome do arquivo de saída, sem extensão.

O HTML é gravado em **`quant/`** (ao lado do `notebook.css`), já pronto.

> Por baixo, o script roda:
> ```bash
> jupyter nbconvert --to html --template portfolio \
>   --TemplateExporter.extra_template_basedirs=quant/templates \
>   <notebook>.ipynb --output-dir quant
> ```

## 3. Título, subtítulo, banner e link do repositório

O template lê metadados do próprio notebook. No Jupyter:
**Edit → Edit Notebook Metadata** (clássico) ou painel de *Advanced Tools* (JupyterLab),
e adicione:

```json
{
  "portfolio": {
    "title": "Random Forest de Momentum — Direção do AUDUSD",
    "subtitle": "Classificador de direção do próximo candle com features de momentum.",
    "repo": "https://github.com/honacleon/seu-repo",
    "banner": "<strong>Texto custom do banner (HTML).</strong> Opcional."
  }
}
```

Todos os campos são opcionais:

- **title** — se ausente, usa o 1º cabeçalho `# H1` do markdown; se não houver, o nome do arquivo.
- **subtitle** — linha de apoio sob o título.
- **repo** — adiciona um link "código" (ícone GitHub) na topbar.
- **banner** — substitui o texto padrão de privacidade (HTML permitido).

## 4. Plugar no portfólio

Depois de gerar o HTML, adicione um card em `js/main.js`, no array `projetosQuant`:

```js
{
    id: "audusd-momentum-rf",
    titulo: "Random Forest de Momentum — Direção do AUDUSD",
    descricao: "Classificador (random forest) que prevê a direção do próximo candle do AUDUSD a partir de features de momentum.",
    tecnologias: ["Python", "scikit-learn", "pandas", "backtest"],
    metricas: { pnl: "+0.0%", accuracy: "0.0%", drawdown: "0.0%" },
    notebook: "quant/audusd-momentum-rf.html",
    repositorio: null
}
```

## Boas práticas de privacidade

- **Nunca** comite credenciais. Carregue a base via `os.environ["QUANT_DB_URL"]`.
- Mantenha `.env`, CSVs e dumps fora do versionamento (`.gitignore`).
- Os números exibidos devem vir de **amostra sintética** ou estar anonimizados.

## Como funciona (interno)

- `portfolio/conf.json` → `base_template: classic` (renderização robusta de todas as saídas).
- `portfolio/index.html.j2` → estende `classic/base.html.j2` e troca só o scaffold
  (topbar, título, banner, rodapé). O conteúdo das células é reestilizado por
  `quant/notebook.css` (bloco "nbconvert — reskin").
- Suporta texto, `stdout`/`stderr`, tracebacks, DataFrames (HTML), imagens
  (matplotlib base64) e LaTeX via MathJax.
