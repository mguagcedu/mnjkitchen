
(function(){
  const root = document.documentElement;
  const set = (k, cls) => {
    const on = root.classList.toggle(cls);
    localStorage.setItem(k, on ? '1' : '0');
    return on;
  };
  const sync = (k, cls, btn) => {
    const on = localStorage.getItem(k) === '1';
    if(on) root.classList.add(cls);
    if(btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
  document.addEventListener('DOMContentLoaded', ()=>{
    const toolbar = document.querySelector('.a11y-toolbar');
    if(!toolbar) return;
    const btns = toolbar.querySelectorAll('.a11y-btn');
    btns.forEach(b=>{
      b.addEventListener('click', ()=>{
        const t = b.dataset.toggle;
        let on=false;
        if(t==='contrast') on=set('a11y_contrast','high-contrast');
        if(t==='text') on=set('a11y_text','large-text');
        if(t==='dyslexic') on=set('a11y_dys','dyslexic-font');
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    });
    sync('a11y_contrast','high-contrast', toolbar.querySelector('[data-toggle="contrast"]'));
    sync('a11y_text','large-text', toolbar.querySelector('[data-toggle="text"]'));
    sync('a11y_dys','dyslexic-font', toolbar.querySelector('[data-toggle="dyslexic"]'));
  });
})();
