export const SANITY_API_VERSION = '2023-03-20';
export const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || '/sanity-preview';
export const SANITY_STUDIO_PATH = '/cms';

// Derive the storefront origin from the preview URL when it's an absolute URL.
// Used to configure the presentation tool's iframe origin when Studio is cloud-hosted.
export const SANITY_STUDIO_PREVIEW_ORIGIN = (() => {
  try {
    return new URL(SANITY_STUDIO_PREVIEW_URL).origin;
  } catch {
    return undefined;
  }
})();
