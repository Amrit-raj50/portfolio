import { ImageResponse } from 'next/og';

export const alt = 'Amrit Raj — Full Stack & React Native Engineer Portfolio';
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
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #07090e 0%, #0d111c 55%, #160e29 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: '#00f5ff',
              letterSpacing: 1,
            }}
          >
            AR.
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 22px',
              borderRadius: 999,
              border: '1px solid rgba(0, 245, 255, 0.35)',
              background: 'rgba(0, 245, 255, 0.08)',
              color: '#00f5ff',
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            amrit-raj-50.vercel.app
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2 }}>
            Amrit Raj
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: '#00f5ff' }}>
            Full Stack & React Native Engineer
          </div>
          <div style={{ fontSize: 24, color: '#a1a1aa', maxWidth: 920, lineHeight: 1.45 }}>
            React · Next.js · TypeScript · React Native · FastAPI · Node.js · Open Source Contributor
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {[
            '1,500+ GitHub Contributions',
            '8 Upstream Merged OSS PRs',
            'WCE Hackathon 2026 Finalist',
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: '12px 22px',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                fontSize: 20,
                color: '#e4e4e7',
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
