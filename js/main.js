// ===== CONFIGURAÇÃO DOS PROJETOS =====
// Para adicionar um novo projeto, adicione um objeto neste array
const projetos = [
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
        "id": "marketing-roi-dashboard",
        "titulo": "Marketing ROI Dashboard - Análise Preditiva de Campanhas",
        "descricao": "Dashboard avançado de BI com Machine Learning para otimização de campanhas de marketing digital. Análise preditiva de ROAS, alocação inteligente de budget e insights automatizados.",
        "tecnologias": ["Python", "Streamlit", "Plotly", "Scikit-learn", "Pandas", "Machine Learning", "CSS Avançado"],
        "thumbnail": "img/projects/mkt-dash/capa_1.png",
        "screenshots": [
            "img/projects/mkt-dash/capa_1.png",
            "img/projects/mkt-dash/mkt_1.png",
            "img/projects/mkt-dash/mkt_2.png",
            "img/projects/mkt-dash/mkt_3.png",
            "img/projects/mkt-dash/mkt_4.png",
            "img/projects/mkt-dash/mkt_5.png",
            "img/projects/mkt-dash/mkt_6.png"
        ],
        "descricaoDetalhada": `
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
        "liveDemo": null,
        "repositorio": "https://github.com/honacleon/marketing-dashboard",
        "video": null
    }
    
];

// ===== VARIÁVEIS GLOBAIS =====
let currentProject = null;
let currentImageIndex = 0;
let currentImages = [];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Remove o preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Inicializa os componentes
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initBackToTop();
    initMagneticButtons();
    loadProjects();
    initModal();
    initLightbox();
    
    console.log('Portfolio carregado com sucesso!');
});

// ===== NAVEGAÇÃO =====
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Atualizar link ativo
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Scroll spy para navegação
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (link) link.classList.add('active');
            }
        });

        // Header background no scroll
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// ===== ANIMAÇÕES HERO =====
function initHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero-tag, .hero-title, .hero-subtitle, .hero-buttons, .profile-card');
    
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 200);
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.section-header, .projeto-card, .skill-item, .contato-item');
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== CARREGAMENTO DE PROJETOS =====
function loadProjects() {
    const projetosGrid = document.getElementById('projetos-grid');
    if (!projetosGrid) return;

    projetosGrid.innerHTML = '';

    projetos.forEach((projeto, index) => {
        const projetoCard = createProjectCard(projeto);
        projetosGrid.appendChild(projetoCard);

        // Animação escalonada
        setTimeout(() => {
            projetoCard.classList.add('fade-in');
        }, index * 200);
    });
}

// ===== MAGNETIC CTA EFFECT =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn.magnetic');

    buttons.forEach(button => {
        if (button.dataset.magneticInit === 'true') return;

        const field = document.createElement('div');
        field.className = 'particles-field';

        const particleCount = 40;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.className = 'particle';
            particle.style.setProperty('--x', `${Math.random() * 160 - 80}px`);
            particle.style.setProperty('--y', `${Math.random() * 160 - 80}px`);
            particle.style.animationDuration = `${1 + Math.random() * 1.5}s`;
            particle.style.animationDelay = `${Math.random() * 0.5}s`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            field.appendChild(particle);
        }

        button.appendChild(field);
        button.dataset.magneticInit = 'true';
    });
}

function createProjectCard(projeto) {
    const card = document.createElement('div');
    card.className = 'projeto-card scroll-animate';
    card.onclick = () => openProjectModal(projeto);

    card.innerHTML = `
        <div class="projeto-image">
            <img src="${projeto.thumbnail}" alt="${projeto.titulo}" loading="lazy">
            <div class="projeto-overlay">
                <button class="btn btn-primary">
                    <i class="fas fa-eye"></i>
                    Ver Detalhes
                </button>
            </div>
        </div>
        <div class="projeto-content">
            <h3 class="projeto-title">${projeto.titulo}</h3>
            <p class="projeto-description">${projeto.descricao}</p>
            <div class="projeto-tech">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="projeto-links">
                ${projeto.liveDemo ? `<a href="${projeto.liveDemo}" target="_blank" class="projeto-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                ${projeto.repositorio ? `<a href="${projeto.repositorio}" target="_blank" class="projeto-link"><i class="fab fa-github"></i> Código</a>` : ''}
            </div>
        </div>
    `;

    return card;
}

// ===== MODAL DE PROJETO =====
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeLightbox();
        }
    });

    // Controles da galeria
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeImage(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeImage(1));
    }
}

function openProjectModal(projeto) {
    currentProject = projeto;
    currentImages = projeto.screenshots;
    currentImageIndex = 0;

    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const tech = document.getElementById('modal-tech');
    const links = document.getElementById('modal-links');

    if (!modal) return;

    // Preencher conteúdo
    if (title) title.textContent = projeto.titulo;
    if (description) description.innerHTML = projeto.descricaoDetalhada;
    
    if (tech) {
        tech.innerHTML = projeto.tecnologias.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }

    if (links) {
        links.innerHTML = `
            ${projeto.liveDemo ? `<a href="${projeto.liveDemo}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Ver Demo</a>` : ''}
            ${projeto.repositorio ? `<a href="${projeto.repositorio}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> Ver Código</a>` : ''}
        `;
    }

    // Configurar galeria
    setupGallery();

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    currentProject = null;
}

function setupGallery() {
    const mainImage = document.getElementById('modal-main-image');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');

    if (!mainImage || !thumbnailsContainer || !currentImages.length) return;

    // Imagem principal
    mainImage.src = currentImages[0];
    mainImage.alt = `${currentProject.titulo} - Imagem 1`;
    mainImage.onclick = () => openLightbox(0);

    // Thumbnails
    thumbnailsContainer.innerHTML = '';
    currentImages.forEach((img, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => changeToImage(index);
        
        thumbnail.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}">`;
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function changeImage(direction) {
    if (!currentImages.length) return;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }

    updateGalleryImage();
}

function changeToImage(index) {
    currentImageIndex = index;
    updateGalleryImage();
}

function updateGalleryImage() {
    const mainImage = document.getElementById('modal-main-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');

    if (mainImage) {
        mainImage.src = currentImages[currentImageIndex];
        mainImage.alt = `${currentProject.titulo} - Imagem ${currentImageIndex + 1}`;
    }

    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// ===== LIGHTBOX =====
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeLightboxImage(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeLightboxImage(1));
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Controles de teclado
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'ArrowLeft':
                    changeLightboxImage(-1);
                    break;
                case 'ArrowRight':
                    changeLightboxImage(1);
                    break;
            }
        }
    });
}

function openLightbox(imageIndex) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    if (!lightbox || !lightboxImage || !currentImages.length) return;

    currentImageIndex = imageIndex;
    lightboxImage.src = currentImages[currentImageIndex];
    lightboxImage.alt = `${currentProject.titulo} - Imagem ${currentImageIndex + 1}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function changeLightboxImage(direction) {
    if (!currentImages.length) return;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }

    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = currentImages[currentImageIndex];
        lightboxImage.alt = `${currentProject.titulo} - Imagem ${currentImageIndex + 1}`;
    }

    // Atualizar thumbnail ativo no modal se estiver aberto
    updateGalleryImage();
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy loading para imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Preload das imagens críticas
function preloadCriticalImages() {
    const criticalImages = [
        'img/projects/doc-agent/screenshot1.png',
        'img/projects/case-ollist/0.png'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// ===== UTILITÁRIOS =====
// Debounce para otimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll para navegação
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Erro no portfolio:', e.error);
});

// ===== ANALYTICS & TRACKING =====
function trackProjectView(projectId) {
    // Implementar tracking se necessário
    console.log(`Projeto visualizado: ${projectId}`);
}

function trackContactClick(method) {
    // Implementar tracking se necessário
    console.log(`Contato clicado: ${method}`);
}

// ===== INICIALIZAÇÃO FINAL =====
// Executar otimizações quando a página carregar completamente
window.addEventListener('load', () => {
    initLazyLoading();
    preloadCriticalImages();
    
    // Otimizar scroll events
    const optimizedScrollHandler = debounce(() => {
        // Handlers de scroll já otimizados
    }, 16);
    
    window.addEventListener('scroll', optimizedScrollHandler);
    
    console.log('Portfolio otimizado e pronto!');
});

// ===== EXPOSIÇÃO GLOBAL PARA DEBUGGING =====
if (typeof window !== 'undefined') {
    window.portfolioDebug = {
        projetos,
        currentProject,
        currentImageIndex,
        openProjectModal,
        closeProjectModal
    };
}
