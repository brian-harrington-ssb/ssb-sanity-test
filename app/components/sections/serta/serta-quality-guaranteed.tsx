import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type QualityItem = {
  heading?: string | null;
  body?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

type SertaQualityGuaranteedData = {
  headline?: string | null;
  backgroundColor?: string | null;
  items?: QualityItem[] | null;
};

export function SertaQualityGuaranteedSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaQualityGuaranteedData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const items = data.items ?? [];
  const headline = data.headline ?? 'Quality guaranteed';
  const bg = data.backgroundColor ?? '#F0EDE8';

  return (
    <div style={{backgroundColor: bg, padding: '60px 0'}}>
      <div style={{maxWidth: 1280, margin: '0 auto', padding: '0 24px'}}>

        {/* Section heading */}
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h2 style={{fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#181D27', margin: 0}}>
            {headline}
          </h2>
        </div>

        {/* Items grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
          }}
        >
          {items.map((item, index) => (
            <div
              data-sanity={encodeDataAttribute?.(`items.${index}`)}
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              {/* Rectangular image, not a circle */}
              {item.image?.asset?._ref ? (
                <div style={{width: '100%', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: '#F3F0EC'}}>
                  <SanityImage
                    alt={item.imageAlt ?? undefined}
                    className="h-full w-full object-cover"
                    data={item.image}
                    showBorder={false}
                    showShadow={false}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ) : item.imageUrl ? (
                <div style={{width: '100%', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: '#F3F0EC'}}>
                  <img alt={item.imageAlt ?? ''} src={item.imageUrl} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              ) : null}

              <div style={{padding: '20px 24px 28px'}}>
                {item.heading && (
                  <h5 style={{fontSize: 16, fontWeight: 700, color: '#181D27', margin: '0 0 10px'}}>{item.heading}</h5>
                )}
                {item.body && (
                  <p style={{fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.6}}>{item.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
