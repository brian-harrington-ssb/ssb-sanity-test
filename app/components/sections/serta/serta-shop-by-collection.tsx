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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Collection</h2>
        {data.showShopAll && (
          <a className="text-sm font-semibold text-blue-600 hover:underline" href="/collections">
            Shop All
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {collections.map((collection, index) => (
          <a
            className={`group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-shadow ${collection.featured ? 'ring-2 ring-blue-500' : ''}`}
            data-sanity={encodeDataAttribute?.(`collections.${index}`)}
            href={collection.href ?? '#'}
            key={index}
          >
            {collection.image?.asset?._ref ? (
              <div className="aspect-square overflow-hidden bg-gray-50">
                <SanityImage
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data={collection.image}
                  showBorder={false}
                  showShadow={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ) : collection.imageUrl ? (
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img alt={collection.name ?? ''} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={collection.imageUrl} />
              </div>
            ) : null}
            <div className="p-4">
              {collection.name && (
                <h3 className="font-semibold text-gray-900">{collection.name}</h3>
              )}
              {collection.description && (
                <p className="mt-1 text-sm text-gray-500">{collection.description}</p>
              )}
              {collection.price && (
                <p className="mt-2 text-sm font-medium text-gray-700">
                  From {collection.price}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
