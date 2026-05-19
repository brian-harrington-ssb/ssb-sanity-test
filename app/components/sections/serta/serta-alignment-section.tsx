import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type SertaAlignmentData = {
  eyebrow?: string | null;
  headline?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  backgroundColor?: string | null;
  videoUrl?: string | null;
  poster?: SanityImageData;
  posterUrl?: string | null;
};

export function SertaAlignmentSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaAlignmentData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const bg = data.backgroundColor ?? '#FFFFFF';

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
        {/* Text left */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {data.eyebrow && (
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#20374D',
                margin: 0,
              }}
            >
              {data.eyebrow}
            </p>
          )}
          {data.headline && (
            <h2
              data-sanity={encodeDataAttribute?.('headline')}
              style={{fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, color: '#181D27', margin: 0, lineHeight: 1.2}}
            >
              {data.headline}
            </h2>
          )}
          {data.body && (
            <p style={{fontSize: 15, color: '#6B7280', margin: 0, lineHeight: 1.7}}>{data.body}</p>
          )}
          {data.ctaText && data.ctaHref && (
            <a
              href={data.ctaHref}
              style={{
                display: 'inline-block',
                width: 'fit-content',
                backgroundColor: '#20374D',
                color: '#FFFFFF',
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

        {/* Video / image right */}
        <div style={{flex: '1 1 400px', minWidth: 0, borderRadius: 8, overflow: 'hidden'}}>
          {data.videoUrl ? (
            <video
              autoPlay={false}
              controls
              loop
              muted
              playsInline
              poster={data.posterUrl ?? undefined}
              style={{width: '100%', display: 'block'}}
            >
              <source src={data.videoUrl} />
            </video>
          ) : data.poster?.asset?._ref ? (
            <SanityImage
              className="w-full object-cover"
              data={data.poster}
              showBorder={false}
              showShadow={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : data.posterUrl ? (
            <img
              alt={data.headline ?? ''}
              src={data.posterUrl}
              style={{width: '100%', display: 'block', objectFit: 'cover'}}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
