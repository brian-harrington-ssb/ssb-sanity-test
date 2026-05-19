import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type AdvantageFeature = {
  eyebrow?: string | null;
  heading?: string | null;
  body?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  imageAlt?: string | null;
  videoUrl?: string | null;
};

type SertaAdvantageData = {
  eyebrow?: string | null;
  headline?: string | null;
  backgroundColor?: string | null;
  features?: AdvantageFeature[] | null;
};

export function SertaAdvantageSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaAdvantageData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const features = data.features ?? [];
  const sectionEyebrow = data.eyebrow ?? 'The Serta advantage';
  const sectionHeadline = data.headline ?? 'Comfortable, supportive, and cooling sleep';

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: data.backgroundColor ?? '#FFFFFF',
        padding: '60px 0',
      }}
    >
      <div style={{maxWidth: 1280, margin: '0 auto', padding: '0 24px'}}>

        {/* Section heading */}
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <p style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#20374D', marginBottom: 10}}>
            {sectionEyebrow}
          </p>
          <h2 style={{fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#181D27', margin: 0}}>
            {sectionHeadline}
          </h2>
        </div>

        {/* Features — alternating image/text rows */}
        <div style={{display: 'flex', flexDirection: 'column', gap: 48}}>
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                data-sanity={encodeDataAttribute?.(`features.${index}`)}
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 40,
                  alignItems: 'center',
                  direction: isEven ? 'ltr' : 'rtl',
                }}
              >
                {/* Media */}
                <div style={{direction: 'ltr', borderRadius: 8, overflow: 'hidden', backgroundColor: '#F3F0EC'}}>
                  {feature.videoUrl ? (
                    <video
                      autoPlay
                      className="w-full"
                      loop
                      muted
                      playsInline
                      style={{display: 'block', width: '100%'}}
                    >
                      <source src={feature.videoUrl} />
                    </video>
                  ) : feature.image?.asset?._ref ? (
                    <SanityImage
                      alt={feature.imageAlt ?? undefined}
                      className="w-full object-cover"
                      data={feature.image}
                      showBorder={false}
                      showShadow={false}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : feature.imageUrl ? (
                    <img
                      alt={feature.imageAlt ?? ''}
                      src={feature.imageUrl}
                      style={{width: '100%', display: 'block', objectFit: 'cover'}}
                    />
                  ) : null}
                </div>

                {/* Text */}
                <div style={{direction: 'ltr', display: 'flex', flexDirection: 'column', gap: 12}}>
                  {feature.eyebrow && (
                    <p style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#20374D', margin: 0}}>
                      {feature.eyebrow}
                    </p>
                  )}
                  {feature.heading && (
                    <h3 style={{fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, color: '#181D27', margin: 0, lineHeight: 1.25}}>
                      {feature.heading}
                    </h3>
                  )}
                  {feature.body && (
                    <p style={{fontSize: 15, color: '#6B7280', margin: 0, lineHeight: 1.7}}>
                      {feature.body}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
