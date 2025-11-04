import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Blog Post | Bo Porta';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Blog post titles by slug
const blogTitles: Record<string, string> = {
  'protecting-your-rights-criminal-defense-lawyer': 'Protecting Your Rights: Why You Need a Criminal Defense Lawyer',
  'navigating-divorce-right-lawyer-miami': 'Navigating Divorce: Why You Need the Right Lawyer in Miami',
};

export default async function Image({ params }: { params: { slug: string } }) {
  const title = blogTitles[params.slug] || 'Blog Post';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A1929 0%, #1a2f42 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Blog badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#DC143C',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '12px 24px',
              background: 'rgba(220, 20, 60, 0.15)',
              borderRadius: '8px',
              border: '2px solid #DC143C',
            }}
          >
            BLOG
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: '#FAFAFA',
            marginBottom: 'auto',
            lineHeight: 1.2,
            maxWidth: '1000px',
          }}
        >
          {title}
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderTop: '2px solid rgba(250, 250, 250, 0.2)',
            paddingTop: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                fontSize: 36,
                color: '#FAFAFA',
                fontWeight: '600',
              }}
            >
              Bolívar C. Porta
            </div>
            <div
              style={{
                fontSize: 26,
                color: '#FAFAFA',
                opacity: 0.7,
              }}
            >
              Miami Trial Attorney
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#DC143C',
              fontWeight: '600',
            }}
          >
            bolivarporta.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
