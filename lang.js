(function () {
  var langs = ['en', 'ru', 'de', 'es', 'tr'];
  document.documentElement.classList.add('js');
  function pick() {
    var h = location.hash.replace('#', '');
    if (langs.indexOf(h) >= 0) return h;
    var nav = (navigator.languages || [navigator.language || 'en']);
    for (var i = 0; i < nav.length; i++) {
      var c = String(nav[i]).slice(0, 2).toLowerCase();
      if (langs.indexOf(c) >= 0) return c;
    }
    return 'en';
  }
  function show() {
    var l = pick();
    langs.forEach(function (x) {
      var s = document.getElementById(x);
      if (s) s.classList.toggle('shown', x === l);
    });
    document.querySelectorAll('.langs a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + l);
    });
    document.documentElement.lang = l;
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();
})();
