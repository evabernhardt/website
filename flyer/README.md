# Flyer — Eva Bernhardt Familiencoaching

Druckfertige Flyer in zwei Formaten: Falt-Flyer (DIN A4 quer) und Aushänge (DIN A5 hochkant).

## Git-Workflow

Beim Verschieben von Dateien in Unterordner zeigt `git status` die alten Pfade als `deleted` und die neuen Ordner als `Untracked files`. Alles zusammen stagen:

```bash
git add flyer/
git rm --cached flyer/eltern-flyer-falt.html flyer/jugend-flyer-falt.html \
  flyer/flyer-falt.css flyer/eltern-flyer-falt.pdf flyer/jugend-flyer-falt.pdf 2>/dev/null || true
```

Oder einfach im Projektroot:

```bash
git add flyer/
```

Git erkennt Moves automatisch sobald Hinzufügen und Löschen gemeinsam gestaget sind.

---

## PDFs neu generieren

```bash
chmod +x generate.sh
./generate.sh
```

**Voraussetzungen:**
- Python 3 mit `qrcode[pil]` (`pip3 install "qrcode[pil]"`)
- Google Chrome (für Headless PDF-Erzeugung)

---

## Falt-Flyer (`falt/`)

DIN A4 quer (297mm × 210mm), Wickelfalz, 6 Panels (2 Seiten).

| Datei | Zielgruppe | Auslage-Orte |
|-------|-----------|--------------|
| `falt/eltern-flyer-falt.pdf` | Eltern / Familien | Kindergärten, Schulen, Arztpraxen |
| `falt/jugend-flyer-falt.pdf` | Jugendliche ab 12 J. | Jugendtreffs, Schulen, Beratungsstellen |

### Aufbau (je Falt-Flyer)

**Seite 1 (Außen):** Rückseite | Innenklappe (Teaser) | Titelseite (Cover)

**Seite 2 (Innen):**
- Eltern: Kindercoaching | Jugendcoaching | Eltern- & Familiencoaching | Ablauf
- Jugend: Was dir Coaching bringt | So läuft es ab | Was dich erwartet

---

## Aushänge (`aushang/`)

DIN A5 hochkant (148mm × 210mm), einseitig. Für Kitas, Supermärkte, Schulen, Arztpraxen etc.

| Datei | Zielgruppe | Design |
|-------|-----------|--------|
| `aushang/jugend-aushang-1.pdf` | Jugendliche | Dunkel (Teal), Foto oben, direkt |
| `aushang/jugend-aushang-2.pdf` | Jugendliche | Hell (Creme), Teal-Header, strukturiert |
| `aushang/eltern-aushang-1.pdf` | Eltern / Familien | Familienfoto oben, Coaching-Übersicht |
| `aushang/eltern-aushang-2.pdf` | Eltern / Familien | Teal-Kopfband, emotionaler Einstieg |

---

## Dateistruktur

```
flyer/
├── generate.sh              # PDF-Generierungsskript (alle Varianten)
├── qr-code.png              # QR-Code zu eva-bernhardt.de (geteilt)
├── README.md
├── falt/                    # Falt-Flyer (A4 quer, Wickelfalz)
│   ├── eltern-flyer-falt.html
│   ├── eltern-flyer-falt.pdf
│   ├── jugend-flyer-falt.html
│   ├── jugend-flyer-falt.pdf
│   └── flyer-falt.css
├── aushang/                 # Aushänge (A5 hochkant, einseitig)
│   ├── jugend-aushang-1.html
│   ├── jugend-aushang-2.html
│   ├── eltern-aushang-1.html
│   ├── eltern-aushang-2.html
│   └── flyer-aushang.css
└── alt/                     # Frühere Entwürfe (veraltet)
```

---

## CSS-Klassen

### flyer-falt.css (Falt-Flyer)

| Klasse | Verwendung |
|--------|-----------|
| `.sheet` | A4-quer-Raster (3 × 99mm) |
| `.panel--cover` | Titelseite mit Foto-Hintergrund |
| `.panel--back` / `.panel--back-dark` | Rückseite hell / dunkel |
| `.panel--teaser` / `.panel--teaser-dark` | Innenklappe hell / dunkel |
| `.panel--coaching` | Coaching-Inhalts-Panel |
| `.panel--bullets` | Bullet-Listen-Panel (Jugend) |
| `.panel--ablauf` | Ablauf-Schritte |
| `.panel--expect` | Erwartungen mit Icons (Jugend) |

### flyer-aushang.css (Aushänge)

| Klasse | Verwendung |
|--------|-----------|
| `.sheet` | A5-hochkant-Container |
| `.sheet--dark` | Dunkle Teal-Variante (Jugend 1) |
| `.hero` / `.hero-img` | Foto-Bereich oben |
| `.body` | Flexibler Inhaltsbereich |
| `.footer` | Kontaktfußzeile |
| `.bullet-card` / `.bullet-card--dark` | Aufzählungskarten |
| `.coaching-grid` / `.coaching-card` | 2×2-Coaching-Übersicht |
| `.steps` / `.step` | Dreistufiger Ablauf |
| `.tag` / `.tag--white` | Chip-Tags |

---

## Farben & Branding

| Element | Wert |
|---------|------|
| Primärfarbe | `#1A6B6E` (teal) |
| Jugend-Dunkel | `#15595B` |
| Hintergrund hell | `#f5f0eb` (warm off-white) |
| Slogan | „Gemeinsam Wege finden" |
| Logo-Tagline | „Familiencoaching für gelingende Beziehungen" |

## Logo-Einbindung

Das Logo wird als **inline SVG** in weiß eingebettet (für dunkle Hintergründe):

```html
<svg viewBox="0 0 220 55">
  <!-- Blatt links -->
  <path d="M 22 45 C 9 36, 7 19, 22 12 ..." fill="white" opacity="0.8"/>
  <path d="M 28 45 C 39 38, 41 25, 30 20 ..." fill="white" opacity="0.45"/>
  <!-- Name -->
  <text x="42" y="27" font-size="16" font-weight="300" fill="white" opacity="0.9">Eva Bernhardt</text>
  <!-- Trennlinie -->
  <line x1="42" y1="31" x2="175" y2="31" stroke="white" stroke-width="0.4" opacity="0.2"/>
  <!-- Tagline -->
  <text x="42" y="42" font-size="5.5" fill="white" opacity="0.5" letter-spacing="1.4">FAMILIENCOACHING</text>
</svg>
```
