(function () {
  "use strict";
  var S = SITE;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Remplissage des textes ---------- */
  document.title = S.titrePage;
  $$("[data-t]").forEach(function (el) {
    if (S[el.dataset.t] != null) el.textContent = S[el.dataset.t];
  });
  $$("#countdown small").forEach(function (el, i) { el.textContent = S.compteLibelles[i]; });
  $$(".ornament").forEach(function (el) { el.innerHTML = "<span></span>"; });

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* Frise */
  var tl = $("#timeline");
  S.histoire.forEach(function (h) {
    var d = document.createElement("div");
    d.className = "tl-item";
    d.innerHTML = '<p class="tl-date">' + esc(h.date) + '</p><h3 class="tl-title">' + esc(h.titre) + "</h3><p>" + esc(h.texte) + "</p>";
    tl.appendChild(d);
  });

  /* Galerie */
  var gal = $("#gallery");
  S.galerie.forEach(function (g) {
    var f = document.createElement("figure");
    f.className = "shot reveal";
    f.innerHTML = '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy" decoding="async">';
    gal.appendChild(f);
  });

  /* Programme */
  var prog = $("#program");
  S.programme.forEach(function (p, i) {
    var li = document.createElement("li");
    li.className = "reveal";
    li.style.setProperty("--d", (i * 0.08) + "s");
    li.innerHTML = '<span class="p-time">' + esc(p.heure) + '</span><div><p class="p-title">' + esc(p.titre) + '</p><p class="p-text">' + esc(p.texte) + "</p></div>";
    prog.appendChild(li);
  });

  /* Lieu */
  var q = encodeURIComponent(S.lieuMapsRecherche);
  $("#map").src = "https://maps.google.com/maps?q=" + q + "&z=15&output=embed";
  $("#btn-route").href = "https://www.google.com/maps/dir/?api=1&destination=" + q;

  /* Tenue */
  var sw = $("#swatches");
  S.tenueCouleurs.forEach(function (c, i) {
    var d = document.createElement("div");
    d.className = "swatch reveal";
    d.style.setProperty("--d", (i * 0.15) + "s");
    d.innerHTML = '<i style="background:' + esc(c.hex) + '"></i><span>' + esc(c.nom) + "</span>";
    sw.appendChild(d);
  });

  /* Confirmation de présence */
  var act = $("#rsvp-action");
  if (S.rsvpWhatsapp) {
    var a = document.createElement("a");
    a.className = "btn";
    a.target = "_blank";
    a.rel = "noopener";
    a.href = "https://wa.me/" + S.rsvpWhatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(S.rsvpMessage);
    a.textContent = S.rsvpBouton;
    act.appendChild(a);
  } else {
    act.innerHTML = '<span class="note">' + esc(S.rsvpSansBouton) + "</span>";
  }

  /* Titres : révélation mot par mot */
  $$(".split-words").forEach(function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", words.join(" "));
    el.innerHTML = words.map(function (w, i) {
      return '<span class="w" aria-hidden="true" style="--i:' + i + '">' + esc(w) + (i < words.length - 1 ? " " : "") + "</span>";
    }).join("");
  });

  /* ---------- Compte à rebours ---------- */
  var target = new Date(S.dateISO).getTime();
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function tick() {
    var diff = Math.max(0, target - Date.now());
    var s = Math.floor(diff / 1000);
    $("#cd-d").textContent = pad(Math.floor(s / 86400));
    $("#cd-h").textContent = pad(Math.floor((s % 86400) / 3600));
    $("#cd-m").textContent = pad(Math.floor((s % 3600) / 60));
    $("#cd-s").textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Musique ---------- */
  var audio = null, musicBtn = $("#music"), wantPlay = false;
  function setMusicUI(on) { musicBtn.classList.toggle("off", !on); }
  function initMusic() {
    if (!S.musique) return;
    audio = new Audio(S.musique);
    audio.loop = true;
    audio.volume = 0.55;
    audio.preload = "auto";
    audio.addEventListener("error", function () { musicBtn.hidden = true; audio = null; });
    var p = audio.play();
    wantPlay = true;
    if (p && p.then) {
      p.then(function () { musicBtn.hidden = false; setMusicUI(true); requestAnimationFrame(function () { musicBtn.classList.add("show"); }); })
       .catch(function () { if (audio) { musicBtn.hidden = false; setMusicUI(false); wantPlay = false; musicBtn.classList.add("show"); } });
    }
  }
  musicBtn.addEventListener("click", function () {
    if (!audio) return;
    if (audio.paused) { audio.play(); wantPlay = true; setMusicUI(true); }
    else { audio.pause(); wantPlay = false; setMusicUI(false); }
  });
  document.addEventListener("visibilitychange", function () {
    if (!audio) return;
    if (document.hidden) audio.pause();
    else if (wantPlay) audio.play().catch(function () {});
  });

  /* ---------- Apparition au défilement ---------- */
  function startReveal() {
    var items = $$(".reveal, .split-words");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Frise + profondeur de la galerie ---------- */
  var tlLine = $("#tl-line");
  var tlItems = $$(".tl-item");
  var shots = $$(".shot");
  var ticking = false;

  function onScroll() {
    ticking = false;
    var vh = window.innerHeight;

    /* Frise */
    var r = tl.getBoundingClientRect();
    var total = Math.max(0, r.height - 38);
    var drawn = Math.min(total, Math.max(0, vh * 0.62 - r.top - 8));
    tlLine.style.height = drawn + "px";
    tlItems.forEach(function (it) {
      var top = it.getBoundingClientRect().top - r.top + 8;
      it.classList.toggle("on", reduce || top <= drawn + 4);
    });

    /* Galerie : léger effet de profondeur */
    if (!reduce) {
      shots.forEach(function (f) {
        var b = f.getBoundingClientRect();
        if (b.bottom < -80 || b.top > vh + 80) return;
        var off = (b.top + b.height / 2 - vh / 2) / (vh / 2 + b.height / 2);
        off = Math.max(-1, Math.min(1, off));
        var img = f.firstElementChild;
        img.style.transform = "translate3d(0," + (-off * 5).toFixed(2) + "%,0) scale(1.14)";
      });
    }
  }
  function requestTick() {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);

  /* ---------- Ouverture de l'enveloppe ---------- */
  var intro = $("#intro"), btn = $("#btn-open"), opened = false;
  function enter() {
    document.documentElement.classList.remove("locked");
    document.body.classList.remove("locked");
    window.scrollTo(0, 0);
    intro.style.display = "none";
    startReveal();
    onScroll();
  }
  function open() {
    if (opened) return;
    opened = true;
    initMusic();                       /* lancé au clic : autorisé par les navigateurs */
    intro.classList.add("open");
    var t1 = reduce ? 200 : 2900;      /* rabat + carte qui sort */
    var t2 = reduce ? 100 : 1450;      /* fondu vers le site */
    setTimeout(function () {
      intro.classList.add("leaving");
      setTimeout(enter, t2);
    }, t1);
  }
  btn.addEventListener("click", open);
  $("#envelope").addEventListener("click", open);
  document.documentElement.classList.add("locked");
})();
