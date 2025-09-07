// === MNJ's Kitchen: hard override to stop slanted/rotated text ===
document.addEventListener('DOMContentLoaded', () => {
  const forced = (el) => {
    el.style.transform = 'none';
    el.style.rotate = '0deg';
    el.style.writingMode = 'horizontal-tb';
    el.style.textOrientation = 'mixed';
    el.style.fontStyle = 'normal';
  };
  const sels = ['ul.check','ul.check li','.card ul','.card li','.card p','.card figcaption','.hero p','.badge'];
  sels.forEach(sel => document.querySelectorAll(sel).forEach(forced));

  // strip any inline rotate/writing-mode on ancestors too
  document.querySelectorAll('[style*="rotate"],[style*="writing-mode"],[style*="transform:rotate"]').forEach(forced);
});