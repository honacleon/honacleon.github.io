#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Converte um .ipynb real para o visual dark+dourado do portfólio (read-only).
# Usa o template nbconvert "portfolio" (quant/templates/portfolio).
#
# Uso:
#   quant/templates/convert.sh <notebook.ipynb> [nome_saida_sem_extensao]
#
# Exemplos:
#   quant/templates/convert.sh ~/projetos/audusd_momentum_rf.ipynb audusd-momentum-rf
#   quant/templates/convert.sh ./audusd_rsi_rf.ipynb
#
# O HTML é gerado dentro de quant/ (ao lado do notebook.css), pronto para o
# portfólio. O título/subtítulo/banner saem de nb.metadata.portfolio
# (veja o README.md). Sem metadata, o título cai no 1º "# H1" do markdown.
# ---------------------------------------------------------------------------
set -euo pipefail

# garante o jupyter instalado em ~/.local/bin
export PATH="$HOME/.local/bin:$PATH"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"   # .../quant/templates
QUANT_DIR="$(dirname "$SCRIPT_DIR")"                          # .../quant
TEMPLATES_DIR="$SCRIPT_DIR"                                   # contém o dir "portfolio"

if [ $# -lt 1 ]; then
    echo "Uso: $0 <notebook.ipynb> [nome_saida_sem_extensao]" >&2
    exit 1
fi

NB="$1"
if [ ! -f "$NB" ]; then
    echo "Erro: notebook não encontrado: $NB" >&2
    exit 1
fi

if ! command -v jupyter >/dev/null 2>&1 || ! jupyter nbconvert --version >/dev/null 2>&1; then
    echo "Erro: nbconvert não encontrado. Instale com:" >&2
    echo "  python3 -m pip install --user --break-system-packages nbconvert" >&2
    exit 1
fi

ARGS=(--to html
      --template portfolio
      --TemplateExporter.extra_template_basedirs="$TEMPLATES_DIR"
      --output-dir "$QUANT_DIR")

OUT_NAME="$(basename "$NB" .ipynb)"
if [ $# -ge 2 ]; then
    ARGS+=(--output "$2")
    OUT_NAME="$2"
fi

jupyter nbconvert "${ARGS[@]}" "$NB"
echo "✓ Gerado: quant/${OUT_NAME}.html"
echo "  Adicione o card em js/main.js (array projetosQuant) apontando para \"quant/${OUT_NAME}.html\"."
