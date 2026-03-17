# Flyer — Eva Bernhardt Familiencoaching

Zwei Flyer-Varianten im DIN-A5-Format (148 x 210 mm), einseitig.

## Varianten

| Datei | Zielgruppe | Auslage-Orte |
|-------|-----------|--------------|
| `eltern-flyer.pdf` | Eltern | Kindergärten, Schulen, Arztpraxen |
| `jugend-flyer.pdf` | Jugendliche | Jugendtreffs, Schulen, Beratungsstellen |

## PDFs neu generieren

```bash
chmod +x generate.sh
./generate.sh
```

**Voraussetzungen:**
- Python 3 mit `qrcode[pil]` (`pip3 install "qrcode[pil]"`)
- Google Chrome (für Headless PDF-Erzeugung)

## Dateien bearbeiten

- `flyer.css` — Gemeinsames Styling für beide Flyer
- `eltern-flyer.html` — Inhalt/Layout Eltern-Variante
- `jugend-flyer.html` — Inhalt/Layout Jugend-Variante
- `qr-code.png` — QR-Code zu eva-bernhardt.de (wird von generate.sh erzeugt)
