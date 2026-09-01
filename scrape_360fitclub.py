import json
import re
from pathlib import Path
from urllib.parse import urlparse
import requests

ROOT = Path(__file__).parent
OUT = ROOT / "research" / "360fitclub"
IMG = OUT / "images"
VID = OUT / "videos"
IMG.mkdir(parents=True, exist_ok=True)
VID.mkdir(parents=True, exist_ok=True)

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36"}

maps_info = {
    "name": "360FITCLUB",
    "category": "Pusat Kebugaran",
    "rating": 4.9,
    "review_count": 19,
    "address": "Jl. KH. Mas'ud No.153, RT.003/RW.04, Tridaya Sakti, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17518",
    "phone": "0877-8926-6205",
    "plus_code": "Q32H+X8 Tridaya Sakti, Kabupaten Bekasi, Jawa Barat",
    "hours_note": "Buka · Tutup pukul 22.00 (hari pembukaan perlu dikonfirmasi)",
    "instagram": "https://www.instagram.com/360fitclub.id/",
    "source": "User-provided Google Maps listing text; verify before publication",
    "reviews": [
        {"author": "Buat baja Ringan", "rating": 5, "age": "6 bulan lalu", "text": "Oke sih tempatnya, enak juga. Tapi saran saya tempat merokoknya bisa dipindah tidak ya? Karena pakai roster asepnya masuk kita lagi butuh napas hirup asep rokok.", "owner_reply": "Terima kasih atas ulasannya dan mohon maaf atas ketidaknyamanannya. Kami menghargai masukannya dan akan memperbaikinya."},
        {"author": "Adellia Rizqy Syaumi P", "rating": 5, "age": "setahun lalu", "text": "Enak banget tempatnya, bersih, alat lengkap. Feels like home."},
        {"author": "Tarita Tarita", "rating": 5, "age": "11 bulan lalu", "text": "Halo mau tanya, studionya apa bisa disewakan sejam/dua jam oleh non-member?", "owner_reply": "Bisa, chat ke nomor 087789266205."}
    ],
    "review_highlights": ["Pas banget di depan rumah", "Oke sih tempatnya, enak juga.", "Orangnya ramah, tempatnya bersih dan berkualitas"],
    "asset_usage_note": "Images/videos downloaded from public search results for research only. Confirm ownership and obtain permission before publishing commercially."
}
(OUT / "google-maps-info.json").write_text(json.dumps(maps_info, ensure_ascii=False, indent=2), encoding="utf-8")

session = requests.Session()
session.headers.update(HEADERS)
results = {"instagram": [], "google_images": [], "videos": [], "errors": []}

def clean_url(s):
    return s.replace("\\u0026", "&").replace("\\/", "/").replace("\\u003D", "=").replace("\\u003F", "?")

def get(url):
    try:
        r = session.get(url, timeout=30)
        r.raise_for_status()
        return r
    except Exception as e:
        results["errors"].append({"url": url, "error": str(e)})
        return None

def download(url, folder, stem, referer=None):
    r = get(url)
    if not r:
        return None
    ctype = r.headers.get("content-type", "").lower()
    if "video" in ctype or folder == VID:
        ext = ".mp4"
    elif "png" in ctype:
        ext = ".png"
    elif "webp" in ctype:
        ext = ".webp"
    else:
        ext = ".jpg"
    path = folder / f"{stem}{ext}"
    path.write_bytes(r.content)
    return str(path.relative_to(ROOT))

# Public Instagram page: collect original CDN images and any public video URLs present in embedded data.
ig = get("https://www.instagram.com/360fitclub.id/")
if ig:
    text = ig.text
    raw = re.findall(r'https?://[^"\\ ]+', text)
    ig_urls = []
    for u in raw:
        u = clean_url(u)
        u = u.split('\\"')[0]
        if ("scontent" in u or "cdninstagram.com" in u or "fbcdn.net" in u) and u not in ig_urls:
            ig_urls.append(u)
    # Prefer actual Instagram CDN post media; exclude Instagram UI/icon assets.
    img_urls = [u for u in ig_urls if re.search(r'\.(?:jpg|jpeg|png|webp)', u, re.I) and "static.cdninstagram.com" not in u and "profile_pic" not in u]
    video_urls = [u for u in ig_urls if ".mp4" in u.lower()]
    for i, u in enumerate(img_urls[:12], 1):
        p = download(u, IMG, f"instagram-{i:02d}")
        if p: results["instagram"].append({"file": p, "source": u})
    for i, u in enumerate(video_urls[:3], 1):
        p = download(u, VID, f"instagram-{i:02d}")
        if p: results["videos"].append({"file": p, "source": u})

# Google Images result thumbnails for the business name/location.
g = get("https://www.google.com/search?q=360FITCLUB+Tambun+Bekasi&tbm=isch")
if g:
    urls = []
    for u in re.findall(r'https?://[^" ]+', g.text):
        u = clean_url(u)
        if re.search(r'\.(?:jpg|jpeg|png|webp)', u, re.I) and "gstatic.com" not in u:
            u = u.split('\\"')[0]
            if u not in urls: urls.append(u)
    for i, u in enumerate(urls[:12], 1):
        p = download(u, IMG, f"google-result-{i:02d}")
        if p: results["google_images"].append({"file": p, "source": u})

(OUT / "media-manifest.json").write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({k: len(v) for k, v in results.items() if isinstance(v, list)}, ensure_ascii=False))
print("output:", OUT)
print("errors:", len(results["errors"]))
