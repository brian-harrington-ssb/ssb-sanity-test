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

  return (
    <div
      className="w-full py-12"
      style={data.backgroundColor ? {backgroundColor: data.backgroundColor} : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {badges.map((badge, index) => (
            <div
              className="flex flex-col items-center gap-3 text-center"
              data-sanity={encodeDataAttribute?.(`badges.${index}`)}
              key={index}
            >
              {badge.icon?.asset?._ref ? (
                <div className="h-16 w-16 flex-shrink-0">
                  <SanityImage
                    className="h-full w-full object-contain"
                    data={badge.icon}
                    showBorder={false}
                    showShadow={false}
                    sizes="64px"
                  />
                </div>
              ) : badge.iconUrl ? (
                <div className="h-16 w-16 flex-shrink-0">
                  <img alt={badge.heading ?? ''} className="h-full w-full object-contain" src={badge.iconUrl} />
                </div>
              ) : null}
              {badge.heading && (
                <h3 className="font-semibold text-gray-900">{badge.heading}</h3>
              )}
              {badge.body && (
                <p className="text-sm text-gray-600">{badge.body}</p>
              )}
              {badge.link && badge.linkLabel && (
                <a
                  className="text-sm font-medium text-blue-600 hover:underline"
                  href={badge.link}
                >
                  {badge.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
