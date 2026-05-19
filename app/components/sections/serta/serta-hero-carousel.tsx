import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type HeroSlide = {
  image?: SanityImageData;
  imageUrl?: string | null;
  label?: string | null;
  headline?: string | null;
  body?: string | null;
  cta?: string | null;
  ctaHref?: string | null;
  theme?: 'dark' | 'light' | null;
  imageCentered?: boolean | null;
  backgroundColor?: string | null;
};

type SertaHeroCarouselData = {
  autoPlayInterval?: number | null;
  showArrows?: boolean | null;
  showDots?: boolean | null;
  slides?: HeroSlide[] | null;
};

export function SertaHeroCarouselSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaHeroCarouselData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const firstSlide = data.slides?.[0];

  if (!firstSlide) return null;

  const isDark = firstSlide.theme === 'dark';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={firstSlide.backgroundColor ? {backgroundColor: firstSlide.backgroundColor} : undefined}
    >
      {firstSlide.image?.asset?._ref ? (
        <div className="absolute inset-0">
          <SanityImage
            className="h-full w-full object-cover"
            data={firstSlide.image}
            showBorder={false}
            showShadow={false}
            sizes="100vw"
          />
        </div>
      ) : firstSlide.imageUrl ? (
        <div className="absolute inset-0">
          <img alt={firstSlide.label ?? ''} className="h-full w-full object-cover" src={firstSlide.imageUrl} />
        </div>
      ) : null}

      <div
        className={`relative z-10 container mx-auto flex min-h-[480px] flex-col justify-center px-6 py-16 ${firstSlide.imageCentered ? 'items-center text-center' : 'items-start'}`}
      >
        {firstSlide.label && (
          <p
            className={`mb-2 text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-white/80' : 'text-gray-600'}`}
          >
            {firstSlide.label}
          </p>
        )}
        {firstSlide.headline && (
          <h2
            className={`mb-4 text-4xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            data-sanity={encodeDataAttribute?.('slides.0.headline')}
          >
            {firstSlide.headline}
          </h2>
        )}
        {firstSlide.body && (
          <p
            className={`mb-6 max-w-lg text-lg ${isDark ? 'text-white/90' : 'text-gray-700'}`}
          >
            {firstSlide.body}
          </p>
        )}
        {firstSlide.cta && firstSlide.ctaHref && (
          <a
            className="inline-block rounded bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            href={firstSlide.ctaHref}
          >
            {firstSlide.cta}
          </a>
        )}
      </div>
    </div>
  );
}
