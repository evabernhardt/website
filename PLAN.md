# Website Plan: Eva Bernhardt — Familiencoach

## 1. Project Overview

A static "Visitenkarte" (business card) website for Eva Bernhardt, a family coach in training. The site should build trust, explain who she is, and make it easy for families to get in touch.

**Tech stack:** Plain HTML, CSS (no framework, no JS dependencies unless needed)
**Hosting:** TBD (e.g. GitHub Pages, Netlify, simple web hosting)
**Domain:** eva-bernhardt.de
**Language:** German

---

## 2. What We Know (from provided content)

### Person & Background
- **Name:** Eva Bernhardt
- **Roles:** Mutter von zwei Kindern, Erzieherin, systemische Supervisorin, Kinder-, Jugend- und Familiencoach i.A.
- **Training:** Ausbildung bei der Akademie für Familiencoaching (in progress)
- **Looking for:** Families, parents, children and teens who want to be coached (as part of her training)

### Contact Details
- **Address:** Rotdornweg 15, 53177 Bonn
- **Phone:** 0176 32594722
- **Email:** info@eva-bernhardt.de
- **Website:** eva-bernhardt.de
- ~~WhatsApp~~ — bewusst weggelassen, passt nicht zum sensiblen Kontext

### Photos
6 professional portrait photos available (Eva-49, Eva-90, Eva-94, Eva-95, Eva-96, Eva-107). All are high-quality outdoor shots with a warm, approachable feel. Good variety:
- **Eva-49 / Eva-94** — Close-up portrait, warm smile (great for hero or about section)
- **Eva-90** — Half-body, leaning against wall, relaxed (good for about section)
- **Eva-95 / Eva-96** — Full-body, urban background (good for hero or wide banner)
- **Eva-107** — Sitting on stairs, close-up, approachable (good for contact section)

### Proposed Page Structure (from document)
The document outlines this flow:
1. **Hero / Titel** — Headline + tagline, e.g. „Gemeinsam Wege finden — Familiencoach für gelingende Beziehung"
2. **"Kennst du das?"** — Relatable family challenges (to be written — instruction says: *typische herausfordernde Beispiele für Familienalltag*)
3. **Über mich** — Bio text (draft provided, see above)
4. **Contact / CTA** — „Bei Interesse melde dich gerne bei mir…"

---

## 3. Open Questions (still needed before building)

### Content to create/decide
- [x] **Hero tagline:** „Gemeinsam Wege finden — Familiencoach für gelingende Beziehung"
- [x] **"Kennst du das?" section:** Alle 12 Beispiele aus `resources/kennst-du-das-vorschlaege.md` verwenden. UX-Lösung nötig, um die Seite nicht zu überfrachten (z.B. Karussell, Akkordeon nach Kategorie, oder animierter Textwechsel). Siehe Design-Entscheidung in Abschnitt 5.
- [x] **Email address:** info@eva-bernhardt.de
- [x] **Call to action:** Email (primary), Telefonnummer als Alternative. Kein WhatsApp — passt nicht zum sensiblen Kontext.

### Design
- [x] **Logo:** Blätter-Motiv + Name horizontal, mit Trennlinie. Datei: `resources/logo-entwuerfe/logo-sat-1.svg`. Farbe: #1A6B6E.
- [x] **Brand colors / mood:** Petrol (#1A6B6E) als Hauptfarbe, warme Beige-/Sandtöne als Hintergrund, sanftes Grau für Text.
- [x] **Inspiration:**
  - Aufbau gut: [familiencoaching.online](https://www.familiencoaching.online/), [familien-achtsam-leben.de](https://familien-achtsam-leben.de/), [kiraliebmann.de](https://kiraliebmann.de)
  - Abgelehnt (zu unübersichtlich): rosa-familia.de, katiasaalfrank.de, starkfuerkinder.de
  - Zu textlastig: fam-coach.de, jennielakenan.com
  - **Wichtigste Referenz für den Stil:** Unsere eigene Logo-Übersichtsseite (`resources/logo-entwuerfe/uebersicht.html`) — Segoe UI / system-sans, warmer Beige-Hintergrund (#f5f0eb), weiße Cards mit runden Ecken (border-radius: 12px), dezente Schatten, viel Luft.
- [x] **Tone:** Professionell, aber nahbar. Seriös genug um Vertrauen zu schaffen, warm genug um Hemmschwelle zu senken.

### Legal
- [x] **Impressum:** Erstellen wir aus Name + Adresse + Kontakt. Steuernummer noch nicht vorhanden, wird nachgetragen.
- [x] **Datenschutz:** Kein Analytics vorerst. Einfache Datenschutzseite reicht (kein Tracking, keine Cookies, kein Kontaktformular).

### Nice-to-have (not required for first version)
- [ ] Testimonials — to add later once you have coached clients
- [ ] Blog/articles section
- [ ] Social media links (Instagram, etc.)

---

## 4. Site Structure (updated)

Single-page layout based on the document's structure:

```
index.html (single page, sectioned)
├── Header / Navigation
├── Hero Section         — Tagline + photo + CTA button
├── "Kennst du das?"     — 12 Beispiele, kompakte UX (Karussell/Rotation)
├── Über mich            — Bio, photo, qualifications
├── Kontakt              — Contact details, CTA
├── Footer               — Impressum link, copyright
impressum.html           — Legal notice (required)
datenschutz.html         — Privacy policy (required)
```

---

## 5. Design Direction (proposed)

### Festgelegte Design-Sprache
- **Hintergrund:** Warmer Beige/Sand (#f5f0eb)
- **Cards/Sektionen:** Weiß, runde Ecken (border-radius: 12px), dezente Schatten (box-shadow)
- **Schrift:** Segoe UI / system-sans-serif, font-weight 300–400, viel Luft
- **Farbe:** Petrol #1A6B6E als Akzent, dunkles Grau für Fließtext
- **Ton:** Professionell, aber nahbar — nicht zu textlastig, eher kurze Blöcke
- **Vorbild:** Unsere Logo-Übersichtsseite als Stilreferenz

### „Kennst du das?" — UX-Konzept

Alle 12 Beispiele (4 Kategorien × 3 Stück) sollen gezeigt werden, ohne die Seite zu überladen. Mögliche Ansätze:

| Option | Beschreibung | Vorteil | Nachteil |
|--------|-------------|---------|----------|
| **Karussell** | Beispiele gleiten automatisch oder per Klick durch | Kompakt, einladend | Benötigt JS, manche Nutzer scrollen einfach weiter |
| **Kategorie-Tabs** | 4 Reiter (Alltag, Konflikte, Unsicherheit, Beziehung), Klick zeigt jeweilige Beispiele | Übersichtlich, Nutzer wählt selbst | Benötigt JS |
| **Akkordeon** | Kategorien aufklappbar, eines offen als Einstieg | Platzsparend, funktioniert auch ohne JS | Inhalte versteckt |
| **Zitat-Rotation** | Ein Beispiel prominent, wechselt mit sanfter Animation | Sehr elegant und ruhig | Benötigt JS, nicht alle Beispiele sofort sichtbar |

**Empfehlung:** Zitat-Rotation als primäre Darstellung — passt zur ruhigen, wertschätzenden Tonalität. Ein einzelnes Beispiel groß und zentral, sanfter Übergang zum nächsten, kleine Punkte/Dots zur Orientierung. Kategorien als dezente Überschrift darüber.

*(Awaiting your feedback before building)*

---

## 6. Project File Structure

```
eva-bernhardt.de/
├── PLAN.md               ← this file (living document)
├── resources/            ← raw content from you (photos, docs)
│   ├── Eva-*.jpg
│   └── Infos für Website.docx
├── assets/
│   └── images/           ← optimized photos for the site
├── css/
│   └── style.css         ← all styles
├── index.html            ← main page
├── impressum.html        ← legal notice
└── datenschutz.html      ← privacy policy
```

---

## 7. Suggested Next Steps

1. **You answer the open questions** in Section 3 (even partially is fine)
2. Especially: email address, "Kennst du das?" examples, and design preferences
3. I build a first draft with the content we have + placeholders for the rest
4. We iterate

---

*Last updated: 2026-02-07*
