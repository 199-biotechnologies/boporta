import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bolívar C. Porta – Miami Trial Attorney | Family Law & Criminal Defense';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A1929 0%, #1a2f42 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Logo-style divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 'bold',
              color: '#FAFAFA',
              letterSpacing: '-0.02em',
            }}
          >
            FAMILY
          </div>
          <div
            style={{
              width: '4px',
              height: '120px',
              background: '#DC143C',
            }}
          />
          <div
            style={{
              fontSize: 96,
              fontWeight: 'bold',
              color: '#FAFAFA',
              letterSpacing: '-0.02em',
            }}
          >
            CRIMINAL
          </div>
        </div>

        {/* Attorney name */}
        <div
          style={{
            fontSize: 48,
            color: '#FAFAFA',
            marginBottom: '20px',
            fontWeight: '600',
          }}
        >
          Bolívar C. Porta
        </div>

        {/* Credentials */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            fontSize: 28,
            color: '#DC143C',
            fontWeight: '600',
          }}
        >
          <span>25+ Years Experience</span>
          <span>•</span>
          <span>1,550+ Cases</span>
          <span>•</span>
          <span>Miami Trial Attorney</span>
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: '40px',
            fontSize: 32,
            color: '#FAFAFA',
            opacity: 0.8,
          }}
        >
          (305) 371-5060
        </div>
      </div>
    ),
    { ...size }
  );
}
