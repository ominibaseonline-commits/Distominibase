/* Mobile app shell: phone par sidebar drawer (hamburger) ban jata hai, desktop par kuch nahi badalta. */
(function () {
  var bar = document.createElement('div');
  bar.className = 'sb-topbar';
  bar.innerHTML =
    '<button type="button" class="sb-burger" aria-label="Menu">' +
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>' +
    '</button><span class="sb-title"></span>';
  var bd = document.createElement('div');
  bd.className = 'sb-backdrop';
  document.body.appendChild(bar);
  document.body.appendChild(bd);

  var title = bar.querySelector('.sb-title');
  var body = document.body;
  var pending = false;

  function sync() {
    pending = false;
    var sb = document.querySelector('.app-sb');
    body.classList.toggle('has-sb', !!sb);
    if (!sb) { body.classList.remove('sb-open'); return; }
    var h = sb.querySelector('h2');
    var t = h ? h.textContent : '';
    if (title.textContent !== t) title.textContent = t;
  }
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(sync);
  }
  var root = document.getElementById('root') || body;
  new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  sync();

  bar.querySelector('.sb-burger').addEventListener('click', function () { body.classList.toggle('sb-open'); });
  bd.addEventListener('click', function () { body.classList.remove('sb-open'); });
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.closest && t.closest('.app-sb button')) setTimeout(function () { body.classList.remove('sb-open'); }, 0);
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 768) body.classList.remove('sb-open'); });
})();
