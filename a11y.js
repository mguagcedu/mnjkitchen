document.addEventListener('DOMContentLoaded', () => {
  const get = k => { try { return localStorage.getItem(k) } catch(_) { return null } };
  const set = (k,v) => { try { localStorage.setItem(k,v) } catch(_) {} };

  // High contrast & Large text
  const applyA11y = () => {
    document.documentElement.classList.toggle('high-contrast', get('a11y_contrast')==='1');
    document.documentElement.style.fontSize = (get('a11y_text')==='1') ? '18px' : '';
  };
  applyA11y();
  const hook = (id,key) => {
    const el = document.getElementById(id); if(!el) return;
    el.addEventListener('click', () => {
      set(key, get(key)==='1' ? '0' : '1'); applyA11y();
    });
  };
  hook('btn-contrast','a11y_contrast'); hook('btn-largetext','a11y_text');

  // Theme toggle
  const themeKey='theme_pref';
  const applyTheme=(v)=>{
    if(v==='light'){ document.documentElement.setAttribute('data-theme','light'); }
    else if(v==='dark'){ document.documentElement.setAttribute('data-theme','dark'); }
    else { document.documentElement.removeAttribute('data-theme'); }
  };
  applyTheme(get(themeKey));
  const t = document.getElementById('btn-theme');
  if(t){
    t.addEventListener('click',()=>{
      const cur=get(themeKey); const next = (cur==='dark') ? 'light' : 'dark';
      set(themeKey,next); applyTheme(next); t.textContent = (next==='dark') ? 'Dark Mode' : 'Light Mode';
    });
    // init label
    const cur=get(themeKey);
    const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    t.textContent = (cur ? cur==='dark' : sysDark) ? 'Dark Mode' : 'Light Mode';
  }
});