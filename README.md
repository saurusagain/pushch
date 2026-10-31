# Push CH Web Via Baileys And SC Bot WA - By saurus

Aplikasi web modern berbasis Next.js (App Router) yang dirancang khusus untuk mengelola broadcast otomatis ke WhatsApp Channel (Newsletter) menggunakan Baileys socket engine, dilengkapi integrasi endpoint JSON terpusat (`/idch.json`) dan halaman generator (`/create`).

Dibangun dengan desain token presisi mengacu pada design system **astralune.cv** (Dark Mode, CSS Variables, 4px Grid Spacing, Geist Typography, dan 10 band terstruktur).

---

## ⚡ Fitur Utama

1. **Desain Presisi Mengikuti Astralune Design System**:
   - Skema warna gelap murni (`#0A0A0A`, surface `#272727`, text `#FFFFFF`, accent `#00FA9A`, primary `#0A84FF`).
   - Seluruh warna, spasi, radius, dan tipografi menggunakan CSS Variables (`var(--color-...)`, `var(--spacing-...)`).
   - Font: Geist (Heading & Body) dan Geist Mono (Code, Numerals, ID Channel).
   - Ikon murni SVG (tanpa emoji sebagai icon).
   - Struktur 10 Band resmi di halaman beranda.

2. **Endpoint Terpusat `/idch.json`**:
   - Menyediakan format JSON standar untuk bot WhatsApp / script Baileys:
     ```json
     [
       {
         "name": "saurus",
         "idch": [
           "120363418964199743@newsletter",
           "120363429190136593@newsletter"
         ]
       }
     ]
     ```
   - Dilengkapi header CORS (`Access-Control-Allow-Origin: *`) sehingga bot WA di VPS / cloud dapat langsung me-request `https://domain-anda.vercel.app/idch.json`.

3. **Halaman Generator `/create`**:
   - Form input Nama dan ID Channel (`@newsletter`).
   - **Otomatis Merge Nama Double**: Jika nama sudah ada di database, sistem tidak membuat 2 entitas nama melainkan langsung menggabungkan ID channel baru ke nama tersebut tanpa duplikasi ID.
   - **Live JSON Preview**: Menampilkan live preview format JSON yang siap dipakai.
   - **Tombol Salin JSON**: Sekali klik untuk copy ke clipboard.
   - **Tombol Kirim ke WhatsApp Admin (62895639043495)**: Otomatis membuka chat WhatsApp admin dengan pesan terformat rapi berisi nama, daftar channel, dan blok kode JSON.
   - **Tombol Simpan Langsung ke Web**: Menyimpan ke API `/api/idch`.

4. **Tier & Alur Pemesanan**:
   - **Tier Biasa**: Rp 20.000* (Bisa push hingga 3 channel kalian, harga bisa naik sewaktu-waktu).
   - **Tier Ultra**: Rp 50.000* (Bisa push UNLIMITED channel tanpa batasan, harga bisa naik sewaktu-waktu).
   - Alur: Chat admin -> Beli tier -> Ke `/create` -> Isi form -> Kirim ke admin -> Admin add manual ke bot.

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
cd push-ch-saurus
npm install
npm run dev
```

Buka browser di `http://localhost:3000`.

---

## 🌐 Cara Deploy ke Vercel

### Opsi 1: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opsi 2: Menggunakan GitHub / GitLab / Bitbucket
1. Buat repository baru di GitHub.
2. Push folder project ini ke repository Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit push-ch-saurus"
   git branch -M main
   git remote add origin <url-repo-anda>
   git push -u origin main
   ```
3. Buka dashboard [Vercel](https://vercel.com).
4. Klik **Add New Project** -> Pilih repository Anda.
5. Vercel akan otomatis mendeteksi framework **Next.js**. Klik **Deploy**.
6. Website dan endpoint `/idch.json` Anda langsung aktif!

---

## 📱 Kontak Admin Resmi
- **WhatsApp**: [0895639043495 (62895639043495)](https://wa.me/62895639043495)
- **Author**: By saurus

