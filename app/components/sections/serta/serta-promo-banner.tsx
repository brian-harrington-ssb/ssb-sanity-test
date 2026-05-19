import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

type SertaPromoBannerData = {
  message?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  backgroundColor?: string | null;
};

export function SertaPromoBannerSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaPromoBannerData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  return (
    <div
      className="w-full py-3 px-4 text-center"
      style={data.backgroundColor ? {backgroundColor: data.backgroundColor} : undefined}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4">
        {data.message && (
          <p
            className="text-sm font-medium"
            data-sanity={encodeDataAttribute?.('message')}
          >
            {data.message}
          </p>
        )}
        {data.ctaText && data.ctaUrl && (
          <a
            className="text-sm font-semibold underline underline-offset-2 hover:opacity-80"
            data-sanity={encodeDataAttribute?.('ctaUrl')}
            href={data.ctaUrl}
          >
            {data.ctaText}
          </a>
        )}
      </div>
    </div>
  );
}
