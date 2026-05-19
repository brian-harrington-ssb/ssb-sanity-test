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

  return (
    <div
      className="w-full py-12"
      style={data.backgroundColor ? {backgroundColor: data.backgroundColor} : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              className="flex flex-col items-center gap-4 text-center"
              data-sanity={encodeDataAttribute?.(`items.${index}`)}
              key={index}
            >
              {item.image?.asset?._ref ? (
                <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                  <SanityImage
                    alt={item.imageAlt ?? undefined}
                    className="h-full w-full object-cover"
                    data={item.image}
                    showBorder={false}
                    showShadow={false}
                    sizes="80px"
                  />
                </div>
              ) : item.imageUrl ? (
                <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                  <img alt={item.imageAlt ?? ''} className="h-full w-full object-cover" src={item.imageUrl} />
                </div>
              ) : null}
              {item.heading && (
                <h3 className="font-semibold text-gray-900">{item.heading}</h3>
              )}
              {item.body && (
                <p className="text-sm text-gray-600">{item.body}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
