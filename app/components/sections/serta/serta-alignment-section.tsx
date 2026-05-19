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
  ctaText?: string | null;
  ctaHref?: string | null;
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
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-4">
          {data.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              {data.eyebrow}
            </p>
          )}
          {data.headline && (
            <h2
              className="text-3xl font-bold text-gray-900"
              data-sanity={encodeDataAttribute?.('headline')}
            >
              {data.headline}
            </h2>
          )}
          {data.ctaText && data.ctaHref && (
            <a
              className="inline-block w-fit rounded bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              href={data.ctaHref}
            >
              {data.ctaText}
            </a>
          )}
        </div>

        <div className="flex-1">
          {data.videoUrl ? (
            <video
              autoPlay={false}
              className="w-full rounded-lg"
              controls
              loop
              muted
              playsInline
              poster={data.poster?.asset?._ref ? undefined : (data.posterUrl ?? undefined)}
            >
              <source src={data.videoUrl} />
            </video>
          ) : data.poster?.asset?._ref ? (
            <SanityImage
              className="w-full rounded-lg object-cover"
              data={data.poster}
              dataSanity={encodeDataAttribute?.('poster')}
              showBorder={false}
              showShadow={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : data.posterUrl ? (
            <img alt={data.headline ?? ''} className="w-full rounded-lg object-cover" src={data.posterUrl} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
