#!/bin/bash
# Generiert QR-Code und druckfertige PDFs aus den Flyer-HTML-Dateien.
# Voraussetzungen: Python 3 + qrcode[pil], Google Chrome

set -e
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

echo "=== QR-Code generieren ==="
python3 -c "
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import SolidFillColorMask
qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=20, border=2)
qr.add_data('https://eva-bernhardt.de')
qr.make(fit=True)
img = qr.make_image(image_factory=StyledPilImage, color_mask=SolidFillColorMask(back_color=(255,255,255), front_color=(26,107,110)))
img.save('qr-code.png')
print('  -> qr-code.png')
"

# --- DIN-lang Flyer (einseitig) ---
echo "=== Eltern-Flyer (DIN lang) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="eltern-flyer.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/eltern-flyer.html" 2>/dev/null
echo "  -> eltern-flyer.pdf"

echo "=== Jugend-Flyer (DIN lang) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="jugend-flyer.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/jugend-flyer.html" 2>/dev/null
echo "  -> jugend-flyer.pdf"

# --- Falt-Flyer (A4 quer, Wickelfalz, 2 Seiten) ---
echo "=== Eltern-Faltflyer (A4 quer) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="eltern-flyer-falt.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/eltern-flyer-falt.html" 2>/dev/null
echo "  -> eltern-flyer-falt.pdf"

echo "=== Jugend-Faltflyer (A4 quer) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="jugend-flyer-falt.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/jugend-flyer-falt.html" 2>/dev/null
echo "  -> jugend-flyer-falt.pdf"

echo "=== Fertig! ==="
echo "Die PDFs liegen in: $(pwd)"
