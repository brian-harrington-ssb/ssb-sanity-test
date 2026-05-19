import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type SertaBrandHistoryData = {
  headline?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  backgroundColor?: string | null;
  textColor?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export function SertaBrandHistorySection({
  data,
  encodeDataAttribute,
}: {
  data: SertaBrandHistoryData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const bg = data.backgroundColor ?? '#1B3247';
  const fg = data.textColor ?? '#FFFFFF';
  const isDark = bg === '#1B3247' || bg === '#00131F' || bg === '#20374D';

  return (
    <div style={{backgroundColor: bg, padding: '60px 0'}}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 48,
          alignItems: 'center',
        }}
      >
        {/* Image left */}
        {data.image?.asset?._ref ? (
          <div style={{flex: '1 1 400px', minWidth: 0, borderRadius: 8, overflow: 'hidden'}}>
            <SanityImage
              alt={data.imageAlt ?? undefined}
              className="w-full object-cover"
              data={data.image}
              showBorder={false}
              showShadow={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : data.imageUrl ? (
          <div style={{flex: '1 1 400px', minWidth: 0, borderRadius: 8, overflow: 'hidden'}}>
            <img
              alt={data.imageAlt ?? ''}
              src={data.imageUrl}
              style={{width: '100%', display: 'block', objectFit: 'cover'}}
            />
          </div>
        ) : null}

        {/* Text right */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {data.headline && (
            <h2
              data-sanity={encodeDataAttribute?.('headline')}
              style={{
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 700,
                color: fg,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {data.headline}
            </h2>
          )}
          {data.body && (
            <p
              style={{
                fontSize: 15,
                color: isDark ? 'rgba(255,255,255,0.72)' : '#6B7280',
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              {data.body}
            </p>
          )}
          {data.ctaText && data.ctaHref && (
            <a
              href={data.ctaHref}
              style={{
                display: 'inline-block',
                width: 'fit-content',
                backgroundColor: isDark ? '#FFFFFF' : '#20374D',
                color: isDark ? '#20374D' : '#FFFFFF',
                padding: '13px 32px',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                marginTop: 4,
              }}
            >
              {data.ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
