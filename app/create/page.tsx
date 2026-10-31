'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  SendIcon,
  MessageCircleIcon,
  ClipboardIcon,
  DatabaseIcon,
  HomeIcon,
  CheckIcon,
  ShieldCheckIcon,
  TagIcon,
  ZapIcon,
} from '../../components/Icons';

interface ChannelUser {
  name: string;
  idch: string[];
}

export default function CreatePage() {
  const adminPhone = '62895639043495';
  const [name, setName] = useState('');
  const [idchInput, setIdchInput] = useState('');
  const [currentDatabase, setCurrentDatabase] = useState<ChannelUser[]>([
    {
      name: 'saurus',
      idch: [
        '120363418964199743@newsletter',
        '120363429190136593@newsletter',
      ],
    },
  ]);
  const [mergedDatabase, setMergedDatabase] = useState<ChannelUser[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isSavedLive, setIsSavedLive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch initial /idch.json data on mount
  useEffect(() => {
    fetch('/api/idch')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCurrentDatabase(data);
        }
      })
      .catch(() => {
        // Fallback to default
      });
  }, []);

  // Compute merged json dynamically whenever inputs or database change
  useEffect(() => {
    const cleanName = name.trim();
    const rawList = idchInput
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    // Deep clone current database
    const nextData: ChannelUser[] = currentDatabase.map((item) => ({
      name: item.name,
      idch: [...item.idch],
    }));

    if (cleanName && rawList.length > 0) {
      const existingIndex = nextData.findIndex(
        (item) => item.name.toLowerCase() === cleanName.toLowerCase()
      );

      if (existingIndex !== -1) {
        // Double/Existing name found: automatically merge idch without duplicate names or duplicate channels
        const existingSet = new Set(nextData[existingIndex].idch);
        rawList.forEach((c) => existingSet.add(c));
        nextData[existingIndex].idch = Array.from(existingSet);
      } else {
        // New name: add entry
        nextData.push({
          name: cleanName,
          idch: Array.from(new Set(rawList)),
        });
      }
    }

    setMergedDatabase(nextData);
  }, [name, idchInput, currentDatabase]);

  const jsonString = JSON.stringify(
    mergedDatabase.length > 0 ? mergedDatabase : currentDatabase,
    null,
    2
  );

  const cleanName = name.trim();
  const rawList = idchInput
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const isExistingName =
    Boolean(cleanName) &&
    currentDatabase.some(
      (item) => item.name.toLowerCase() === cleanName.toLowerCase()
    );

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const generateWaMessage = () => {
    const text = `Halo Admin Saurus, saya sudah beli akses Push CH WhatsApp.
Berikut data channel saya untuk di-add ke /idch.json:

Nama: ${cleanName || 'saurus'}
Status: ${isExistingName ? 'Update IDCH (Nama Sudah Ada)' : 'Pendaftar Baru'}
Channel yang ditambahkan:
${rawList.map((c) => `- ${c}`).join('\n') || '- (Isi ID channel)'}

Format Update JSON:
\`\`\`json
${jsonString}
\`\`\`

Mohon di-add manual ya min. Terima kasih!`;
    return encodeURIComponent(text);
  };

  const handleSaveToApi = async () => {
    if (!cleanName || rawList.length === 0) {
      alert('Harap isi Nama dan minimal satu ID Channel!');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/idch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: cleanName,
          idch: rawList,
        }),
      });
      const result = await res.json();
      if (res.ok && result.data) {
        setCurrentDatabase(result.data);
        setIsSavedLive(true);
        setTimeout(() => setIsSavedLive(false), 3000);
      } else {
        alert(result.error || 'Gagal menyimpan data.');
      }
    } catch (err) {
      alert('Terjadi kesalahan saat menghubungi API.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingBottom: 'var(--spacing-5xl)' }}>
      {/* Header */}
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
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-3xs)',
                color: 'var(--color-text-muted)',
                fontSize: 'var(--font-size-small)',
              }}
            >
              <HomeIcon />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <Link
              href="/idch.json"
              target="_blank"
              style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-3xs)',
              }}
            >
              <DatabaseIcon />
              <span>Buka /idch.json</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container" style={{ paddingTop: 'var(--spacing-3xl)' }}>
        {/* Title */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span
            style={{
              fontSize: 'var(--font-size-small)',
              color: 'var(--color-text-secondary)',
              letterSpacing: '2.4px',
              textTransform: 'uppercase',
            }}
          >
            Formulir Tambah Channel
          </span>
          <h1
            style={{
              fontSize: 'var(--font-size-h2)',
              lineHeight: '40px',
              fontWeight: 600,
              letterSpacing: '-0.9px',
              marginTop: 'var(--spacing-2xs)',
            }}
          >
            Generate & Submit JSON ID Channel
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-2xs)', fontSize: 'var(--font-size-h1)' }}>
            Input nama dan ID channel WhatsApp Anda. Sistem otomatis menggabungkan data ke format /idch.json tanpa duplikasi nama.
          </p>
        </div>

        {/* Pricing & Order Info Banner */}
        <div
          style={{
            background: 'var(--gradient-card)',
            border: '1px solid var(--color-border-card)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xs)', marginBottom: 'var(--spacing-2xs)' }}>
            <ShieldCheckIcon />
            <h2 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              PENTING: Harap Beli ke Admin Terlebih Dahulu!
            </h2>
          </div>
          <p style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text-muted)', lineHeight: '20px', marginBottom: 'var(--spacing-sm)' }}>
            Penambahan channel ke bot WA harus melalui konfirmasi manual admin agar sistem aman & stabil:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-sm)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: 'var(--spacing-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3xs)', color: 'var(--color-text-muted)' }}>
                <TagIcon />
                <span style={{ fontSize: 'var(--font-size-small)', fontWeight: 600 }}>TIER BIASA: Rp 20.000*</span>
              </div>
              <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-3xs)' }}>
                Bisa push hingga <strong>3 channel</strong> kalian. (*Harga bisa naik sewaktu-waktu).
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-accent)',
                borderRadius: 'var(--radius-sm)',
                padding: 'var(--spacing-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3xs)', color: 'var(--color-secondary)' }}>
                <ZapIcon />
                <span style={{ fontSize: 'var(--font-size-small)', fontWeight: 600 }}>TIER ULTRA: Rp 50.000*</span>
              </div>
              <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-3xs)' }}>
                Bisa push <strong>UNLIMITED channel</strong> tanpa batasan. (*Harga bisa naik sewaktu-waktu).
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <a
              href={`https://wa.me/${adminPhone}?text=${encodeURIComponent('Halo Admin Saurus, saya mau beli akses Push CH WhatsApp.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-secondary"
              style={{ height: '36px', fontSize: 'var(--font-size-small)' }}
            >
              <MessageCircleIcon />
              <span>Chat Admin ({adminPhone}) untuk Beli</span>
            </a>
            <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>
              Sudah beli? Lengkapi form di bawah lalu kirim hasilnya ke admin.
            </span>
          </div>
        </div>

        {/* Form and Preview Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}
        >
          {/* Left Column: Input Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}
          >
            <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600 }}>Input Data Channel</h3>

            {/* Field 1: Nama */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 'var(--font-size-small)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-3xs)',
                }}
              >
                Nama Pengguna / Brand
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: saurus atau nama-kamu"
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0px var(--spacing-sm)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-h1)',
                  outline: 'none',
                }}
              />
              <span
                style={{
                  fontSize: 'var(--font-size-small)',
                  color: isExistingName ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                  display: 'block',
                  marginTop: 'var(--spacing-3xs)',
                }}
              >
                {isExistingName
                  ? `[Info] Nama "${cleanName}" sudah terdaftar di database. ID Channel baru otomatis digabung ke nama ini.`
                  : 'Jika nama belum ada, akan dibuatkan entitas baru di JSON.'}
              </span>
            </div>

            {/* Field 2: ID Channel */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 'var(--font-size-small)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-3xs)',
                }}
              >
                ID Channel WhatsApp (@newsletter)
              </label>
              <textarea
                rows={5}
                value={idchInput}
                onChange={(e) => setIdchInput(e.target.value)}
                placeholder="120363418964199743@newsletter&#10;120363429190136593@newsletter"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--spacing-sm)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--font-size-h1)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
              <span
                style={{
                  fontSize: 'var(--font-size-small)',
                  color: 'var(--color-text-muted)',
                  display: 'block',
                  marginTop: 'var(--spacing-3xs)',
                }}
              >
                Pisahkan dengan baris baru atau koma. Pastikan berakhiran @newsletter.
              </span>
            </div>

            {/* Actions for Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', marginTop: 'var(--spacing-xs)' }}>
              <a
                href={`https://wa.me/${adminPhone}?text=${generateWaMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircleIcon />
                <span>Kirim JSON ke Admin WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isCopied ? <CheckIcon /> : <ClipboardIcon />}
                <span>{isCopied ? 'Tersalin ke Clipboard!' : 'Salin JSON'}</span>
              </button>

              <button
                type="button"
                onClick={handleSaveToApi}
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              >
                <DatabaseIcon />
                <span>{isSavedLive ? 'Berhasil Diupdate ke /idch.json!' : 'Simpan Langsung ke Web'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live JSON Preview */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-lg)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xs)' }}>
                <DatabaseIcon />
                <h3 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 600 }}>Live Preview /idch.json</h3>
              </div>
              <span
                className="font-mono"
                style={{
                  fontSize: 'var(--font-size-small)',
                  color: 'var(--color-secondary)',
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--spacing-3xs) var(--spacing-2xs)',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                {mergedDatabase.length} User(s)
              </span>
            </div>

            <pre
              className="font-mono"
              style={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: 'var(--spacing-md)',
                color: 'var(--color-text-muted)',
                fontSize: '13px',
                lineHeight: '18px',
                overflowX: 'auto',
                flexGrow: 1,
                maxHeight: '420px',
              }}
            >
              <code>{jsonString}</code>
            </pre>

            <div style={{ marginTop: 'var(--spacing-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-muted)' }}>
                Target Admin: {adminPhone}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-small)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-3xs)',
                }}
              >
                <ClipboardIcon />
                <span>{isCopied ? 'Tersalin!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
