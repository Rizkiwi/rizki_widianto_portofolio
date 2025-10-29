# Rizki Widianto - Portfolio

Portfolio website profesional untuk Data Engineer & Data Analyst yang dibangun dengan React, Vite, TypeScript, dan Tailwind CSS.

## 🚀 Teknologi

- **React 18** - Library UI modern
- **Vite** - Build tool super cepat
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Komponen UI yang beautiful
- **Lucide React** - Icon set

## 📋 Fitur

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode
- ✅ Smooth scroll & animations
- ✅ Project filtering by tags
- ✅ SEO optimized (meta tags, JSON-LD, sitemap)
- ✅ Performance optimized (lazy loading, code splitting)
- ✅ Accessible (ARIA labels, keyboard navigation)

## 🛠️ Instalasi & Development

### Prasyarat

- Node.js 18+ dan npm/yarn/pnpm

### Setup Lokal

```bash
# Clone repository
git clone https://github.com/rizkiwidianto/portfolio.git
cd portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

Server development akan berjalan di `http://localhost:8080`

## 📦 Struktur Folder

```
portfolio/
├── public/
│   ├── assets/
│   │   └── cv.pdf           # File CV (replace dengan CV asli)
│   ├── data/
│   │   └── projects.json    # Data proyek
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/              # Gambar dan media
│   │   ├── profile.jpg
│   │   ├── highlight.jpg
│   │   └── projects/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Index.tsx       # Main page
│   ├── index.css           # Global styles & design system
│   └── main.tsx
└── README.md
```

## 🎨 Customization

### 1. Update Konten Personal

Edit file berikut dengan informasi Anda:

- `src/components/Hero.tsx` - Nama, deskripsi, stats
- `src/components/Highlights.tsx` - Pengalaman kerja & prestasi
- `src/components/Contact.tsx` - Email, LinkedIn, GitHub
- `public/data/projects.json` - Proyek-proyek Anda

### 2. Ganti Gambar

Letakkan gambar Anda di `src/assets/`:

- `profile.jpg` - Foto profil (512x512px)
- `highlight.jpg` - Hero/highlight image (1280x720px)
- `projects/*.png` - Screenshot proyek (1024x576px)

Kemudian import di komponen yang sesuai.

### 3. Update CV

Replace file `public/assets/cv.pdf` dengan CV Anda.

### 4. Ubah Warna & Desain

Edit design system di `src/index.css`:

```css
:root {
  --primary: 213 84% 45%;      /* Warna utama */
  --accent: 203 92% 56%;       /* Warna aksen */
  --background: 220 20% 97%;   /* Background */
  /* ... */
}
```

## 🌐 Deploy ke GitHub Pages

### Opsi 1: Via GitHub Settings (Recommended)

1. Push code ke GitHub repository
2. Buka **Settings** → **Pages**
3. Pilih **Source**: Deploy from a branch
4. Pilih branch `main` dan folder `/root`
5. Klik **Save**

### Opsi 2: Menggunakan gh-pages (Otomatis)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Tambahkan script di package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Konfigurasi Custom Domain (Opsional)

1. Buat file `public/CNAME` dengan domain Anda:

```
yourdomain.com
```

2. Di repository settings → Pages, masukkan custom domain
3. Update DNS provider dengan CNAME record pointing ke `username.github.io`

## 🔧 Update Data Proyek

Edit `public/data/projects.json`:

```json
[
  {
    "title": "Nama Project",
    "tags": ["ETL", "Analytics"],
    "stack": ["Python", "SQL"],
    "summary": "Deskripsi singkat project",
    "image": "/src/assets/projects/project-image.png",
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com",
    "highlights": [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
]
```

## ⚡ Performance Tips

- Gunakan WebP/AVIF untuk gambar (lebih kecil)
- Compress gambar sebelum upload (max 200KB per gambar)
- Lazy load images dengan `loading="lazy"`
- Code splitting otomatis dengan Vite

## 📊 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags untuk social media
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML (header, main, section, article)
- ✅ Alt text untuk semua gambar
- ✅ Fast loading time (Lighthouse score >90)

## 🐛 Troubleshooting

**Build error?**
- Pastikan semua dependencies terinstall: `npm install`
- Clear cache: `rm -rf node_modules && npm install`

**Images tidak muncul?**
- Pastikan path gambar benar
- Import gambar sebagai ES6 module di component

**GitHub Pages 404?**
- Pastikan build output di folder `dist`
- Cek base path di `vite.config.ts`

## 📝 License

MIT License - bebas digunakan untuk proyek personal/komersial

## 📧 Kontak

Rizki Widianto
- Email: rizki.widianto@example.com
- LinkedIn: [linkedin.com/in/rizkiwidianto](https://linkedin.com/in/rizkiwidianto)
- GitHub: [github.com/rizkiwidianto](https://github.com/rizkiwidianto)

---

Dibuat dengan ❤️ menggunakan React & Vite
