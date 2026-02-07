/* Quote rotation for "Kennst du das?" section */
(function () {
  var quotes = [
    {
      category: "Alltag & Überforderung",
      text: "Du gibst jeden Tag dein Bestes für deine Familie — und trotzdem bleibt abends das Gefühl, dass es irgendwie nicht reicht. Dabei zeigt allein dieser Gedanke, wie viel dir daran liegt."
    },
    {
      category: "Alltag & Überforderung",
      text: "Morgens jonglierst du Anziehen, Frühstück und Zähneputzen gleichzeitig — und wunderst dich, woher andere Eltern scheinbar die Ruhe dafür nehmen. Du bist damit nicht allein."
    },
    {
      category: "Alltag & Überforderung",
      text: "Du gibst so viel Kraft für Haushalt, Arbeit und die Bedürfnisse deiner Kinder — und merkst, dass für dich selbst kaum noch etwas übrig bleibt. Auch deine Bedürfnisse zählen."
    },
    {
      category: "Konflikte & Machtkämpfe",
      text: "Du nimmst dir fest vor, gelassen zu bleiben — und wenn es dann doch laut wird, ärgerst du dich über dich selbst. Dabei zeigt dein Vorsatz, wie sehr dir ein liebevoller Umgang am Herzen liegt."
    },
    {
      category: "Konflikte & Machtkämpfe",
      text: "Dein Kind hat große Gefühle, die es noch nicht alleine tragen kann — und du stehst daneben und wünschst dir, besser helfen zu können. Dieses Mitfühlen ist bereits ein wertvoller erster Schritt."
    },
    {
      category: "Konflikte & Machtkämpfe",
      text: "Du versuchst, bei Geschwisterstreit fair und geduldig zu vermitteln — und merkst, dass deine Energie dafür manchmal einfach nicht ausreicht. Das ist menschlich und völlig okay."
    },
    {
      category: "Unsicherheit & Zweifel",
      text: "Du informierst dich, liest, hörst Podcasts und fragst andere Eltern — weil du das Beste für dein Kind möchtest. Dass du dich so engagierst, sagt viel über dich als Elternteil."
    },
    {
      category: "Unsicherheit & Zweifel",
      text: "Abends liegst du wach und fragst dich: \u201eMache ich das eigentlich richtig?\u201c — dieser Gedanke zeigt, wie reflektiert und verantwortungsvoll du mit deiner Rolle umgehst."
    },
    {
      category: "Unsicherheit & Zweifel",
      text: "Du möchtest vieles anders machen als deine eigenen Eltern — und suchst nach einem Weg, der sich für dich und deine Familie stimmig anfühlt. Allein dieses Bewusstsein ist ein großer Schritt."
    },
    {
      category: "Beziehung & Verbindung",
      text: "Du spürst, dass zwischen dir und deinem Kind gerade etwas fehlt — und du wünschst dir, wieder näher zusammenzufinden. Dass du das wahrnimmst, zeigt, wie wichtig dir eure Beziehung ist."
    },
    {
      category: "Beziehung & Verbindung",
      text: "Seit die Kinder da sind, bleibt für die Partnerschaft kaum noch Raum — obwohl ihr euch so sehr wünscht, auch als Paar wieder mehr füreinander da zu sein."
    },
    {
      category: "Beziehung & Verbindung",
      text: "Dein Teenager braucht gerade Abstand, und du vermisst die Vertrautheit von früher. Dein Wunsch nach Verbindung ist ein Zeichen von Liebe — auch wenn es sich gerade anders anfühlt."
    }
  ];

  var current = 0;
  var rotation = document.querySelector(".quote-rotation");
  var categoryEl = document.querySelector(".quote-category");
  var textEl = document.querySelector(".quote-text");
  var dotsContainer = document.querySelector(".quote-dots");

  if (!rotation || !categoryEl || !textEl || !dotsContainer) return;

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
    categoryEl.textContent = quotes[index].category;
    textEl.textContent = quotes[index].text;

    var dots = dotsContainer.querySelectorAll(".quote-dot");
    dots.forEach(function (d, i) {
      d.className = "quote-dot" + (i === index ? " active" : "");
    });
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

  // Initialize
  show(0);
  resetTimer();
})();
