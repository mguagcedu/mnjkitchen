document.addEventListener('DOMContentLoaded', () => {
  const read = k => { try { return localStorage.getItem(k) } catch(_) { return null } };
  const write = (k,v) => { try { localStorage.setItem(k,v) } catch(_){} };

  // Contrast & Large Text
  const applyA11y = () => {
    document.documentElement.classList.toggle('high-contrast', read('a11y_contrast')==='1');
    document.documentElement.classList.toggle('large-text',    read('a11y_text')==='1');
  };
  applyA11y();
  const bind = (id,key) => {
    const el = document.getElementById(id); if(!el) return;
    el.setAttribute('aria-pressed', read(key)==='1' ? 'true' : 'false');
    el.addEventListener('click', () => {
      const next = read(key)==='1' ? '0':'1'; write(key,next);
      el.setAttribute('aria-pressed', next==='1' ? 'true' : 'false'); applyA11y();
    });
  };
  bind('btn-contrast','a11y_contrast'); bind('btn-largetext','a11y_text');

  // Theme toggle
  const themeKey='theme_pref';
  const applyTheme = (v)=>{
    if(v==='light') document.documentElement.setAttribute('data-theme','light');
    else if(v==='dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
  };
  applyTheme(read(themeKey));
  const tbtn = document.getElementById('btn-theme');
  if(tbtn){
    tbtn.addEventListener('click', ()=>{
      const cur = read(themeKey);
      const next = cur==='dark' ? 'light' : 'dark';
      write(themeKey,next); applyTheme(next);
      tbtn.textContent = next==='dark' ? 'Dark Mode' : 'Light Mode';
    });
    // init label
    const cur = read(themeKey);
    const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = cur ? cur==='dark' : sysDark;
    tbtn.textContent = isDark ? 'Dark Mode' : 'Light Mode';
  }
});