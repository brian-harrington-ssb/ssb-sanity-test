import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

import {SanityImage} from '~/components/sanity/sanity-image';

type SanityImageData = {
  _type: 'image';
  asset?: {_ref: string; _type: 'reference'} | null;
  hotspot?: {x: number; y: number} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
} | null | undefined;

type MattressType = {
  name?: string | null;
  image?: SanityImageData;
  imageUrl?: string | null;
  desc?: string | null;
  href?: string | null;
};

type SertaShopByTypeData = {
  showShopAll?: boolean | null;
  types?: MattressType[] | null;
};

export function SertaShopByTypeSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaShopByTypeData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const types = data.types ?? [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Type</h2>
        {data.showShopAll && (
          <a className="text-sm font-semibold text-blue-600 hover:underline" href="/mattresses">
            Shop All
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {types.map((type, index) => (
          <a
            className="group flex flex-col items-center gap-3 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors"
            data-sanity={encodeDataAttribute?.(`types.${index}`)}
            href={type.href ?? '#'}
            key={index}
          >
            {type.image?.asset?._ref ? (
              <div className="w-full overflow-hidden rounded-lg aspect-square bg-gray-100">
                <SanityImage
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data={type.image}
                  showBorder={false}
                  showShadow={false}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ) : type.imageUrl ? (
              <div className="w-full overflow-hidden rounded-lg aspect-square bg-gray-100">
                <img alt={type.name ?? ''} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={type.imageUrl} />
              </div>
            ) : null}
            {type.name && (
              <h3 className="font-semibold text-gray-900">{type.name}</h3>
            )}
            {type.desc && (
              <p className="text-sm text-gray-500">{type.desc}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
