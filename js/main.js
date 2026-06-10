// ============================================================
//  HONACLEON JÚNIOR — Portfólio IA & Data Science
//  Lógica de projetos (dinâmica), modal/galeria/lightbox e
//  animações de interface (loader, reveal, skills, contadores).
// ============================================================

// ===== CONFIGURAÇÃO DOS PROJETOS =====
// Para adicionar um novo projeto, adicione um objeto neste array.
const projetos = [
    {
        id: "aurum-mkt",
        titulo: "Aurum MKT — Plataforma de Analytics de Performance de Anúncios",
        descricao: "SaaS multi-cliente para agências: centraliza Meta Ads e Google Ads em dashboards com motor de alertas, registro de vendas/ROAS, insights de IA (Gemini), relatórios prontos para WhatsApp e RBAC por papel (admin/analyst/client).",
        tecnologias: ["Next.js 14", "TypeScript", "Tailwind", "shadcn/ui", "Recharts", "React Query", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT/RBAC", "Alembic", "Gemini (IA)"],
        thumbnail: "img/projects/aurum/aurum-tour.gif",
        screenshots: [
            "img/projects/aurum/dashboard-meta.png",
            "img/projects/aurum/dashboard-google.png",
            "img/projects/aurum/dashboard-vendas.png",
            "img/projects/aurum/ia-insights.png",
            "img/projects/aurum/alerts.png",
            "img/projects/aurum/optimizations.png",
            "img/projects/aurum/sales.png",
            "img/projects/aurum/report.png",
            "img/projects/aurum/admin.png",
            "img/projects/aurum/login.png"
        ],
        descricaoDetalhada: `
            <h2>🚀 Visão Geral</h2>
            <p>O <strong>Aurum MKT</strong> é uma plataforma multi-cliente de analytics de performance de anúncios, pensada para agências de marketing. Centraliza dados de <strong>Meta Ads</strong> e <strong>Google Ads</strong> em dashboards executivos, com motor de alertas, registro de vendas/ROAS, insights gerados por IA e controle de acesso por papel — tudo construído a partir de um blueprint de especificação com paridade total de regras de negócio (incluindo a definição Looker de "Leads").</p>

            <h2>🛠️ Stack</h2>
            <ul>
                <li><strong>Frontend</strong>: Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui + Recharts + React Query, com micro-interações em Framer Motion.</li>
                <li><strong>Backend</strong>: FastAPI (Python 3.11+) + SQLAlchemy 2.x + Alembic (19 tabelas).</li>
                <li><strong>Banco</strong>: PostgreSQL plugável por <code>DATABASE_URL</code> (Supabase / Postgres local / Neon / RDS).</li>
                <li><strong>Auth</strong>: JWT próprio (access + refresh) com RBAC na camada de aplicação.</li>
                <li><strong>ETL/Jobs</strong>: workers Python (Meta/Google) agendáveis por cron ou APScheduler.</li>
            </ul>

            <h2>🧠 Como Funciona</h2>
            <ol>
                <li><strong>Dashboards multi-fonte</strong>: visão consolidada de Meta Ads, Google Ads e Vendas com KPIs, comparativos e tendências.</li>
                <li><strong>Motor de alertas</strong>: 8 templates de alerta detectam quedas de performance e oportunidades.</li>
                <li><strong>Insights de IA (Gemini)</strong>: prompts de domínio (Marketing, Financial, Market Research) geram análises e relatórios sob demanda.</li>
                <li><strong>Vendas & ROAS</strong>: registro de vendas com cálculo de retorno sobre investimento por cliente/período.</li>
                <li><strong>Relatórios</strong>: exportações prontas para WhatsApp e apresentação ao cliente.</li>
                <li><strong>RBAC</strong>: papéis admin / analyst / client com acesso validado no backend a cada chamada.</li>
            </ol>

            <h2>💎 Diferenciais Técnicos</h2>
            <ul>
                <li><strong>Spec-driven</strong>: implementado a partir de blueprint (SPECS_ZERO), com paridade de regras de negócio.</li>
                <li><strong>Design system glass</strong>: tema dark "Aurum Glass" com fundo de partículas animado e UI consistente.</li>
                <li><strong>Segurança</strong>: credenciais via variáveis de ambiente; acesso a dados sempre enforçado no backend.</li>
                <li><strong>Arquitetura em camadas</strong>: core / db / schemas / repositories / services / api / etl / jobs.</li>
            </ul>
        `,
        liveDemo: null,
        repositorio: null,
        video: null
    },
    {
        id: "sql-assistant",
        titulo: "AI SQL Assistant — Natural Language → SQL com Multi-Agent + RAG",
        descricao: "Plataforma full-stack que traduz perguntas em português para SQL via pipeline multi-agente de 9 prompts especializados, com retrieval semântico em pgvector, self-healing de queries e multi-LLM (Claude / GPT-4o / Gemini).",
        tecnologias: ["TypeScript", "React 18", "Node.js", "Express", "Supabase", "pgvector", "Anthropic Claude", "OpenAI GPT-4o", "Google Gemini", "Multi-Agent", "RAG", "Tailwind", "ShadCN/UI", "Vitest"],
        thumbnail: "img/projects/sql-assistant/sql-tour.gif",
        screenshots: [
            "img/projects/sql-assistant/capa.jpg",
            "img/projects/sql-assistant/login.jpg",
            "img/projects/sql-assistant/projetos.jpg",
            "img/projects/sql-assistant/chat.jpg",
            "img/projects/sql-assistant/sql-gerado.jpg",
            "img/projects/sql-assistant/resultado.jpg",
            "img/projects/sql-assistant/insights.jpg",
            "img/projects/sql-assistant/upload.jpg",
            "img/projects/sql-assistant/treinar-ia.jpg",
            "img/projects/sql-assistant/compartilhar.jpg"
        ],
        descricaoDetalhada: `
            <h2>🎯 Visão Geral</h2>
            <p>Sistema completo de consulta a bancos relacionais via linguagem natural. O usuário faz uma pergunta em português ("qual o NPS médio por região no último trimestre?") e a plataforma orquestra um pipeline de 9 agentes especializados que traduzem, validam, executam e narram a resposta — com self-healing automático quando uma query falha.</p>

            <h2>🏗️ Arquitetura</h2>
            <ul>
                <li><strong>Monorepo TypeScript</strong> com 3 pacotes (shared / backend / frontend) e npm workspaces</li>
                <li><strong>Backend Node.js + Express</strong>: 126 arquivos, 50+ services em 9 grupos funcionais, <strong>47 endpoints REST</strong></li>
                <li><strong>Frontend React 18 + Vite</strong> com Tailwind, ShadCN/UI, Radix, Framer Motion e Recharts</li>
                <li><strong>Multi-tenant</strong>: organizações, projetos, members, invitations, RLS no PostgreSQL com JWT-first auth</li>
            </ul>

            <h2>🤖 Pipeline Multi-Agente (9 prompts em 3 fases)</h2>
            <p>Cada agente tem temperatura calibrada para seu papel — do roteamento ultra-determinístico ao narrador criativo:</p>
            <ol>
                <li><strong>Router (T=0.0)</strong>: classifica pergunta em ON_TOPIC / OFF_TOPIC / GREETING / CLARIFICATION</li>
                <li><strong>AI Service (T=0.3)</strong>: gera SQL com 8 production rules (P1–P8) contra alucinação</li>
                <li><strong>Project Prompts</strong>: templates de domínio (Marketing, Financial, Market Research) injetam regras específicas (ponderação NPS, ROUND moeda, NULLIF para evitar div/0)</li>
                <li><strong>Critic Agent (T=0.1)</strong>: valida sintaxe, colunas, agregações e filtros antes de executar</li>
                <li><strong>SQL Correction → Healer</strong>: cascata de auto-fix com até 2 tentativas cada</li>
                <li><strong>Narrator (T=0.7)</strong>: transforma resultado em narrativa em pt-BR (R$, dd/mm/yyyy)</li>
                <li><strong>Insights (T=0.6)</strong>: identifica padrões e anomalias automaticamente</li>
                <li><strong>Follow-up (T=0.5)</strong>: sugere 2 perguntas relacionadas para guiar a investigação</li>
            </ol>

            <h2>🧠 RAG + Retrieval Semântico</h2>
            <ul>
                <li><strong>pgvector</strong> nativo no Supabase com embeddings de 1536 dimensões (Gemini text-embedding)</li>
                <li>RPC <code>match_columns_by_embedding</code> table-scoped para descoberta de colunas relevantes</li>
                <li><strong>Schema introspection</strong> dinâmica + grounding service que injeta apenas o contexto necessário no prompt</li>
                <li>Upload de CSV end-to-end com indexação automática de embeddings (testado com 1.500 linhas × 57 colunas)</li>
            </ul>

            <h2>🔁 Multi-LLM com Fallback</h2>
            <p>Suporte nativo a 4 provedores com fallback transparente: <strong>Gemini 2.5 Flash-Lite</strong> (principal), <strong>OpenAI GPT-4o</strong>, <strong>Anthropic Claude</strong> e <strong>OpenRouter</strong>. Provider switcher no nível de service permite trocar sem mudar o consumidor.</p>

            <h2>🎓 Treinamento da IA pelo próprio usuário</h2>
            <p>UI de <em>knowledge base</em> que permite a equipe ensinar o sistema sobre seus dados sem precisar de engenheiro: descreve tabelas, marca colunas-chave, adiciona sinônimos de negócio e exemplos de perguntas. O contexto editado vai direto para os prompts dos agentes e melhora a acurácia ao longo do tempo.</p>

            <h2>🛡️ Engineering Maduro</h2>
            <ul>
                <li><strong>Husky + Commitlint</strong> (Conventional Commits), ESLint, Prettier, lint-staged</li>
                <li><strong>Vitest</strong> com characterization tests fixando comportamento de módulos refatorados</li>
                <li><strong>Benchmark suite</strong> próprio (panel-consumer baseline) para detectar regressão de acurácia</li>
                <li><strong>GitHub Actions</strong> para CI</li>
                <li>Documentação hierárquica em <code>AGENTS.md</code> por pacote + <code>ARCHITECTURE.md</code> + wiki interno</li>
            </ul>

            <h2>📈 O que esse projeto comprova</h2>
            <ul>
                <li>Arquitetura full-stack TypeScript em escala (monorepo, workspaces)</li>
                <li>Sistemas multi-agente em produção — não PoC</li>
                <li>RAG sério com pgvector + retrieval semântico</li>
                <li>Integração com múltiplos LLMs e estratégia explícita de fallback</li>
                <li>PostgreSQL avançado (RLS, RPCs, pgvector, migrations)</li>
                <li>Disciplina de engenharia: testes, benchmarks, CI, conventional commits</li>
            </ul>
        `,
        liveDemo: null,
        repositorio: "https://github.com/honacleon/SQL_ASSISTANT",
        video: null
    },
    {
        id: "agente-documentos",
        titulo: "Agente de Análise de Documentos",
        descricao: "Sistema inteligente que utiliza IA para análise e extração de informações de documentos complexos, com processamento de linguagem natural avançado.",
        tecnologias: ["Python", "OpenAI API", "LangChain", "NLTK", "Streamlit"],
        thumbnail: "img/projects/doc-agent/capa_1.png",
        screenshots: [
            "img/projects/doc-agent/capa_1.png",
            "img/projects/doc-agent/imgleio (1).png",
            "img/projects/doc-agent/imgleio (2).png",
            "img/projects/doc-agent/imgleio (3).png",
            "img/projects/doc-agent/imgleio (4).png",
            "img/projects/doc-agent/imgleio (5).png",
            "img/projects/doc-agent/imgleio (6).png"
        ],
        descricaoDetalhada: `
            <p>Este projeto envolve um agente inteligente desenvolvido para realizar análises profundas e extrair informações cruciais de grandes volumes de documentos. Utilizando técnicas avançadas de Processamento de Linguagem Natural (PLN) e modelos de IA generativa, o agente é capaz de:</p>
            <ul>
                <li>Resumir documentos extensos mantendo os pontos-chave</li>
                <li>Classificar entidades nomeadas (pessoas, organizações, locais)</li>
                <li>Categorizar documentos por assuntos e relevância</li>
                <li>Responder a perguntas específicas sobre o conteúdo</li>
            </ul>
            <p>O objetivo principal é otimizar processos que dependem da revisão manual de documentos, economizando tempo e aumentando a precisão da extração de dados. Ideal para setores jurídicos, financeiros, acadêmicos e de pesquisa.</p>
        `,
        liveDemo: null,
        repositorio: "https://github.com/honacleon/LeioAI-RAG",
        video: null
    },
    {
        id: "case-ollist",
        titulo: "Case Olist - Machine Learning",
        descricao: "Análise completa de dados de e-commerce para otimização de vendas e segmentação de clientes, resultando em 22% de aumento na conversão.",
        tecnologias: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
        thumbnail: "img/projects/case-ollist/capa_1.png",
        screenshots: [
            "img/projects/case-ollist/capa_1.png",
            "img/projects/case-ollist/0.png",
            "img/projects/case-ollist/1.png",
            "img/projects/case-ollist/2.png",
            "img/projects/case-ollist/4.png",
            "img/projects/case-ollist/5.png",
            "img/projects/case-ollist/7.png",
            "img/projects/case-ollist/9.png",
            "img/projects/case-ollist/10.png",
            "img/projects/case-ollist/11.png"
        ],
        descricaoDetalhada: `
            <p>Este projeto consiste em um caso de estudo completo para a empresa Ollist, plataforma de e-commerce brasileira. A análise envolveu o processamento de grandes volumes de dados transacionais para extrair insights estratégicos sobre o desempenho do marketplace.</p>
            <ul>
                <li>Identificação de padrões de sazonalidade nas vendas</li>
                <li>Segmentação de clientes com base em comportamento de compra</li>
                <li>Análise geográfica de desempenho por região</li>
                <li>Recomendações estratégicas baseadas em dados</li>
                <li>Desenvolvimento de dashboards interativos para monitoramento em tempo real</li>
            </ul>
            <p>Os resultados proporcionaram à empresa uma compreensão aprofundada do comportamento dos consumidores e tendências de mercado, permitindo decisões mais assertivas e direcionadas para crescimento sustentável.</p>
        `,
        liveDemo: null,
        repositorio: "https://github.com/honacleon/CaseOlist",
        video: null
    },
    {
        id: "neurochat-rag-retrieval-augmented-generation",
        titulo: "NeuroChat - RAG (Retrieval-Augmented Generation) ",
        descricao: "RAG Completo: Pipeline de ingestão, chunking, embeddings, indexação e busca semântica. Integração: OpenAI + Pinecone + LangChain + Streamlit.",
        tecnologias: ["Pinecone", "LangChain", "Streamlit", "Python", "Docling", "OpenAI (API)", "Retrieval-Augmented Generation - RAG"],
        thumbnail: "img/projects/rag-docs/capa_1.png",
        screenshots: [
            "img/projects/rag-docs/capa_1.png",
            "img/projects/rag-docs/rag_doc.png",
            "img/projects/rag-docs/rag_doc1.png",
            "img/projects/rag-docs/rag_doc2.png",
            "img/projects/rag-docs/rag_doc3.png",
            "img/projects/rag-docs/rag_doc4.png"
        ],
        descricaoDetalhada: `
            <h2>🚀 Visão Geral</h2>
            <p>O <strong>NeuroChat AI</strong> é um chatbot inteligente baseado em RAG (Retrieval-Augmented Generation), que combina modelos de linguagem da OpenAI, banco vetorial Pinecone e uma interface web futurista com Streamlit. O sistema permite consultar grandes volumes de documentos (PDFs convertidos) de forma semântica, respondendo perguntas com contexto e precisão.</p>

            <h2>🛠️ Tecnologias e Ferramentas Utilizadas</h2>
            <ul>
                <li><strong>OpenAI (API)</strong>: Geração de embeddings e respostas contextuais usando modelos de última geração (GPT-4o, text-embedding-3-small).</li>
                <li><strong>Pinecone</strong>: Banco vetorial para indexação e busca semântica de documentos.</li>
                <li><strong>LangChain</strong>: Pipeline para chunking, preparação e manipulação de documentos.</li>
                <li><strong>Streamlit</strong>: Interface web moderna, responsiva e customizada com CSS avançado.</li>
                <li><strong>Python-dotenv</strong>: Gerenciamento seguro de variáveis de ambiente.</li>
                <li><strong>PDF Converter</strong>: Pipeline para converter PDFs em TXT/JSON, facilitando ingestão de dados.</li>
                <li><strong>Design Futurista</strong>: UI diferenciada com animações, gradientes, fontes customizadas e experiência de usuário avançada.</li>
            </ul>

            <h2>🧠 Como Funciona</h2>
            <ol>
                <li><strong>Conversão de PDFs</strong>: Use o script "pdf_converter"para transformar arquivos PDF em TXT/JSON.</li>
                <li><strong>Processamento e Indexação</strong>: Rode "rag_system" para dividir documentos em chunks, gerar embeddings via OpenAI e indexar tudo no Pinecone.</li>
                <li><strong>Chatbot Inteligente</strong>: Execute "chatbot_streamlit" para acessar a interface web. O chatbot busca respostas nos documentos indexados, usando RAG para trazer contexto real e respostas precisas.</li>
            </ol>
        `,
        liveDemo: null,
        repositorio: "https://github.com/honacleon/NeuroChat",
        video: null
    },
    {
        id: "marketing-roi-dashboard",
        titulo: "Marketing ROI Dashboard - Análise Preditiva de Campanhas",
        descricao: "Dashboard avançado de BI com Machine Learning para otimização de campanhas de marketing digital. Análise preditiva de ROAS, alocação inteligente de budget e insights automatizados.",
        tecnologias: ["Python", "Streamlit", "Plotly", "Scikit-learn", "Pandas", "Machine Learning", "CSS Avançado"],
        thumbnail: "img/projects/mkt-dash/capa_1.png",
        screenshots: [
            "img/projects/mkt-dash/capa_1.png",
            "img/projects/mkt-dash/mkt_1.png",
            "img/projects/mkt-dash/mkt_2.png",
            "img/projects/mkt-dash/mkt_3.png",
            "img/projects/mkt-dash/mkt_4.png",
            "img/projects/mkt-dash/mkt_5.png",
            "img/projects/mkt-dash/mkt_6.png"
        ],
        descricaoDetalhada: `
            <h2>🚀 Visão Geral</h2>
            <p>O <strong>Marketing ROI Dashboard</strong> é uma solução avançada de Business Intelligence desenvolvida para transformar dados de marketing em insights acionáveis e crescimento exponencial. Combinando visualizações interativas com algoritmos de Machine Learning, o sistema permite identificar oportunidades de otimização, prever resultados futuros e maximizar o retorno sobre investimento em campanhas digitais.</p>

            <h2>🛠️ Tecnologias e Ferramentas Utilizadas</h2>
            <ul>
                <li><strong>Python</strong>: Base de desenvolvimento com processamento de dados de alta performance.</li>
                <li><strong>Streamlit</strong>: Framework para criação da interface web interativa com componentes dinâmicos.</li>
                <li><strong>Plotly & Altair</strong>: Bibliotecas para visualizações de dados interativas e responsivas.</li>
                <li><strong>Scikit-learn</strong>: Implementação de algoritmos de Machine Learning para previsões e otimizações.</li>
                <li><strong>Pandas & NumPy</strong>: Processamento e manipulação avançada de datasets complexos.</li>
                <li><strong>CSS Customizado</strong>: Interface premium com gradientes dinâmicos, animações e efeitos visuais.</li>
                <li><strong>Streamlit Option Menu</strong>: Navegação intuitiva com menu lateral personalizado.</li>
            </ul>

            <h2>🧠 Como Funciona</h2>
            <ol>
                <li><strong>Autenticação Segura</strong>: Sistema de login com hash SHA-256 para proteção de dados sensíveis.</li>
                <li><strong>Dashboard Executivo</strong>: Visão consolidada de KPIs críticos com comparativos e tendências.</li>
                <li><strong>Performance por Canal</strong>: Análise detalhada de métricas por canal de marketing com benchmarks.</li>
                <li><strong>Funil de Conversão</strong>: Visualização interativa do customer journey com atribuição multi-touch.</li>
                <li><strong>IA & Predições</strong>: Algoritmos de Machine Learning para previsão de ROAS e identificação de anomalias.</li>
                <li><strong>Budget Optimization</strong>: Recomendações automáticas para alocação ideal de investimentos.</li>
            </ol>

            <h2>🔥 Resultados Comprovados</h2>
            <ul>
                <li><strong>+45% no ROAS</strong> através de otimização baseada em IA</li>
                <li><strong>-28% no CPA</strong> com realocação inteligente de budget</li>
                <li><strong>+35% na eficiência</strong> de campanhas multi-canal</li>
                <li><strong>R$ 2.3M</strong> em receita adicional identificada via análise preditiva</li>
            </ul>

            <h2>💎 Diferenciais Técnicos</h2>
            <ul>
                <li><strong>Design Premium</strong>: Interface com gradientes dinâmicos, animações suaves e tema dark otimizado.</li>
                <li><strong>Algoritmos Proprietários</strong>: ROAS Predictor, Budget Optimizer, Anomaly Detection e Seasonality Engine.</li>
                <li><strong>Alertas Inteligentes</strong>: Notificações automáticas de quedas de performance e oportunidades.</li>
                <li><strong>Relatórios Automatizados</strong>: Envio programado de insights via WhatsApp/Email.</li>
                <li><strong>Simulador de Cenários</strong>: Ferramenta interativa para projeção de resultados com diferentes alocações.</li>
            </ul>
        `,
        liveDemo: null,
        repositorio: "https://github.com/honacleon/marketing-dashboard",
        video: null
    },
    {
        id: "bi-dashboard-starter",
        titulo: "BI Dashboard Starter — KPIs Executivos em Tempo Real",
        descricao: "Dashboard executivo com KPIs essenciais, drill-downs e visualizações interativas para diagnóstico rápido de saúde do negócio. Hospedado no Streamlit Cloud com acesso público.",
        tecnologias: ["Python", "Streamlit", "Plotly", "Pandas", "BI"],
        thumbnail: "img/projects/bi-starter/capa.png",
        screenshots: [
            "img/projects/bi-starter/capa.png"
        ],
        descricaoDetalhada: `
            <h2>📊 Visão Geral</h2>
            <p>Dashboard de BI focado em diagnóstico visual rápido — pensado para gestores que precisam responder "como estamos hoje?" em poucos cliques. Os KPIs ficam no topo, filtros por período/segmento ao lado, e o resto é drill-down em gráficos interativos.</p>

            <h2>🎯 O que entrega</h2>
            <ul>
                <li>KPIs principais com comparativos vs. período anterior</li>
                <li>Visualizações interativas (Plotly): séries temporais, distribuições, rankings</li>
                <li>Filtros encadeados que recalculam todas as métricas em tempo real</li>
                <li>Layout responsivo e tema customizado</li>
            </ul>

            <h2>🛠️ Stack</h2>
            <p>Python + Streamlit + Plotly + Pandas, deploy no Streamlit Cloud.</p>
        `,
        liveDemo: "https://aurum-starter.streamlit.app/",
        repositorio: null,
        video: null
    },
    {
        id: "bi-dashboard-business",
        titulo: "BI Dashboard Business — Análise Preditiva e Simulação de Cenários",
        descricao: "Plataforma BI com modelos preditivos, alertas automáticos e simulação de cenários (what-if) para apoiar decisões estratégicas de gestão.",
        tecnologias: ["Python", "Streamlit", "Scikit-learn", "Plotly", "Pandas", "Machine Learning"],
        thumbnail: "img/projects/bi-business/capa.png",
        screenshots: [
            "img/projects/bi-business/capa.png"
        ],
        descricaoDetalhada: `
            <h2>📈 Visão Geral</h2>
            <p>Versão avançada do dashboard: além dos KPIs, adiciona <strong>modelos preditivos</strong>, <strong>detecção de anomalias</strong> e um <strong>simulador de cenários</strong> para projetar o impacto de mudanças de variáveis no resultado final.</p>

            <h2>🎯 O que entrega</h2>
            <ul>
                <li>Modelos preditivos (forecast de receita, churn, conversão)</li>
                <li>Alertas automáticos quando métricas saem de bandas esperadas</li>
                <li>Simulador <em>what-if</em>: usuário ajusta variáveis e vê o impacto projetado</li>
                <li>Comparações multi-período (YoY, MoM) com narrativa contextual</li>
            </ul>

            <h2>🛠️ Stack</h2>
            <p>Python + Streamlit + Scikit-learn + Plotly + Pandas, deploy no Streamlit Cloud.</p>
        `,
        liveDemo: "https://aurum-business.streamlit.app/",
        repositorio: null,
        video: null
    },
    {
        id: "bi-dashboard-professional",
        titulo: "BI Dashboard Professional — IA Aplicada com RAG e Agentes",
        descricao: "Plataforma BI premium com IA generativa, RAG e agentes para responder perguntas em linguagem natural, gerar insights automáticos e automatizar análises recorrentes.",
        tecnologias: ["Python", "Streamlit", "LangChain", "OpenAI", "RAG", "Agentes IA", "BI Avançado"],
        thumbnail: "img/projects/bi-professional/capa.png",
        screenshots: [
            "img/projects/bi-professional/capa.png"
        ],
        descricaoDetalhada: `
            <h2>🧠 Visão Geral</h2>
            <p>Versão premium do dashboard: incorpora <strong>IA generativa</strong> para conversar com os dados, <strong>RAG</strong> para responder com base em documentos da empresa e <strong>agentes</strong> que automatizam análises e relatórios recorrentes.</p>

            <h2>🎯 O que entrega</h2>
            <ul>
                <li>Chat sobre os dados: usuário pergunta em português, agente responde com gráfico + narrativa</li>
                <li>RAG sobre base de conhecimento (políticas, contratos, manuais)</li>
                <li>Geração automática de insights e recomendações ao abrir o dashboard</li>
                <li>Pipeline de automação para relatórios e alertas via email/WhatsApp</li>
            </ul>

            <h2>🛠️ Stack</h2>
            <p>Python + Streamlit + LangChain + OpenAI + RAG + arquitetura multi-agente, deploy no Streamlit Cloud.</p>
        `,
        liveDemo: "https://aurum-professional.streamlit.app/",
        repositorio: null,
        video: null
    }
];

// ===== PROJETOS QUANT (ML & Finanças Quantitativas) =====
// Cada case abre um notebook renderizado (HTML estático, read-only) em quant/.
// A base de dados NÃO é publicada — apenas o código e os resultados.
const projetosQuant = [
    {
        id: "audusd-rf-familia-b",
        titulo: "Random Forest — Direção do AUDUSD (Variáveis de Momentum)",
        descricao: "Classificação da direção do AUDUSD em 5 dias (alta × baixa) com Random Forest, usando variáveis de momentum. Pipeline filter_v3: modelo base → diagnóstico de overfitting → fine-grid de hiperparâmetros → avaliação out-of-sample (~12,5 anos).",
        tecnologias: ["Python", "scikit-learn", "RandomForest", "pandas", "NumPy", "out-of-sample"],
        metricas: [
            { v: "56,2%", l: "Acurácia OOS", cls: "acc" },
            { v: "0,56", l: "AUC (teste)", cls: "acc" },
            { v: "0,84", l: "Sharpe", cls: "pnl" }
        ],
        notebook: "quant/audusd-rf-familia-b.html",
        repositorio: null
    },
    {
        id: "audusd-rf-familia-r",
        titulo: "Random Forest — Direção do AUDUSD (Variáveis de Força Relativa)",
        descricao: "Mesmo pipeline filter_v3 (base → fine-grid → otimizado) aplicado a variáveis de força relativa (RSI), classificando a direção do AUDUSD em 5 dias com avaliação out-of-sample (~12,5 anos).",
        tecnologias: ["Python", "scikit-learn", "RandomForest", "pandas", "NumPy", "out-of-sample"],
        metricas: [
            { v: "58,1%", l: "Acurácia OOS", cls: "acc" },
            { v: "0,58", l: "AUC (teste)", cls: "acc" },
            { v: "0,95", l: "Sharpe", cls: "pnl" }
        ],
        notebook: "quant/audusd-rf-familia-r.html",
        repositorio: null
    }
];

// ===== ESTADO GLOBAL =====
let currentProject = null;
let currentImageIndex = 0;
let currentImages = [];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    setFooterYear();
    initLoader();
    initNavigation();
    initMobileMenu();
    initScrollSpy();
    initHeaderScroll();
    initRevealOnScroll();
    initSkillBars();
    initStatCounters();
    initBackToTop();
    initCodeParticles();
    initParallax();
    initContactForm();
    loadQuantProjects();
    loadProjects();
    initModal();
    initLightbox();
});

// ===== FOOTER YEAR =====
function setFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
}

// ===== LOADER =====
function initLoader() {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('loaderBar');
    const percent = document.getElementById('loaderPercent');
    if (!loader) return;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 16;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                runHeroIntro();
            }, 350);
        }
        if (bar) bar.style.width = progress + '%';
        if (percent) percent.textContent = Math.floor(progress) + '%';
    }, 110);

    // Fallback de segurança: nunca deixar o loader preso
    setTimeout(() => loader.classList.add('hidden'), 4000);
}

function runHeroIntro() {
    const hero = document.querySelector('.hero-content');
    if (hero) hero.classList.add('intro-done');
    typeHeroName();
}

function typeHeroName() {
    const nameValue = document.querySelector('.hero-name .name-value');
    if (!nameValue) return;
    const text = nameValue.textContent;
    nameValue.textContent = '';
    nameValue.style.minHeight = '1em';
    let i = 0;
    const tick = () => {
        if (i <= text.length) {
            nameValue.textContent = text.substring(0, i);
            i++;
            setTimeout(tick, 55);
        }
    };
    tick();
}

// ===== NAVIGATION =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            const headerH = document.querySelector('.main-header').offsetHeight;
            window.scrollTo({ top: target.offsetTop - headerH + 1, behavior: 'smooth' });
            closeMobileMenu();
        });
    });

    // Brand link
    const brand = document.querySelector('.nav-brand');
    if (brand) {
        brand.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const onScroll = () => {
        const pos = window.scrollY + 120;
        let current = '';
        sections.forEach(section => {
            if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === current);
        });
    };
    window.addEventListener('scroll', throttle(onScroll, 100));
    onScroll();
}

function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', throttle(onScroll, 100));
    onScroll();
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('active');
        toggle.classList.toggle('active', open);
    });

    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.remove('active');
    if (toggle) toggle.classList.remove('active');
}

// ===== REVEAL ON SCROLL =====
function initRevealOnScroll() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => observer.observe(el));
}

// ===== SKILL BARS =====
function initSkillBars() {
    const items = document.querySelectorAll('.skill-item');
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const item = entry.target;
            const percent = parseInt(item.getAttribute('data-percent') || '0', 10);
            const bar = item.querySelector('.skill-progress');
            const label = item.querySelector('.skill-percent');
            if (bar) bar.style.width = percent + '%';
            if (label) animateNumber(label, percent, 1500, '%');
            observer.unobserve(item);
        });
    }, { threshold: 0.4 });
    items.forEach(item => observer.observe(item));
}

// ===== STAT COUNTERS =====
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    if (!stats.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count') || '0', 10);
            const suffix = el.querySelector('.stat-suffix');
            animateNumber(el, target, 1800, '', suffix ? suffix.outerHTML : '');
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
}

function animateNumber(el, target, duration, unit = '', suffixHTML = '') {
    const start = performance.now();
    const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = Math.floor(eased * target);
        el.innerHTML = value + unit + suffixHTML;
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = target + unit + suffixHTML;
    };
    requestAnimationFrame(step);
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', throttle(() => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, 150));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== CODE PARTICLES (HERO) =====
function initCodeParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const symbols = ['{', '}', '[', ']', '(', ')', '<', '>', '/', '=', ';', '#', '&', '|', 'λ', 'Σ', '∂', 'AI', 'ML', 'def', 'np'];
    const count = window.innerWidth < 768 ? 12 : 20;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 16 + 's';
        p.style.animationDuration = 12 + Math.random() * 10 + 's';
        p.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
        container.appendChild(p);
    }
}

// ===== PARALLAX (sutil) =====
function initParallax() {
    const profile = document.getElementById('profileImage');
    const grid = document.querySelector('.code-grid-bg');
    if (!profile && !grid) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.pageYOffset;
            if (profile) profile.style.transform = `translateY(${Math.min(y * 0.12, 60)}px)`;
            if (grid) grid.style.transform = `translateY(${y * 0.15}px)`;
            ticking = false;
        });
    });
}

// ===== CONTACT FORM (mailto) =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        const subject = encodeURIComponent(`[Portfólio] ${data.assunto || 'Contato'}`);
        const body = encodeURIComponent(`Nome: ${data.nome}\nEmail: ${data.email}\n\n${data.mensagem}`);
        window.location.href = `mailto:hpouro@outlook.com?subject=${subject}&body=${body}`;
        form.reset();
    });
}

// ===== PROJETOS QUANT =====
function loadQuantProjects() {
    const grid = document.getElementById('quant-grid');
    if (!grid) return;
    grid.innerHTML = '';
    projetosQuant.forEach((p, i) => grid.appendChild(createQuantCard(p, i)));
}

// Gera o path SVG de uma "equity curve" sintética (determinística por seed)
function makeEquityPath(seed, w = 600, h = 160, n = 64) {
    let s = (seed * 9301 + 49297) % 233280;
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const ys = [];
    let v = 0, min = Infinity, max = -Infinity;
    for (let i = 0; i < n; i++) {
        v += rnd() - 0.40; // leve viés de alta com ruído (gera drawdowns)
        ys.push(v);
        if (v < min) min = v;
        if (v > max) max = v;
    }
    const span = (max - min) || 1;
    return ys.map((y, i) => {
        const x = (i / (n - 1)) * w;
        const yy = h - ((y - min) / span) * (h - 8) - 4;
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${yy.toFixed(1)}`;
    }).join(' ');
}

function createQuantCard(p, index) {
    const card = document.createElement('article');
    card.className = 'quant-card reveal';
    card.addEventListener('click', () => window.open(p.notebook, '_blank', 'noopener'));

    const path = makeEquityPath(index + 3);
    const tags = p.tecnologias.map(t => `<span class="tag">${t}</span>`).join('');
    const repo = p.repositorio
        ? `<a href="${p.repositorio}" target="_blank" rel="noopener" class="quant-icon-link" title="Ver código" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>`
        : '';

    const metricsHtml = (Array.isArray(p.metricas) ? p.metricas : [])
        .map(m => `<div class="quant-metric"><span class="metric-value ${m.cls || ''}">${m.v}</span><span class="metric-label">${m.l}</span></div>`)
        .join('');

    card.innerHTML = `
        <div class="quant-curve" aria-hidden="true">
            <svg viewBox="0 0 600 160" preserveAspectRatio="none">
                <path d="${path}" fill="none" stroke="var(--gold)" stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="quant-card-head">
            <span class="quant-badge"><i class="fas fa-arrow-trend-up"></i> Quant</span>
            <div class="quant-links">
                <span class="quant-icon-link" title="Abrir notebook"><i class="fas fa-book-open"></i></span>
                ${repo}
            </div>
        </div>
        <h3 class="quant-title">${p.titulo}</h3>
        <p class="quant-desc">${p.descricao}</p>
        <div class="quant-metrics">${metricsHtml}</div>
        <div class="quant-tags">${tags}</div>
        <div class="quant-cta"><span>Abrir notebook</span> <i class="fas fa-arrow-right"></i></div>
    `;
    return card;
}

// ===== PROJETOS =====
function loadProjects() {
    const grid = document.getElementById('projetos-grid');
    if (!grid) return;
    grid.innerHTML = '';
    projetos.forEach(projeto => grid.appendChild(createProjectCard(projeto)));
    // Observa os novos cards para o efeito reveal
    initRevealOnScroll();
}

function createProjectCard(projeto) {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.addEventListener('click', () => openProjectModal(projeto));

    const maxTags = 4;
    const tags = projeto.tecnologias.slice(0, maxTags)
        .map(t => `<span class="tag">${t}</span>`).join('');
    const extra = projeto.tecnologias.length > maxTags
        ? `<span class="tag tag-more">+${projeto.tecnologias.length - maxTags}</span>` : '';

    const demoLink = projeto.liveDemo
        ? `<a href="${projeto.liveDemo}" target="_blank" rel="noopener" class="project-link" title="Ver demo" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>` : '';
    const repoLink = projeto.repositorio
        ? `<a href="${projeto.repositorio}" target="_blank" rel="noopener" class="project-link" title="Ver código" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : '';

    card.innerHTML = `
        <div class="project-image">
            <img src="${projeto.thumbnail}" alt="${projeto.titulo}" loading="lazy">
            <div class="project-overlay">
                <div class="project-links">
                    <span class="project-link" title="Ver detalhes"><i class="fas fa-eye"></i></span>
                    ${demoLink}
                    ${repoLink}
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${projeto.titulo}</h3>
            <p class="project-description">${projeto.descricao}</p>
            <div class="project-tags">${tags}${extra}</div>
        </div>
    `;
    return card;
}

// ===== MODAL =====
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (modal) {
        modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeProjectModal(); closeLightbox(); }
    });
    const prev = document.querySelector('.gallery-prev');
    const next = document.querySelector('.gallery-next');
    if (prev) prev.addEventListener('click', () => changeImage(-1));
    if (next) next.addEventListener('click', () => changeImage(1));
}

function openProjectModal(projeto) {
    currentProject = projeto;
    currentImages = projeto.screenshots || [];
    currentImageIndex = 0;

    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const tech = document.getElementById('modal-tech');
    const links = document.getElementById('modal-links');
    if (!modal) return;

    if (title) title.textContent = projeto.titulo;
    if (description) description.innerHTML = projeto.descricaoDetalhada;
    if (tech) tech.innerHTML = projeto.tecnologias.map(t => `<span class="tag">${t}</span>`).join('');
    if (links) {
        links.innerHTML = `
            ${projeto.liveDemo ? `<a href="${projeto.liveDemo}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Ver Demo</a>` : ''}
            ${projeto.repositorio ? `<a href="${projeto.repositorio}" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fab fa-github"></i> Ver Código</a>` : ''}
        `;
    }

    setupGallery();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    currentProject = null;
}

function setupGallery() {
    const mainImage = document.getElementById('modal-main-image');
    const thumbs = document.getElementById('gallery-thumbnails');
    const controls = document.querySelector('.gallery-controls');
    if (!mainImage || !thumbs || !currentImages.length) return;

    mainImage.src = currentImages[0];
    mainImage.alt = `${currentProject.titulo} - Imagem 1`;
    mainImage.onclick = () => openLightbox(currentImageIndex);

    // Esconde controles e thumbs quando há apenas 1 imagem
    const single = currentImages.length <= 1;
    if (controls) controls.style.display = single ? 'none' : 'flex';
    thumbs.style.display = single ? 'none' : 'flex';

    thumbs.innerHTML = '';
    currentImages.forEach((img, index) => {
        const t = document.createElement('div');
        t.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
        t.onclick = () => changeToImage(index);
        t.innerHTML = `<img src="${img}" alt="Miniatura ${index + 1}" loading="lazy">`;
        thumbs.appendChild(t);
    });
}

function changeImage(direction) {
    if (!currentImages.length) return;
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    updateGalleryImage();
}

function changeToImage(index) {
    currentImageIndex = index;
    updateGalleryImage();
}

function updateGalleryImage() {
    const mainImage = document.getElementById('modal-main-image');
    const thumbs = document.querySelectorAll('.gallery-thumbnail');
    if (mainImage) {
        mainImage.src = currentImages[currentImageIndex];
        mainImage.alt = `${currentProject.titulo} - Imagem ${currentImageIndex + 1}`;
    }
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentImageIndex));
}

// ===== LIGHTBOX =====
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prev = document.querySelector('.lightbox-prev');
    const next = document.querySelector('.lightbox-next');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prev) prev.addEventListener('click', () => changeLightboxImage(-1));
    if (next) next.addEventListener('click', () => changeLightboxImage(1));
    if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
        const lb = document.getElementById('lightbox');
        if (lb && lb.classList.contains('active')) {
            if (e.key === 'ArrowLeft') changeLightboxImage(-1);
            if (e.key === 'ArrowRight') changeLightboxImage(1);
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-image');
    if (!lightbox || !img || !currentImages.length) return;
    currentImageIndex = index;
    img.src = currentImages[index];
    img.alt = `${currentProject.titulo} - Imagem ${index + 1}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
    // Mantém overflow hidden se o modal ainda estiver aberto
    const modal = document.getElementById('project-modal');
    if (!modal || !modal.classList.contains('active')) document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    if (!currentImages.length) return;
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    const img = document.getElementById('lightbox-image');
    if (img) {
        img.src = currentImages[currentImageIndex];
        img.alt = `${currentProject.titulo} - Imagem ${currentImageIndex + 1}`;
    }
    updateGalleryImage();
}

// ===== UTILS =====
function throttle(fn, wait) {
    let last = 0, timer = null;
    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now - last);
        if (remaining <= 0) {
            if (timer) { clearTimeout(timer); timer = null; }
            last = now;
            fn.apply(this, args);
        } else if (!timer) {
            timer = setTimeout(() => { last = Date.now(); timer = null; fn.apply(this, args); }, remaining);
        }
    };
}

window.addEventListener('error', (e) => console.error('Erro no portfolio:', e.error));
