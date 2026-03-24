# Flyer — Eva Bernhardt Familiencoaching

Zwei Falt-Flyer im DIN-lang-Format (99mm × 210mm), dreiseitig gefaltet (6 Panels).

## Aktuelle Varianten

| Datei | Zielgruppe | Auslage-Orte |
|-------|-----------|--------------|
| `eltern-flyer-falt.pdf` | Eltern / Familien | Kindergärten, Schulen, Arztpraxen |
| `jugend-flyer-falt.pdf` | Jugendliche ab 12 J. | Jugendtreffs, Schulen, Beratungsstellen |

## PDFs neu generieren

```bash
chmod +x generate.sh
./generate.sh
```

**Voraussetzungen:**
- Python 3 mit `qrcode[pil]` (`pip3 install "qrcode[pil]"`)
- Google Chrome (für Headless PDF-Erzeugung)

## Dateistruktur

```
flyer/
├── eltern-flyer-falt.html   # Eltern-Variante (aktuell)
├── eltern-flyer-falt.pdf    # generiertes PDF
├── jugend-flyer-falt.html   # Jugend-Variante (aktuell)
├── jugend-flyer-falt.pdf    # generiertes PDF
├── flyer-falt.css           # Gemeinsames Styling für Falt-Flyer
├── generate.sh              # PDF-Generierungsskript
├── qr-code.png              # QR-Code zu eva-bernhardt.de
├── alt/                     # Frühere einseitige DIN-A5-Entwürfe (veraltet)
└── README.md
```

## Flyer-Aufbau (je Falt-Flyer)

**Seite 1 (Außen) — 3 Panels:**
- **Panel 1: Rückseite** — Portrait-Foto, Name, Slogan, Rolle, Kontakt, QR-Code, Tags
- **Panel 2: Innenklappe (Teaser)** — emotionales Bild, "Kennst du das?"-Zitat, kurzer Text
- **Panel 3: Titelseite (Cover)** — Hintergrundfoto, Überlagerung, vollständiges Logo oben links, große Headline, Untertitel

**Seite 2 (Innen) — 3 Panels:**
- Eltern-Variante: Kindercoaching | Jugendcoaching | Elterncoaching + Ablauf
- Jugend-Variante: Was Coaching bringt | So läuft es ab | Was dich erwartet

## CSS-Klassen (flyer-falt.css)

| Klasse | Verwendung |
|--------|-----------|
| `.panel--cover` | Titelseite mit Foto-Hintergrund |
| `.panel--back` | Rückseite hell (Eltern-Variante) |
| `.panel--back-dark` | Rückseite dunkel (Jugend-Variante) |
| `.panel--teaser` | Innenklappe |
| `.panel--coaching` | Coaching-Inhalts-Panel |
| `.panel--bullets` | Bullet-Listen-Panel (Jugend) |
| `.cover-logo` | Logo oben links auf Cover — SVG 52mm breit |
| `.back-name` | Name auf Rückseite |
| `.back-slogan` | Slogan "Gemeinsam Wege finden" unter dem Namen |
| `.back-role` | Berufsbezeichnung auf Rückseite |

## Logo-Einbindung

Das vollständige Logo (`../assets/images/logo.svg`) wird als **inline SVG** in weiß eingebettet — mit Blatt-Pfaden, "Eva Bernhardt", Trennlinie und "Familiencoaching für gelingende Beziehungen". Farben: `fill="white"` statt `#1A6B6E`, weil der Hintergrund dunkel (teal) ist.

```html
<div class="cover-logo">
  <svg viewBox="0 0 440 120">
    <!-- Blatt links -->
    <path d="M 44 90 C 18 72, 14 38, 44 24 ..." fill="white" opacity="0.8"/>
    <path d="M 56 90 C 78 76, 82 50, 60 40 ..." fill="white" opacity="0.45"/>
    <!-- Name -->
    <text x="105" y="52" font-size="32" font-weight="300" fill="white" opacity="0.9" letter-spacing="0.5">Eva Bernhardt</text>
    <!-- Trennlinie -->
    <line x1="105" y1="62" x2="360" y2="62" stroke="white" stroke-width="0.5" opacity="0.25"/>
    <!-- Tagline -->
    <text x="105" y="80" font-size="11" font-weight="300" fill="white" opacity="0.6" letter-spacing="1.8">Familiencoaching für gelingende Beziehungen</text>
  </svg>
</div>
```

## Farben & Branding

| Element | Wert |
|---------|------|
| Primärfarbe | `#1A6B6E` (teal) |
| Jugend-Dunkel | `#15595B` |
| Hintergrund hell | `#f5f0eb` (warm off-white) |
| Slogan | „Gemeinsam Wege finden" |
| Logo-Tagline | „Familiencoaching für gelingende Beziehungen" |
| Logo-Datei | `../assets/images/logo.svg` (nur für helle Hintergründe) |
