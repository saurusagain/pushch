import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Push ch web Via Baileys And sc bot wa - By saurus';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(10, 132, 255, 0.15), rgba(0, 0, 0, 0) 70%), linear-gradient(to bottom, #18181b 0%, #0a0a0a 100%)',
          border: '8px solid #272727',
        }}
      >
        {/* Top Header / Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              backgroundColor: '#272727',
              border: '2px solid #00fa9a',
              borderRadius: '9999px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '9999px',
                backgroundColor: '#00fa9a',
              }}
            />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#00fa9a',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Baileys Engine &bull; By saurus
            </span>
          </div>

          <div
            style={{
              padding: '10px 20px',
              backgroundColor: '#18181b',
              border: '1px solid #3f3f46',
              borderRadius: '12px',
              fontSize: '18px',
              color: '#dadada',
            }}
          >
            WA Admin: 0895639043495
          </div>
        </div>

        {/* Center Title and Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '40px 0' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Push ch web Via Baileys</span>
            <span style={{ color: '#0a84ff' }}>And sc bot wa By saurus</span>
          </h1>
          <p
            style={{
              fontSize: '24px',
              lineHeight: 1.4,
              color: '#dadada',
              maxWidth: '960px',
              margin: 0,
            }}
          >
            Otomatisasi broadcast WhatsApp Newsletter (@newsletter) dengan soket Baileys performa tinggi. Cepat, stabil, terpusat di /idch.json.
          </p>
        </div>

        {/* Bottom Feature Badges & Pricing */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '24px',
            borderTop: '2px solid #272727',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#18181b',
                border: '1px solid #272727',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '18px',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#00fa9a' }}>&bull;</span>
              <span>Tier Biasa: Rp 20k (3 CH)</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#18181b',
                border: '1px solid #00fa9a',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '18px',
                color: '#00fa9a',
                fontWeight: 700,
              }}
            >
              <span>&bull;</span>
              <span>Tier Ultra: Rp 50k (Unlimited CH)</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#0a84ff',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            <span>Endpoint Live: /idch.json</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
