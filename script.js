function filterTimeline() {
    const showProf = document.getElementById('filter-prof').checked;
    const showAcad = document.getElementById('filter-acad').checked;
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        const isProf = item.classList.contains('prof');
        const isAcad = item.classList.contains('acad');

        // Regra: Se ambos selecionados ou nenhum selecionado -> Mostra Tudo
        if ((showProf && showAcad) || (!showProf && !showAcad)) {
            item.classList.remove('hidden');
        } 
        // Se apenas Profissional estiver marcado
        else if (showProf && isProf) {
            item.classList.remove('hidden');
        } 
        else if (showProf && !isProf) {
            item.classList.add('hidden');
        }
        // Se apenas Acadêmico estiver marcado
        else if (showAcad && isAcad) {
            item.classList.remove('hidden');
        }
        else if (showAcad && !isAcad) {
            item.classList.add('hidden');
        }
    });
}

// Função de Troca de Tema (se ainda não tiver)
function toggleTheme() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.theme-toggle');
    btn.innerHTML = document.body.classList.contains('dark') ? '☀️' : '🌙';
}



