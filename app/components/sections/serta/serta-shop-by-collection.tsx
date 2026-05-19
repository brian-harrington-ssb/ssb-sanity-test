import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type CollectionItem = {
  name?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  description?: string | null;
  price?: string | null;
  href?: string | null;
  featured?: boolean | null;
};

type SertaShopByCollectionData = {
  eyebrow?: string | null;
  headline?: string | null;
  showShopAll?: boolean | null;
  collections?: CollectionItem[] | null;
};

export function SertaShopByCollectionSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaShopByCollectionData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const collections = data.collections ?? [];
  const eyebrow = data.eyebrow ?? 'Shop by collection';
  const headline = data.headline ?? 'Thoughtfully designed for every sleeper';

  return (
    <div style={{backgroundColor: '#F7F4F0', padding: '60px 0'}}>
      <div style={{maxWidth: 1280, margin: '0 auto', padding: '0 24px'}}>

        {/* Section header */}
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <p style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#20374D', marginBottom: 10}}>
            {eyebrow}
          </p>
          <h2 style={{fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#181D27', margin: 0}}>
            {headline}
          </h2>
        </div>

        {/* Cards — horizontal scroll on mobile */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            overflowX: 'auto',
            paddingBottom: 8,
            scrollbarWidth: 'none',
          }}
        >
          {collections.map((collection, index) => (
            <a
              data-sanity={encodeDataAttribute?.(`collections.${index}`)}
              href={collection.href ?? '#'}
              key={index}
              style={{
                flex: '0 0 220px',
                maxWidth: 260,
                minWidth: 200,
                borderRadius: 8,
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                textDecoration: 'none',
                border: collection.featured ? '2px solid #20374D' : '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s',
              }}
            >
              {/* Image */}
              {collection.image?.asset?._ref ? (
                <div style={{aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#F3F0EC'}}>
                  <SanityImage
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    data={collection.image}
                    showBorder={false}
                    showShadow={false}
                    sizes="(max-width: 640px) 80vw, 260px"
                  />
                </div>
              ) : collection.imageUrl ? (
                <div style={{aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#F3F0EC'}}>
                  <img
                    alt={collection.name ?? ''}
                    src={collection.imageUrl}
                    style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s'}}
                  />
                </div>
              ) : null}

              {/* Body */}
              <div style={{padding: '16px 16px 20px'}}>
                {collection.name && (
                  <h5 style={{fontSize: 15, fontWeight: 700, color: '#181D27', margin: '0 0 8px'}}>{collection.name}</h5>
                )}
                {collection.description && (
                  <p style={{fontSize: 13, color: '#6B7280', margin: '0 0 14px', lineHeight: 1.5}}>{collection.description}</p>
                )}
                {collection.price && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#20374D',
                    textDecoration: 'none',
                  }}>
                    {collection.price}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Shop All CTA */}
        {data.showShopAll && (
          <div style={{textAlign: 'center', marginTop: 36}}>
            <a
              href="/collections/mattresses"
              style={{
                display: 'inline-block',
                backgroundColor: '#20374D',
                color: '#FFFFFF',
                padding: '13px 36px',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Shop All
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
