import type {EncodeDataAttributeCallback} from '@sanity/react-loader';

type SertaPromoBannerData = {
  message?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  backgroundColor?: string | null;
  textColor?: string | null;
};

export function SertaPromoBannerSection({
  data,
  encodeDataAttribute,
}: {
  data: SertaPromoBannerData;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}) {
  const bg = data.backgroundColor ?? '#00131F';
  const fg = data.textColor ?? '#FFFFFF';

  return (
    <div
      style={{
        backgroundColor: bg,
        color: fg,
        width: '100%',
        padding: '10px 16px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        {data.message && (
          <p
            data-sanity={encodeDataAttribute?.('message')}
            style={{fontSize: 13, fontWeight: 500, margin: 0, color: fg}}
          >
            {data.message}
          </p>
        )}
        {data.ctaText && data.ctaUrl && (
          <a
            data-sanity={encodeDataAttribute?.('ctaUrl')}
            href={data.ctaUrl}
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#FFD966',
              textDecoration: 'underline',
              textUnderlineOffset: 2,
            }}
          >
            {data.ctaText}
          </a>
        )}
      </div>
    </div>
  );
}
