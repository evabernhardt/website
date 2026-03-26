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

# --- Falt-Flyer (A4 quer, Wickelfalz, 2 Seiten) ---
echo "=== Eltern-Faltflyer (A4 quer) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="falt/eltern-flyer-falt.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/falt/eltern-flyer-falt.html" 2>/dev/null
echo "  -> falt/eltern-flyer-falt.pdf"

echo "=== Jugend-Faltflyer (A4 quer) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="falt/jugend-flyer-falt.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/falt/jugend-flyer-falt.html" 2>/dev/null
echo "  -> falt/jugend-flyer-falt.pdf"

# --- Aushang-Flyer (DIN A5 hochkant, einseitig) ---
echo "=== Jugend-Aushang 1 (dunkel, direkt) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="aushang/jugend-aushang-1.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/aushang/jugend-aushang-1.html" 2>/dev/null
echo "  -> aushang/jugend-aushang-1.pdf"

echo "=== Jugend-Aushang 2 (hell, strukturiert) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="aushang/jugend-aushang-2.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/aushang/jugend-aushang-2.html" 2>/dev/null
echo "  -> aushang/jugend-aushang-2.pdf"

echo "=== Eltern-Aushang 1 (Foto, Coaching-Übersicht) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="aushang/eltern-aushang-1.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/aushang/eltern-aushang-1.html" 2>/dev/null
echo "  -> aushang/eltern-aushang-1.pdf"

echo "=== Eltern-Aushang 2 (emotionaler Einstieg) ==="
"$CHROME" \
  --headless --disable-gpu \
  --print-to-pdf="aushang/eltern-aushang-2.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/aushang/eltern-aushang-2.html" 2>/dev/null
echo "  -> aushang/eltern-aushang-2.pdf"

echo "=== Fertig! ==="
echo "PDFs liegen in: $(pwd)/falt/ und $(pwd)/aushang/"
