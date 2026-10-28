// Database of Project READMEs
const projectData = {
    'click-tricot': {
        title: 'Click Tricot',
        subtitle: 'E-Commerce Responsivo & Assets de Web Design',
        category: 'E-Commerce Moda',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Photoshop', 'UI/UX'],
        markdown: `# Click Tricot — E-Commerce & Web Assets\n**Desenvolvedor & Web Designer:** Tiago Lousada Alvim (Creator Mood)\n\n## 📋 Descrição do Projeto\nDesenvolvimento e estilização de loja virtual responsiva focada em moda e vestuário em tricot. O projeto abrangeu desde a estrutura de apresentação dos produtos até a criação gráfica de banners de alta conversão.\n\n## 🛠️ Tecnologias Utilizadas\n- **Front-End:** HTML5, CSS3, JavaScript ES6\n- **Design & Assets:** Adobe Photoshop, Illustrator\n- **Plataforma:** E-commerce Responsivo\n\n## 🚀 Entregáveis & Soluções\n- Interface web totalmente responsiva e adaptada para dispositivos móveis\n- Criação e padronização de banners promocionais para o catálogo\n- Otimização visual da jornada do usuário (UX) e chamadas para ação (CTA)`
    },
    'fampegi': {
        title: 'Fampegi Acessórios',
        subtitle: 'E-Commerce & Visual Branding',
        category: 'E-Commerce & Mídias',
        techs: ['E-Commerce', 'HTML/CSS', 'Branding', 'Photoshop'],
        markdown: `# Fampegi Acessórios — E-Commerce & Visual Branding\n**Desenvolvedor & Designer:** Tiago Lousada Alvim (Creator Mood)\n\n## 📋 Descrição do Projeto\nEstruturação e design para a loja de acessórios Fampegi. O foco esteve no destaque visual dos produtos, navegação simplificada e banners promocionais alinhados à identidade da marca.\n\n## 🛠️ Tecnologias Utilizadas\n- **Plataforma E-Commerce:** HTML5, CSS3 e estilização customizada\n- **Design Gráfico:** Adobe Photoshop, Illustrator\n\n## 🚀 Entregáveis & Soluções\n- Vitrine virtual organizada e responsiva\n- Conjunto de banners publicitários e elementos gráficos\n- Padronização de imagens do catálogo para carregamento rápido`
    },
    'fe-negocios': {
        title: 'Portal Fé e Negócios',
        subtitle: 'Plataforma E-Commerce & Portal Responsivo',
        category: 'Portal & E-Commerce',
        techs: ['Web Design', 'Front-End', 'UI/UX', 'Photoshop'],
        markdown: `# Portal Fé e Negócios — Plataforma Web & E-Commerce\n**Desenvolvedor & Web Designer:** Tiago Lousada Alvim (Creator Mood)\n\n## 📋 Descrição do Projeto\nDesenvolvimento da plataforma web e loja virtual do Portal Fé e Negócios. Integração entre área informativa/conteúdo e catálogo comercial com foco na clareza de navegação.\n\n## 🛠️ Tecnologias Utilizadas\n- **Front-End:** HTML5, CSS3, JavaScript\n- **Design de Interface:** UI/UX Prototyping, Adobe Photoshop\n\n## 🚀 Entregáveis & Soluções\n- Design responsivo ajustado para smartphones e desktops\n- Estruturação do catálogo comercial de serviços e produtos\n- Identidade visual coerente em todas as seções do portal`
    },
    'creator-mood': {
        title: 'Creator Mood',
        subtitle: 'Landing Page Single-Page com Animações e Base64',
        category: 'Single-Page & Landing Page',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Base64 Assets'],
        markdown: `# Creator Mood — Landing Page & Portfólio Web\n**Desenvolvedor:** Tiago Lousada Alvim\n\n## 📋 Descrição do Projeto\nPágina promocional no formato Single-Page, desenvolvida para ser extremamente leve e auto-contida. Conta com animações suaves e incorporação de assets em Base64 para eliminar dependências de hospedagem externa de imagens.\n\n## 🛠️ Tecnologias Utilizadas\n- **Front-End:** HTML5, CSS3 puríssimo, JavaScript vanilla\n- **Mídia:** Assets visuais otimizados em Base64\n\n## 🚀 Entregáveis & Soluções\n- Arquivo único de alta performance\n- Animações CSS3 nativas para transições suaves\n- Design moderno em tema escuro com alto contraste`
    },
    'forte-milenio': {
        title: 'Forte Aliança & Milênio',
        subtitle: 'Diagramação em Lote & Automação de Álbuns',
        category: 'Diagramação & Automação',
        techs: ['Photoshop JSX', 'InDesign Batch', 'Data Merge', 'Retouch'],
        markdown: `# Forte Aliança & Milênio — Automação de Álbuns Escolares & Formatura\n**Designer & Especialista em Automação:** Tiago Lousada Alvim (Creator Mood)\n\n## 📋 Descrição do Projeto\nFluxo profissional de automação e diagramação em lote para centenas de álbuns de formatura e escolares das empresas Forte Aliança e Milênio. A solução reduziu drasticamente o tempo de montagem manual e padronizou a qualidade final.\n\n## 🛠️ Tecnologias Utilizadas\n- **Automação:** Photoshop Scripts (.jsx / Actions), InDesign Data Merge\n- **Diagramação:** Adobe InDesign, Photoshop, Camera Raw\n\n## 🚀 Entregáveis & Soluções\n- Scripts de posicionamento em lote para fotos individuais e de turma\n- Templates dinâmicos para formandas e formandos\n- Tratamento de cor e correção de iluminação em lote`
    }
};

let currentReadmeKey = 'click-tricot';

// Tab Switching Logic
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(el => {
        el.classList.remove('active', 'text-cyan-400', 'bg-slate-800');
        el.classList.add('text-slate-400');
    });

    const targetSection = document.getElementById(`section-${tabName}`);
    const targetNav = document.getElementById(`nav-${tabName}`);

    if (targetSection) targetSection.classList.remove('hidden');
    if (targetNav) {
        targetNav.classList.add('active', 'text-cyan-400', 'bg-slate-800');
        targetNav.classList.remove('text-slate-400');
    }

    if (tabName === 'readme') {
        selectReadme(currentReadmeKey);
    }
}

// Project Filter Logic
function filterProjects(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-cyan-500', 'text-black', 'font-semibold');
        btn.classList.add('text-slate-400');
    });

    const activeBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('bg-cyan-500', 'text-black', 'font-semibold');
        activeBtn.classList.remove('text-slate-400');
    }

    document.querySelectorAll('.project-card').forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat.includes(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// README Selector Logic
function selectReadme(key) {
    currentReadmeKey = key;
    const data = projectData[key];
    if (!data) return;

    document.querySelectorAll('.readme-select-btn').forEach(btn => {
        btn.classList.remove('bg-cyan-500', 'text-black', 'border-cyan-400');
        btn.classList.add('bg-slate-800', 'text-slate-300', 'border-slate-700');
    });
    
    const activeBtn = document.getElementById(`btn-readme-${key}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-cyan-500', 'text-black', 'border-cyan-400');
        activeBtn.classList.remove('bg-slate-800', 'text-slate-300', 'border-slate-700');
    }

    const editor = document.getElementById('readme-editor');
    if(editor){
        editor.value = data.markdown;
        updateReadmePreview();
    }
}

// Live Markdown Preview Update
function updateReadmePreview() {
    const editor = document.getElementById('readme-editor');
    if(!editor) return;
    
    const text = editor.value;
    const preview = document.getElementById('readme-preview');
    
    let html = text
        .replace(/^# (.*$)/gim, '<h1 class="text-lg font-bold text-cyan-400 border-b border-slate-800 pb-2 mb-2">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2 class="text-sm font-bold text-purple-400 mt-3 mb-1">$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/`- (.*$)/gim, '<li class="ml-4 list-disc text-slate-300">$1</li>')
        .replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-[11px]">$1</code>')
        .replace(/\n/g, '<br>');

    preview.innerHTML = html;
}

// Copy Text Functions
function copyToClipboard(text, message = 'Copiado com sucesso!') {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => showToast(message)).catch(() => fallbackCopy(text, message));
    } else {
        fallbackCopy(text, message);
    }
}

function fallbackCopy(text, message) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(message);
    } catch (err) {
        showToast('Erro ao copiar!');
    }
    document.body.removeChild(textArea);
}

function copyProjectReadme(key) {
    const data = projectData[key];
    if (data) copyToClipboard(data.markdown, `README.md de ${data.title} copiado!`);
}

function copyCurrentReadmeText() {
    const text = document.getElementById('readme-editor').value;
    copyToClipboard(text, 'Conteúdo Markdown copiado!');
}

function copyTreeStructure() {
    const treeText = `Meu-Portfolio-Tiago-Lousada/\n├── 📁 01-click-tricot/\n│   └── 📄 README.md\n└── ...`;
    copyToClipboard(treeText, 'Estrutura copiada!');
}

// Toast Notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.innerText = msg;
    toast.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
    }, 3000);
}

// Modal Logic
function openModal(key) {
    const data = projectData[key];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">${data.category}</div>
        <h2 class="text-2xl font-bold text-white mb-1">${data.title}</h2>
        <p class="text-sm text-slate-400 mb-6">${data.subtitle}</p>
        <div class="space-y-4 mb-6">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 class="text-xs font-bold uppercase text-cyan-400 mb-2">Tecnologias & Ferramentas</h4>
                <div class="flex flex-wrap gap-2">
                    ${data.techs.map(t => `<span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700">${t}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
            <button onclick="copyProjectReadme('${key}')" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"><i class="fa-regular fa-copy"></i> Copiar README</button>
            <button onclick="switchTab('readme'); selectReadme('${key}'); closeModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2"><i class="fa-solid fa-code"></i> Ver no Editor</button>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Close Modal on Overlay Click
window.onclick = function(event) {
    if (event.target === document.getElementById('project-modal')) closeModal();
}

// Initialize
window.onload = function() {
    if(document.getElementById('section-readme')) selectReadme('click-tricot');
};