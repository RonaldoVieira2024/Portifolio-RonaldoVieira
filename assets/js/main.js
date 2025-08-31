// JSp para marcar o link ativo baseado no pathname atual.
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();
