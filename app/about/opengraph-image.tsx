import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'About Bo Porta | Miami Trial Attorney';
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
        {/* Main title */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 'bold',
            color: '#FAFAFA',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Bolívar C. Porta
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 42,
            color: '#FAFAFA',
            opacity: 0.9,
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          Miami Trial Attorney
        </div>

        {/* Credentials grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: '#DC143C',
              fontWeight: '600',
            }}
          >
            Florida Bar Since 1996 • 25+ Years Experience
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#FAFAFA',
              opacity: 0.8,
            }}
          >
            Tulane Law School J.D. • 1,550+ Cases
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#FAFAFA',
              opacity: 0.8,
            }}
          >
            Family Law & Criminal Defense
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            marginTop: '60px',
            fontSize: 28,
            color: '#D4AF37',
            fontWeight: '600',
            fontStyle: 'italic',
          }}
        >
          "Results speak louder than promises."
        </div>
      </div>
    ),
    { ...size }
  );
}
