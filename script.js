document.addEventListener('DOMContentLoaded', () => {
    // 1. Dados detalhados dos cases para o Modal
    const projectsData = {
        'click-tricot': {
            category: 'E-Commerce Moda • Front-End & UI/UX',
            title: 'Click Tricot',
            description: 'Estruturação e desenvolvimento de loja virtual responsiva voltada ao varejo de moda, priorizando navegação rápida por coleções e carregamento otimizado de imagens.',
            highlights: [
                'Layout responsivo adaptado para conversão em dispositivos móveis',
                'Criação e otimização de banners promocionais e vitrines',
                'Organização de categorias e experiência de checkout simplificada'
            ]
        },
        'fampegi': {
            category: 'E-Commerce & Branding • Acessórios',
            title: 'Fampegi Acessórios',
            description: 'Implementação de e-commerce completo com alinhamento entre identidade visual da marca, fotografia de produto e interface web.',
            highlights: [
                'Desenvolvimento front-end responsivo com foco em usabilidade',
                'Padronização visual de catálogo e peças promocionais',
                'Otimização de assets para carregamento rápido'
            ]
        },
        'fe-negocios': {
            category: 'Portal & E-Commerce • Plataforma Web',
            title: 'Portal Fé e Negócios',
            description: 'Solução web unindo portal informativo e loja virtual em uma mesma estrutura, facilitando o acesso tanto ao conteúdo quanto aos produtos.',
            highlights: [
                'Arquitetura de informação clara para múltiplos tipos de página',
                'Interface responsiva com foco em leitura e navegação intuitiva',
                'Integração fluida entre áreas editoriais e catálogo de produtos'
            ]
        },
        'creator-mood': {
            category: 'Agência Digital • Performance & Web',
            title: 'Creator Mood',
            description: 'Página institucional e portfólio de serviços digitais construída com foco em leveza, animações suaves e apresentação direta.',
            highlights: [
                'Código limpo e estruturado sem dependências pesadas',
                'Design escuro moderno com hierarquia visual clara',
                'Totalmente responsivo para desktop, tablet e mobile'
            ]
        },
        'forte-alianca': {
            category: 'Automação em Lote • Scripts JSX & Produção',
            title: 'Forte Aliança & Milênio',
            description: 'Desenvolvimento de automações customizadas para fluxo editorial de grande volume, eliminando tarefas manuais repetitivas.',
            highlights: [
                'Scripts JSX para tratamento automatizado de imagens no Photoshop',
                'Diagramação em lote via Data Merge no Adobe InDesign',
                'Redução expressiva no tempo de fechamento de centenas de álbuns'
            ]
        }
    };

    // 2. Filtro de Projetos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedFilter = btn.getAttribute('data-filter');

            projectCards.forEach((card) => {
                const category = card.getAttribute('data-category');
                if (selectedFilter === 'all' || category === selectedFilter) {
                    card.classList.remove('hidden-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });
        });
    });

    // 3. Modal de Detalhes do Case
    const modal = document.getElementById('project-modal');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalHighlights = document.getElementById('modal-highlights');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const closeModalFooterBtn = document.getElementById('close-modal-footer-btn');

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    openModalButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-project');
            const data = projectsData[key];
            if (!data) return;

            modalCategory.textContent = data.category;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalHighlights.innerHTML = data.highlights
                .map((item) => `<li>${item}</li>`)
                .join('');

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeModalBtn?.addEventListener('click', closeModal);
    closeModalFooterBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // 4. Copiar E-mail + Toast
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.remove('translate-y-24', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('translate-y-24', 'opacity-0');
        }, 3000);
    }

    copyEmailBtn?.addEventListener('click', async () => {
        const email = copyEmailBtn.getAttribute('data-email');
        try {
            await navigator.clipboard.writeText(email);
            showToast('E-mail copiado: ' + email);
        } catch (err) {
            window.location.href = `mailto:${email}`;
        }
    });
});
