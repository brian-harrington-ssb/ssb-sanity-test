import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type TrustBadge = {
  heading?: string | null;
  body?: string | null;
  icon?: SanityImageData;
  iconUrl?: string | null;
  link?: string | null;
  linkLabel?: string | null;
};

type SertaTrustBadgesData = {
  eyebrow?: string | null;
  headline?: string | null;
  backgroundColor?: string | null;
  badges?: TrustBadge[] | null;
};

export function SertaTrustBadgesSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaTrustBadgesData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const badges = data.badges ?? [];
  const eyebrow = data.eyebrow ?? 'Shop with confidence';
  const headline = data.headline ?? 'Buy online from a mattress company you can trust';

  const bg = data.backgroundColor ?? '#E8F0EC';

  return (
    <div style={{backgroundColor: bg, padding: '60px 0'}}>
      <div style={{maxWidth: 1280, margin: '0 auto', padding: '0 24px'}}>

        {/* Section header */}
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <p style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#20374D', marginBottom: 10}}>
            {eyebrow}
          </p>
          <h2 style={{fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#181D27', margin: 0}}>
            {headline}
          </h2>
        </div>

        {/* Badge grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
          }}
        >
          {badges.map((badge, index) => (
            <div
              data-sanity={encodeDataAttribute?.(`badges.${index}`)}
              key={index}
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12}}
            >
              {badge.icon?.asset?._ref ? (
                <div style={{width: 120, height: 120, flexShrink: 0}}>
                  <SanityImage
                    className="h-full w-full object-contain"
                    data={badge.icon}
                    showBorder={false}
                    showShadow={false}
                    sizes="120px"
                  />
                </div>
              ) : badge.iconUrl ? (
                <div style={{width: 120, height: 120, flexShrink: 0}}>
                  <img alt={badge.heading ?? ''} src={badge.iconUrl} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                </div>
              ) : null}

              {badge.heading && (
                <h6 style={{fontSize: 13, fontWeight: 700, color: '#181D27', margin: 0, letterSpacing: '0.04em', textTransform: 'uppercase'}}>
                  {badge.heading}
                </h6>
              )}
              {badge.body && (
                <p style={{fontSize: 13, color: '#6B7280', margin: 0, lineHeight: 1.6, maxWidth: 220}}>
                  {badge.body}
                </p>
              )}
              {badge.link && badge.linkLabel && (
                <a
                  href={badge.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#20374D',
                    textDecoration: 'none',
                  }}
                >
                  {badge.linkLabel}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
