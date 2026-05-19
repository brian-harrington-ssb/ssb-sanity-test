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

  return (
    <div
      className="w-full py-12"
      style={data.backgroundColor ? {backgroundColor: data.backgroundColor} : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              className="flex flex-col gap-4"
              data-sanity={encodeDataAttribute?.(`features.${index}`)}
              key={index}
            >
              {feature.videoUrl ? (
                <video
                  autoPlay={false}
                  className="w-full rounded-lg"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src={feature.videoUrl} />
                </video>
              ) : feature.image?.asset?._ref ? (
                <div className="overflow-hidden rounded-lg aspect-video bg-gray-100">
                  <SanityImage
                    alt={feature.imageAlt ?? undefined}
                    className="h-full w-full object-cover"
                    data={feature.image}
                    showBorder={false}
                    showShadow={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : feature.imageUrl ? (
                <div className="overflow-hidden rounded-lg aspect-video bg-gray-100">
                  <img alt={feature.imageAlt ?? ''} className="h-full w-full object-cover" src={feature.imageUrl} />
                </div>
              ) : null}

              {feature.eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {feature.eyebrow}
                </p>
              )}
              {feature.heading && (
                <h3 className="text-xl font-bold text-gray-900">{feature.heading}</h3>
              )}
              {feature.body && (
                <p className="text-gray-600">{feature.body}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
