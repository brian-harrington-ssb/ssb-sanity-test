import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import Autoplay from 'embla-carousel-autoplay';
import {useMemo} from 'react';

import {SanityImage} from '~/components/sanity/sanity-image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from '~/components/ui/carousel';

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
  const {slides, showArrows, showDots, autoPlayInterval} = data;
  const hasMultiple = (slides?.length ?? 0) > 1;

  const plugins = useMemo(
    () =>
      hasMultiple
        ? [Autoplay({delay: autoPlayInterval ?? 5000, stopOnInteraction: false})]
        : [],
    [hasMultiple, autoPlayInterval],
  );

  if (!slides?.length) return null;

  return (
    <Carousel
      className="[--slide-spacing:0]"
      opts={{loop: true, active: hasMultiple}}
      plugins={plugins}
      style={{'--slides-per-view': 1} as React.CSSProperties}
    >
      <div className="relative">
        <CarouselContent>
          {slides.map((slide, index) => {
            const isLight = slide.theme === 'light';
            const bgColor = slide.backgroundColor ?? '#1B3247';
            const hasImage = !!(slide.image?.asset?._ref || slide.imageUrl);

            return (
              <CarouselItem key={index}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    backgroundColor: bgColor,
                    minHeight: 'clamp(400px, 55vw, 600px)',
                  }}
                >
                  {/* Full-bleed background image */}
                  {slide.image?.asset?._ref ? (
                    <div className="absolute inset-0">
                      <SanityImage
                        className="h-full w-full object-cover"
                        data={slide.image}
                        showBorder={false}
                        showShadow={false}
                        sizes="100vw"
                      />
                    </div>
                  ) : slide.imageUrl ? (
                    <div className="absolute inset-0">
                      <img
                        alt={slide.label ?? ''}
                        className="h-full w-full object-cover"
                        src={slide.imageUrl}
                      />
                    </div>
                  ) : null}

                  {/* Gradient overlay for readability on image slides */}
                  {hasImage && !isLight && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to right, rgba(11,31,48,0.75) 0%, rgba(11,31,48,0.45) 55%, transparent 100%)',
                      }}
                    />
                  )}

                  {/* Slide content */}
                  <div
                    className={`relative z-10 mx-auto flex h-full flex-col justify-center px-8 py-14 md:px-16 lg:max-w-[1280px] lg:px-24 ${
                      slide.imageCentered ? 'items-center text-center' : 'items-start'
                    }`}
                    style={{minHeight: 'inherit'}}
                  >
                    {slide.label && (
                      <h6
                        className="mb-3 text-xs font-bold uppercase tracking-[0.18em]"
                        style={{color: isLight ? '#20374D' : '#FFD966'}}
                      >
                        {slide.label}
                      </h6>
                    )}
                    {slide.headline && (
                      <h2
                        className="mb-4 max-w-xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
                        data-sanity={encodeDataAttribute?.(`slides.${index}.headline`)}
                        style={{color: isLight ? '#181D27' : '#FFFFFF'}}
                      >
                        {slide.headline}
                      </h2>
                    )}
                    {slide.body && (
                      <p
                        className="mb-7 max-w-md text-base md:text-lg"
                        style={{color: isLight ? '#414651' : 'rgba(255,255,255,0.87)'}}
                      >
                        {slide.body}
                      </p>
                    )}
                    {slide.cta && slide.ctaHref && (
                      <a
                        href={slide.ctaHref}
                        style={{
                          display: 'inline-block',
                          backgroundColor: isLight ? '#20374D' : '#FFFFFF',
                          color: isLight ? '#FFFFFF' : '#20374D',
                          padding: '12px 28px',
                          borderRadius: 4,
                          fontSize: 14,
                          fontWeight: 700,
                          textDecoration: 'none',
                          letterSpacing: '0.02em',
                          transition: 'opacity 0.15s',
                        }}
                      >
                        {slide.cta}
                      </a>
                    )}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {(showArrows ?? true) && hasMultiple && (
          <>
            <CarouselPrevious className="left-4 border border-white/40 bg-black/30 text-white hover:bg-black/55 disabled:opacity-40" />
            <CarouselNext className="right-4 border border-white/40 bg-black/30 text-white hover:bg-black/55 disabled:opacity-40" />
          </>
        )}
      </div>

      {(showDots ?? true) && hasMultiple && <CarouselPagination />}
    </Carousel>
  );
}
