import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FAQ | Common Legal Questions | Bo Porta';
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
            fontSize: 96,
            fontWeight: 'bold',
            color: '#FAFAFA',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          FAQ
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 40,
            color: '#FAFAFA',
            opacity: 0.9,
            marginBottom: '50px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.3,
          }}
        >
          Common Questions About Family Law & Criminal Defense
        </div>

        {/* Sample questions */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: '#DC143C',
              fontWeight: '600',
            }}
          >
            • How much does a divorce cost in Miami?
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#DC143C',
              fontWeight: '600',
            }}
          >
            • What should I do immediately after being arrested?
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#DC143C',
              fontWeight: '600',
            }}
          >
            • How is child support calculated in Florida?
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            marginTop: '60px',
            fontSize: 32,
            color: '#FAFAFA',
            fontWeight: '600',
          }}
        >
          Bolívar C. Porta • (305) 371-5060
        </div>
      </div>
    ),
    { ...size }
  );
}
