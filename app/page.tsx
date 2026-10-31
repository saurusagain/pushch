import React from 'react';
import Link from 'next/link';
import {
  SendIcon,
  TerminalIcon,
  DatabaseIcon,
  UsersIcon,
  LayersIcon,
  ShieldCheckIcon,
  LockIcon,
  TagIcon,
  ZapIcon,
  MessageCircleIcon,
  ClipboardIcon,
  HomeIcon,
  ExternalLinkIcon,
  CheckIcon,
} from '../components/Icons';

export default function HomePage() {
  const adminPhone = '62895639043495';
  const waBuyUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(
    'Halo Admin Saurus, saya mau beli akses Push Channel WhatsApp (Tier Biasa 20k / Tier Ultra 50k).'
  )}`;

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', position: 'relative' }}>
      {/* 
        Band 1: header (header)
        Padding Y: 16px / 0px, 1-up row, height: 60px
        TODO(spec): header position (sticky, fixed, or scrolls away)
      */}
      <header
        style={{
          paddingTop: 'var(--spacing-sm)',
          paddingBottom: '0px',
          height: '60px',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-background)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-accent)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-secondary)',
                background: 'var(--color-surface)',
              }}
            >
              <SendIcon />
            </span>
            <span style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Push CH Saurus
            </span>
            <span
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '2.4px',
                border: '1px solid var(--color-border)',
                paddingLeft: 'var(--spacing-2xs)',
                paddingRight: 'var(--spacing-2xs)',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              BAILEYS
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <Link
              href="/idch.json"
              target="_blank"
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-3xs)',
              }}
            >
              <DatabaseIcon />
              <span>/idch.json</span>
            </Link>
            <Link href="/create" className="btn-primary">
              <span>Ke /create</span>
              <ExternalLinkIcon />
            </Link>
          </div>
        </div>
      </header>

      {/* 
        Band 2: section (hero)
        Heading: Wujudkan ide digitalmu bareng Astralune (Push ch web Via Baileys And sc bot wa By saurus)
        Padding Y: 80px, stacked, height: ~502px
      */}
      <section
        style={{
          paddingTop: 'var(--spacing-5xl)',
          paddingBottom: 'var(--spacing-5xl)',
          background: 'var(--gradient-radial)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2xs)',
              padding: 'var(--spacing-3xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-secondary)' }} />
            <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', letterSpacing: '2.4px', textTransform: 'uppercase' }}>
              By saurus &bull; Baileys Engine
            </span>
          </div>

          <h1
            style={{
              fontSize: 'var(--font-size-display)',
              lineHeight: '75.5px',
              fontWeight: 600,
              letterSpacing: '-1.8px',
              maxWidth: '860px',
              background: 'var(--gradient-heading)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            Push ch web Via Baileys And sc bot wa
          </h1>

          <p
            style={{
              fontSize: 'var(--font-size-h1)',
              lineHeight: '20px',
              color: 'var(--color-text-muted)',
              maxWidth: '680px',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            Layanan otomatisasi broadcast newsletter WhatsApp Channel menggunakan script bot Baileys performa tinggi.
            Cepat, anti-delay, terstruktur dengan API live endpoint, dan dikonfirmasi langsung oleh admin resmi.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', justifyContent: 'center' }}>
            <a
              href={waBuyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-secondary"
            >
              <MessageCircleIcon />
              <span>Beli Akses ke Admin (WA)</span>
            </a>
            <Link href="/create" className="btn-outline">
              <ClipboardIcon />
              <span>Input IDCH (/create)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 
        Band 3: section
        Padding Y: 0px / 48px, stacked, height: ~144px
      */}
      <section
        style={{
          paddingTop: '0px',
          paddingBottom: 'var(--spacing-3xl)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-surface)',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xs)' }}>
              <span style={{ color: 'var(--color-secondary)' }}><CheckIcon /></span>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>Engine: </span>
              <span className="font-mono" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-primary)' }}>
                @whiskeysockets/baileys
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xs)' }}>
              <span style={{ color: 'var(--color-info)' }}><DatabaseIcon /></span>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>Endpoint: </span>
              <span className="font-mono" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-secondary)' }}>
                /idch.json
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xs)' }}>
              <span style={{ color: 'var(--color-secondary)' }}><TagIcon /></span>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>Mulai dari: </span>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                Rp 20.000 (Tier Biasa)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xs)' }}>
              <span style={{ color: 'var(--color-primary)' }}><ShieldCheckIcon /></span>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>Admin Resmi: </span>
              <span className="font-mono" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-primary)' }}>
                {adminPhone}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Band 4: section
        Heading: Apa aja yang bisa kami bikin
        Padding Y: 80px, 3-col grid, height: ~606px
      */}
      <section
        id="fitur"
        style={{
          paddingTop: 'var(--spacing-5xl)',
          paddingBottom: 'var(--spacing-5xl)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <span
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '2.4px',
                textTransform: 'uppercase',
              }}
            >
              Fitur Utama
            </span>
            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: '40px',
                fontWeight: 600,
                letterSpacing: '-0.9px',
                marginTop: 'var(--spacing-2xs)',
              }}
            >
              Apa aja yang bisa kami bikin
            </h2>
          </div>

          <div className="grid-3col">
            {/* Card 1 */}
            <div className="card-surface">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                <SendIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                Push Channel WhatsApp Newsletter
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Kirim broadcast otomatis ke channel WhatsApp (akhiran @newsletter) dalam hitungan detik.
                Tepat sasaran ke seluruh follower channel tanpa perlu menyimpan kontak satu per satu.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-surface">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                <TerminalIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                SC Bot WA Berbasis Baileys
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Source code bot WhatsApp modern dengan multi-device socket. Kode terstruktur rapi,
                ringan, mudah di-deploy di VPS, Vercel, maupun Railway dengan kestabilan uptime tinggi.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-surface">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                <DatabaseIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                Live Central Endpoint (/idch.json)
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Bot Anda cukup mengambil data channel dari endpoint /idch.json. Format JSON fleksibel
                dan otomatis mengelompokkan ID channel per client nama tanpa bentrok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Band 5: section
        Heading: Detail kecil yang bikin beda
        Padding Y: 80px, 4-col grid, height: ~561px
      */}
      <section
        id="detail"
        style={{
          paddingTop: 'var(--spacing-5xl)',
          paddingBottom: 'var(--spacing-5xl)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <span
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '2.4px',
                textTransform: 'uppercase',
              }}
            >
              Keunggulan Sistem
            </span>
            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: '40px',
                fontWeight: 600,
                letterSpacing: '-0.9px',
                marginTop: 'var(--spacing-2xs)',
              }}
            >
              Detail kecil yang bikin beda
            </h2>
          </div>

          <div className="grid-4col">
            <div className="card-surface">
              <div style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                <UsersIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                Multi-User Support
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Tidak cuma saurus, endpoint dapat menampung banyak nama pengguna lain secara terisolasi.
              </p>
            </div>

            <div className="card-surface">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                <LayersIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                Auto Merge Nama
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Jika nama sudah terdaftar, ID channel baru otomatis ditambahkan ke nama tersebut tanpa duplikasi.
              </p>
            </div>

            <div className="card-surface">
              <div style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                <ShieldCheckIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                Validasi Newsletter
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Hanya menerima format channel resmi (@newsletter) untuk menjamin socket bot berjalan lancar.
              </p>
            </div>

            <div className="card-surface">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                <LockIcon />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-2xs)' }}>
                Verifikasi Manual Aman
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Setiap data divalidasi langsung oleh admin ke bot agar tidak disalahgunakan pihak tidak berhak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Band 6: section
        Heading: Prosesnya simpel & transparan (Pricing & How it works)
        Padding Y: 80px, 4-col grid, height: ~496px
      */}
      <section
        id="harga"
        style={{
          paddingTop: 'var(--spacing-5xl)',
          paddingBottom: 'var(--spacing-5xl)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <span
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '2.4px',
                textTransform: 'uppercase',
              }}
            >
              Tier & Alur Pemesanan
            </span>
            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: '40px',
                fontWeight: 600,
                letterSpacing: '-0.9px',
                marginTop: 'var(--spacing-2xs)',
              }}
            >
              Prosesnya simpel & transparan
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-2xs)', fontSize: 'var(--font-size-h1)' }}>
              Pilih tier sesuai kebutuhan Anda, lakukan pembelian ke admin, lalu buat data channel di /create.
            </p>
          </div>

          <div className="grid-4col">
            {/* Step 1: Tier Biasa */}
            <div
              className="card-surface"
              style={{
                border: '1px solid var(--color-border)',
                position: 'relative',
              }}
            >
              <div style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-sm)' }}>
                <TagIcon />
              </div>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>PILIHAN TIER 1</span>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginTop: 'var(--spacing-3xs)' }}>
                Tier Biasa
              </h3>
              <div style={{ margin: 'var(--spacing-sm) 0px' }}>
                <span style={{ fontSize: 'var(--font-size-h2)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  Rp 20.000
                </span>
                <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)', display: 'block' }}>
                  *Harga bisa naik sewaktu-waktu
                </span>
              </div>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Bisa push hingga <strong style={{ color: 'var(--color-text-primary)' }}>3 channel</strong> kalian.
                Sangat pas untuk pemilik channel pemula.
              </p>
            </div>

            {/* Step 2: Tier Ultra */}
            <div
              className="card-surface"
              style={{
                border: '1px solid var(--color-border-accent)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <div style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                <ZapIcon />
              </div>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                BEST VALUE
              </span>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginTop: 'var(--spacing-3xs)' }}>
                Tier Ultra
              </h3>
              <div style={{ margin: 'var(--spacing-sm) 0px' }}>
                <span style={{ fontSize: 'var(--font-size-h2)', fontWeight: 600, color: 'var(--color-secondary)' }}>
                  Rp 50.000
                </span>
                <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)', display: 'block' }}>
                  *Harga bisa naik sewaktu-waktu
                </span>
              </div>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Bisa push <strong style={{ color: 'var(--color-secondary)' }}>UNLIMITED channel</strong> tanpa batasan channel!
              </p>
            </div>

            {/* Step 3: Chat Admin */}
            <div className="card-surface">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                <MessageCircleIcon />
              </div>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>LANGKAH 1</span>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginTop: 'var(--spacing-3xs)' }}>
                Beli ke Admin
              </h3>
              <div style={{ margin: 'var(--spacing-sm) 0px' }}>
                <span className="font-mono" style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-primary)' }}>
                  {adminPhone}
                </span>
              </div>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Wajib chat admin dulu jika mau buy. Konfirmasi pilihan tier dan selesaikan pembayaran.
              </p>
            </div>

            {/* Step 4: /create */}
            <div className="card-surface">
              <div style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                <ClipboardIcon />
              </div>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>LANGKAH 2</span>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginTop: 'var(--spacing-3xs)' }}>
                Input di /create
              </h3>
              <div style={{ margin: 'var(--spacing-sm) 0px' }}>
                <span className="font-mono" style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-secondary)' }}>
                  Kirim ke Admin
                </span>
              </div>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px' }}>
                Sudah buy? Buka halaman /create, isi nama & ID channel Anda, lalu kirim hasil JSON ke admin untuk di-add manual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Band 7: section
        Heading: Apa kata mereka tentang kami (Stacked: Edukasi "Apa itu Push CH?" & FAQ)
        Padding Y: 80px, stacked, height: ~645px
      */}
      <section
        id="tentang"
        style={{
          paddingTop: 'var(--spacing-5xl)',
          paddingBottom: 'var(--spacing-5xl)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '2.4px',
                textTransform: 'uppercase',
              }}
            >
              Penjelasan & Edukasi
            </span>
            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: '40px',
                fontWeight: 600,
                letterSpacing: '-0.9px',
                marginTop: 'var(--spacing-2xs)',
              }}
            >
              Apa kata mereka tentang kami & Apa itu Push CH?
            </h2>
          </div>

          <div
            style={{
              background: 'var(--gradient-card)',
              border: '1px solid var(--color-border-card)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
            }}
          >
            <h3 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>
              Apa itu Push CH?
            </h3>
            <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '24px', marginBottom: 'var(--spacing-md)' }}>
              <strong>Push CH (Push Channel)</strong> adalah mekanisme pengiriman broadcast otomatis secara masif ke Saluran WhatsApp (WhatsApp Newsletter/Channel) menggunakan integrasi protokol socket WhatsApp berbasis library <strong>Baileys</strong>.
            </p>
            <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '24px', marginBottom: 'var(--spacing-md)' }}>
              Berbeda dengan spam broadcast ke nomor pribadi yang berisiko banned, Push CH mengirimkan konten berita, promosi, file, maupun update ke saluran yang penggunanya telah memilih untuk follow channel Anda. Pesan terkirim cepat, rapi, dan tersinkronisasi via database JSON.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--spacing-md)',
                marginTop: 'var(--spacing-lg)',
              }}
            >
              <div
                style={{
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  KENAPA HARUS MANUAL ADD OLEH ADMIN?
                </span>
                <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-2xs)' }}>
                  Untuk menjaga kestabilan socket bot Baileys dari spam atau ID channel palsu. Setiap pembeli divalidasi pembayarannya oleh admin (62895639043495) sebelum channel diaktifkan.
                </p>
              </div>

              <div
                style={{
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-primary)', fontWeight: 600 }}>
                  FORMAT ID CHANNEL YANG BENAR
                </span>
                <p className="font-mono" style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-2xs)' }}>
                  Contoh: 120363418964199743@newsletter
                  <br />
                  Pastikan berakhiran @newsletter agar terbaca oleh bot WA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Band 8: section (CTA)
        Heading: Punya ide? Yuk wujudin bareng.
        Padding Y: 96px, stacked, height: ~624px
      */}
      <section
        style={{
          paddingTop: '96px',
          paddingBottom: '96px',
          background: 'var(--gradient-radial)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 'var(--font-size-small)',
              color: 'var(--color-text-secondary)',
              letterSpacing: '2.4px',
              textTransform: 'uppercase',
              marginBottom: 'var(--spacing-2xs)',
            }}
          >
            Siap Memulai?
          </span>

          <h2
            style={{
              fontSize: 'var(--font-size-display)',
              lineHeight: '75.5px',
              fontWeight: 600,
              letterSpacing: '-1.8px',
              maxWidth: '800px',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            Punya ide? Yuk wujudin bareng.
          </h2>

          <p
            style={{
              fontSize: 'var(--font-size-h1)',
              lineHeight: '20px',
              color: 'var(--color-text-muted)',
              maxWidth: '620px',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            Tingkatkan traffic dan follower channel WhatsApp Anda dengan Push CH Bot By saurus.
            Beli paketnya ke admin, isi data di /create, dan biarkan sistem otomatis bekerja.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', justifyContent: 'center' }}>
            <a
              href={waBuyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-secondary"
            >
              <MessageCircleIcon />
              <span>Beli Tier ke Admin (WA {adminPhone})</span>
            </a>
            <Link href="/create" className="btn-outline">
              <ClipboardIcon />
              <span>Sudah Beli? Isi Form /create</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 
        Band 9: footer (footer)
        Heading: Navigasi
        Padding Y: 0px, 4-col grid, 2 item(s), height: ~331px
      */}
      <footer
        style={{
          paddingTop: 'var(--spacing-5xl)',
          paddingBottom: 'var(--spacing-5xl)',
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-background)',
        }}
      >
        <div className="container">
          <div
            className="grid-4col"
            style={{
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            }}
          >
            {/* Item 1 of 2 */}
            <div style={{ gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>
                Push ch web Via Baileys And sc bot wa
              </h3>
              <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px', maxWidth: '400px' }}>
                Platform automasi channel WhatsApp newsletter terpercaya. Ditenagai oleh Baileys socket library dan dikembangkan oleh <strong>saurus</strong>.
              </p>
              <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: 'var(--spacing-2xs)' }}>
                <span
                  style={{
                    fontSize: 'var(--font-size-small)',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)',
                    padding: 'var(--spacing-3xs) var(--spacing-2xs)',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  Admin: {adminPhone}
                </span>
              </div>
            </div>

            {/* Item 2 of 2 */}
            <div style={{ gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>
                Navigasi
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xs)' }}>
                <li>
                  <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-h1)' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/create" style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-h1)' }}>
                    Generator Form (/create)
                  </Link>
                </li>
                <li>
                  <Link href="/idch.json" target="_blank" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-h1)' }}>
                    Endpoint JSON (/idch.json)
                  </Link>
                </li>
                <li>
                  <a
                    href={waBuyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-h1)' }}
                  >
                    Beli Akses (WhatsApp Admin)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: 'var(--spacing-3xl)',
              paddingTop: 'var(--spacing-lg)',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-sm)',
            }}
          >
            <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>
              &copy; {new Date().getFullYear()} Push CH Web. All rights reserved. By saurus.
            </span>
            <span className="font-mono" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>
              Ready for Vercel Deployment
            </span>
          </div>
        </div>
      </footer>

      {/* 
        Band 10: nav (nav)
        Padding Y: 8px, 5-up row, gap 4px, height: 71px
      */}
      <nav
        style={{
          position: 'fixed',
          bottom: 'var(--spacing-md)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          padding: '8px var(--spacing-sm)',
          height: '71px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border-card)',
          boxShadow: 'var(--shadow-xs)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Link
            href="/"
            style={{
              padding: 'var(--spacing-2xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-small)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-3xs)',
            }}
          >
            <HomeIcon />
            <span>Home</span>
          </Link>

          <a
            href="#fitur"
            style={{
              padding: 'var(--spacing-2xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--font-size-small)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-3xs)',
            }}
          >
            <SendIcon />
            <span>Fitur</span>
          </a>

          <a
            href="#detail"
            style={{
              padding: 'var(--spacing-2xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--font-size-small)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-3xs)',
            }}
          >
            <LayersIcon />
            <span>Detail</span>
          </a>

          <a
            href="#harga"
            style={{
              padding: 'var(--spacing-2xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--font-size-small)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-3xs)',
            }}
          >
            <TagIcon />
            <span>Harga</span>
          </a>

          <Link
            href="/create"
            style={{
              padding: 'var(--spacing-2xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-background)',
              fontWeight: 600,
              fontSize: 'var(--font-size-small)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-3xs)',
            }}
          >
            <ClipboardIcon />
            <span>/create</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

