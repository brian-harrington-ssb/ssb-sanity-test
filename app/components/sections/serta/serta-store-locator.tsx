import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type SertaStoreLocatorData = {
  eyebrow?: string | null;
  headline?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export function SertaStoreLocatorSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaStoreLocatorData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        {data.image?.asset?._ref ? (
          <div className="flex-1">
            <SanityImage
              alt={data.imageAlt ?? undefined}
              className="w-full rounded-lg object-cover"
              data={data.image}
              dataSanity={encodeDataAttribute?.('image')}
              showBorder={false}
              showShadow={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : data.imageUrl ? (
          <div className="flex-1">
            <img alt={data.imageAlt ?? ''} className="w-full rounded-lg object-cover" src={data.imageUrl} />
          </div>
        ) : null}

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
          {data.body && (
            <p className="text-lg text-gray-600">{data.body}</p>
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
      </div>
    </div>
  );
}
