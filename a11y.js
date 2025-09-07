document.addEventListener('DOMContentLoaded', () => {
  const $ = s => document.querySelector(s);
  const store = (k,v)=>{ try{ localStorage.setItem(k,v) }catch(e){} };
  const read  = k=>{ try{ return localStorage.getItem(k) }catch(e){ return null } };

  const apply = () => {
    document.documentElement.classList.toggle('high-contrast', read('a11y_contrast')==='1');
    document.documentElement.classList.toggle('large-text',    read('a11y_text')==='1');
  };
  apply();

  const btn = (id,key) => {
    const el = document.getElementById(id);
    if(!el) return;
    el.setAttribute('aria-pressed', read(key)==='1' ? 'true':'false');
    el.addEventListener('click', () => {
      const now = read(key)==='1' ? '0':'1';
      store(key, now);
      el.setAttribute('aria-pressed', now==='1' ? 'true':'false');
      apply();
    
  // THEME TOGGLER
  const themeKey = 'theme_pref'; // 'light' | 'dark' | null (system)
  const applyTheme = (val) => {
    const html = document.documentElement;
    if(val === 'light'){ html.setAttribute('data-theme','light'); }
    else if(val === 'dark'){ html.setAttribute('data-theme','dark'); }
    else { html.removeAttribute('data-theme'); } // fall back to system
  };
  // restore
  try{ applyTheme(localStorage.getItem(themeKey)); }catch(e){}
  const tbtn = document.getElementById('btn-theme');
  if(tbtn){
    tbtn.addEventListener('click', ()=>{
      let cur = null;
      try{ cur = localStorage.getItem(themeKey); }catch(e){}
      const next = cur === 'dark' ? 'light' : 'dark';
      try{ localStorage.setItem(themeKey, next); }catch(e){}
      applyTheme(next);
      tbtn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      tbtn.textContent = next === 'dark' ? 'Dark Mode' : 'Light Mode';
    });
    // Initialize button label/state
    (function(){
      let cur = null;
      try{ cur = localStorage.getItem(themeKey); }catch(e){}
      const dark = cur ? (cur==='dark') : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      tbtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      tbtn.textContent = dark ? 'Dark Mode' : 'Light Mode';
    })();
  }

});
  };
  btn('btn-contrast','a11y_contrast');
  btn('btn-largetext','a11y_text');

  // THEME TOGGLER
  const themeKey = 'theme_pref'; // 'light' | 'dark' | null (system)
  const applyTheme = (val) => {
    const html = document.documentElement;
    if(val === 'light'){ html.setAttribute('data-theme','light'); }
    else if(val === 'dark'){ html.setAttribute('data-theme','dark'); }
    else { html.removeAttribute('data-theme'); } // fall back to system
  };
  // restore
  try{ applyTheme(localStorage.getItem(themeKey)); }catch(e){}
  const tbtn = document.getElementById('btn-theme');
  if(tbtn){
    tbtn.addEventListener('click', ()=>{
      let cur = null;
      try{ cur = localStorage.getItem(themeKey); }catch(e){}
      const next = cur === 'dark' ? 'light' : 'dark';
      try{ localStorage.setItem(themeKey, next); }catch(e){}
      applyTheme(next);
      tbtn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      tbtn.textContent = next === 'dark' ? 'Dark Mode' : 'Light Mode';
    });
    // Initialize button label/state
    (function(){
      let cur = null;
      try{ cur = localStorage.getItem(themeKey); }catch(e){}
      const dark = cur ? (cur==='dark') : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      tbtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      tbtn.textContent = dark ? 'Dark Mode' : 'Light Mode';
    })();
  }

});