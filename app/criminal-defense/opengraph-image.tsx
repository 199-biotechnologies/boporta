import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Criminal Defense Attorney Miami | Bo Porta';
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
        {/* Practice area badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
            padding: '20px 40px',
            background: 'rgba(93, 127, 163, 0.15)',
            borderRadius: '12px',
            border: '2px solid #5D7FA3',
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: '#5D7FA3',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            CRIMINAL DEFENSE
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#FAFAFA',
            marginBottom: '30px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.2,
          }}
        >
          Aggressive Trial Defense
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: '#FAFAFA',
            opacity: 0.8,
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          DUI • Domestic Violence • Felonies • Misdemeanors
        </div>

        {/* Attorney info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div
            style={{
              fontSize: 38,
              color: '#FAFAFA',
              fontWeight: '600',
            }}
          >
            Bolívar C. Porta
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#DC143C',
              fontWeight: '600',
            }}
          >
            Miami Criminal Defense Lawyer • Florida Bar Since 1996
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
