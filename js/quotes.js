/* Quote rotation for "Kennst du das?" section — with images & swipe */
(function () {
  var quotes = [
    {
      category: "Alltag & Überforderung",
      text: "Du gibst jeden Tag dein Bestes für deine Familie — und trotzdem bleibt abends das Gefühl, dass es irgendwie nicht reicht. Dabei zeigt allein dieser Gedanke, wie viel dir daran liegt.",
      image: "assets/images/quotes/01-alltag-kaffee.webp",
      imageAlt: "Nachdenkliche Frau am Tisch mit Kaffeetasse",
      credit: "Aleksandra Sapozhnikova",
      photoId: "FsgpeU8EPFA"
    },
    {
      category: "Alltag & Überforderung",
      text: "Morgens jonglierst du Anziehen, Frühstück und Zähneputzen gleichzeitig — und wunderst dich, woher andere Eltern scheinbar die Ruhe dafür nehmen. Du bist damit nicht allein.",
      image: "assets/images/quotes/02-alltag-fruehstueck.webp",
      imageAlt: "Mutter bereitet Frühstück mit kleiner Tochter zu",
      credit: "Vitaly Gariev",
      photoId: "RdDMcpYMyDc"
    },
    {
      category: "Alltag & Überforderung",
      text: "Du gibst so viel Kraft für Haushalt, Arbeit und die Bedürfnisse deiner Kinder — und merkst, dass für dich selbst kaum noch etwas übrig bleibt. Auch deine Bedürfnisse zählen.",
      image: "assets/images/quotes/03-alltag-haende-kaffee.webp",
      imageAlt: "Hände halten eine Tasse Kaffee",
      credit: "Tuyen Vo",
      photoId: "ePrSTbPcras"
    },
    {
      category: "Konflikte & Machtkämpfe",
      text: "Du nimmst dir fest vor, gelassen zu bleiben — und wenn es dann doch laut wird, ärgerst du dich über dich selbst. Dabei zeigt dein Vorsatz, wie sehr dir ein liebevoller Umgang am Herzen liegt.",
      image: "assets/images/quotes/04-konflikte-kuss.webp",
      imageAlt: "Mutter küsst ihre Tochter liebevoll",
      credit: "Nathan Dumlao",
      photoId: "3z39Pb4ayRg"
    },
    {
      category: "Konflikte & Machtkämpfe",
      text: "Dein Kind hat große Gefühle, die es noch nicht alleine tragen kann — und du stehst daneben und wünschst dir, besser helfen zu können. Dieses Mitfühlen ist bereits ein wertvoller erster Schritt.",
      image: "assets/images/quotes/05-konflikte-weinen.webp",
      imageAlt: "Kleiner Junge weint und hält seine Hand",
      credit: "Maxim Tolchinskiy",
      photoId: "EOjAQhwIVXs"
    },
    {
      category: "Konflikte & Machtkämpfe",
      text: "Du versuchst, bei Geschwisterstreit fair und geduldig zu vermitteln — und merkst, dass deine Energie dafür manchmal einfach nicht ausreicht. Das ist menschlich und völlig okay.",
      image: "assets/images/quotes/06-konflikte-geschwister.webp",
      imageAlt: "Mädchen und Junge stehen nebeneinander im Freien",
      credit: "Anastasia Vityukova",
      photoId: "hAXC3jJ7ZPQ"
    },
    {
      category: "Unsicherheit & Zweifel",
      text: "Du informierst dich, liest, hörst Podcasts und fragst andere Eltern — weil du das Beste für dein Kind möchtest. Dass du dich so engagierst, sagt viel über dich als Elternteil.",
      image: "assets/images/quotes/07-unsicherheit-lesen.webp",
      imageAlt: "Frau liegt auf dem Sofa und liest ein Buch",
      credit: "Giorgio Trovato",
      photoId: "tIvzOdK8bQM"
    },
    {
      category: "Unsicherheit & Zweifel",
      text: "Abends liegst du wach und fragst dich: \u201eMache ich das eigentlich richtig?\u201c — dieser Gedanke zeigt, wie reflektiert und verantwortungsvoll du mit deiner Rolle umgehst.",
      image: "assets/images/quotes/08-unsicherheit-bett.webp",
      imageAlt: "Frau liegt nachdenklich im Bett",
      credit: "zhenzhong liu",
      photoId: "Oj6EnQQmttY"
    },
    {
      category: "Unsicherheit & Zweifel",
      text: "Du möchtest vieles anders machen als deine eigenen Eltern — und suchst nach einem Weg, der sich für dich und deine Familie stimmig anfühlt. Allein dieses Bewusstsein ist ein großer Schritt.",
      image: "assets/images/quotes/09-unsicherheit-nachdenklich.webp",
      imageAlt: "Person hält nachdenklich eine Tasse Kaffee",
      credit: "Andrijana Bozic",
      photoId: "nlPHri_T80U"
    },
    {
      category: "Beziehung & Verbindung",
      text: "Du spürst, dass zwischen dir und deinem Kind gerade etwas fehlt — und du wünschst dir, wieder näher zusammenzufinden. Dass du das wahrnimmst, zeigt, wie wichtig dir eure Beziehung ist.",
      image: "assets/images/quotes/10-beziehung-baby.webp",
      imageAlt: "Mutter trägt ihr Baby im Wintermantel",
      credit: "Nathan Dumlao",
      photoId: "BmYbIIsI26U"
    },
    {
      category: "Beziehung & Verbindung",
      text: "Seit die Kinder da sind, bleibt für die Partnerschaft kaum noch Raum — obwohl ihr euch so sehr wünscht, auch als Paar wieder mehr füreinander da zu sein.",
      image: "assets/images/quotes/11-beziehung-paar.webp",
      imageAlt: "Paar liegt erschöpft auf dem Sofa",
      credit: "Veronika Trushkevich",
      photoId: "dAc0Das-A-I"
    },
    {
      category: "Beziehung & Verbindung",
      text: "Dein Teenager braucht gerade Abstand, und du vermisst die Vertrautheit von früher. Dein Wunsch nach Verbindung ist ein Zeichen von Liebe — auch wenn es sich gerade anders anfühlt.",
      image: "assets/images/quotes/12-beziehung-teenager.webp",
      imageAlt: "Person mit Rucksack blickt nachdenklich übers Wasser",
      credit: "Pavel Neznanov",
      photoId: "nzV2azhYmvE"
    }
  ];

  var current = 0;
  var rotation = document.querySelector(".quote-rotation");
  var imageEl = document.querySelector(".quote-image");
  var categoryEl = document.querySelector(".quote-category");
  var textEl = document.querySelector(".quote-text");
  var creditEl = document.querySelector(".quote-credit");
  var dotsContainer = document.querySelector(".quote-dots");

  if (!rotation || !imageEl || !categoryEl || !textEl || !dotsContainer) return;

  // Create dots
  quotes.forEach(function (_, i) {
    var dot = document.createElement("span");
    dot.className = "quote-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", function () {
      goTo(i);
    });
    dotsContainer.appendChild(dot);
  });

  function show(index) {
    imageEl.src = quotes[index].image;
    imageEl.alt = quotes[index].imageAlt;
    categoryEl.textContent = quotes[index].category;
    textEl.textContent = quotes[index].text;

    if (creditEl) {
      var q = quotes[index];
      var photoUrl = "https://unsplash.com/photos/" + q.photoId + "?utm_source=eva-bernhardt&utm_medium=referral";
      var unsplashUrl = "https://unsplash.com/?utm_source=eva-bernhardt&utm_medium=referral";
      creditEl.innerHTML = 'Foto: <a href="' + photoUrl + '" target="_blank" rel="noopener">' + q.credit + '</a> / <a href="' + unsplashUrl + '" target="_blank" rel="noopener">Unsplash</a>';
    }

    var dots = dotsContainer.querySelectorAll(".quote-dot");
    dots.forEach(function (d, i) {
      d.className = "quote-dot" + (i === index ? " active" : "");
    });

    preloadAdjacent(index);
  }

  function preloadAdjacent(index) {
    var next = (index + 1) % quotes.length;
    var prev = (index - 1 + quotes.length) % quotes.length;
    new Image().src = quotes[next].image;
    new Image().src = quotes[prev].image;
  }

  function goTo(index) {
    current = index;
    rotation.style.opacity = "0";
    setTimeout(function () {
      show(current);
      rotation.style.opacity = "1";
    }, 300);
    resetTimer();
  }

  var timer;
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
      current = (current + 1) % quotes.length;
      rotation.style.opacity = "0";
      setTimeout(function () {
        show(current);
        rotation.style.opacity = "1";
      }, 300);
    }, 7000);
  }

  // --- Swipe / drag handling ---
  var startX = 0;
  var startY = 0;
  var isDragging = false;
  var swipeDirection = null; // 'horizontal' | 'vertical' | null

  // Touch events
  rotation.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = false;
    swipeDirection = null;
    rotation.style.transition = "none";
  }, { passive: true });

  rotation.addEventListener("touchmove", function (e) {
    var dx = e.touches[0].clientX - startX;
    var dy = e.touches[0].clientY - startY;

    if (swipeDirection === null && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      swipeDirection = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
    }

    if (swipeDirection === "horizontal") {
      e.preventDefault();
      isDragging = true;
      rotation.style.transform = "translateX(" + dx + "px)";
    }
  }, { passive: false });

  rotation.addEventListener("touchend", function (e) {
    rotation.style.transition = "transform 0.3s ease, opacity 0.4s ease";
    rotation.style.transform = "";

    if (isDragging) {
      var diffX = e.changedTouches[0].clientX - startX;
      if (Math.abs(diffX) > 50) {
        if (diffX < 0) {
          goTo((current + 1) % quotes.length);
        } else {
          goTo((current - 1 + quotes.length) % quotes.length);
        }
      }
    }

    isDragging = false;
    swipeDirection = null;
  });

  // Mouse drag events for desktop
  var mouseDown = false;
  var mouseStartX = 0;
  var mouseStartY = 0;

  rotation.addEventListener("mousedown", function (e) {
    mouseDown = true;
    mouseStartX = e.clientX;
    mouseStartY = e.clientY;
    rotation.style.transition = "none";
    e.preventDefault();
  });

  document.addEventListener("mousemove", function (e) {
    if (!mouseDown) return;
    var dx = e.clientX - mouseStartX;
    rotation.style.transform = "translateX(" + dx + "px)";
  });

  document.addEventListener("mouseup", function (e) {
    if (!mouseDown) return;
    mouseDown = false;
    var diffX = e.clientX - mouseStartX;
    var diffY = e.clientY - mouseStartY;

    rotation.style.transition = "transform 0.3s ease, opacity 0.4s ease";
    rotation.style.transform = "";

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX < 0) {
        goTo((current + 1) % quotes.length);
      } else {
        goTo((current - 1 + quotes.length) % quotes.length);
      }
    }
  });

  // Initialize
  show(0);
  resetTimer();
})();
