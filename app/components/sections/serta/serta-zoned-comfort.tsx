import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type SertaZonedComfortData = {
  eyebrow?: string | null;
  headline?: string | null;
  body?: string | null;
  backgroundColor?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export function SertaZonedComfortSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaZonedComfortData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const bg = data.backgroundColor ?? '#F7F4F0';

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
        </div>

        {/* Image right */}
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
      </div>
    </div>
  );
}
