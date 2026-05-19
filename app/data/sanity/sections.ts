import {defineQuery} from 'groq';

import {
  COLOR_SCHEME_FRAGMENT,
  IMAGE_FRAGMENT,
  RICHTEXT_FRAGMENT,
} from './fragments';
import {getIntValue} from './utils';

export const SECTION_SETTINGS_FRAGMENT = defineQuery(`{
  colorScheme -> ${COLOR_SCHEME_FRAGMENT},
  customCss,
  hide,
  padding
}`);

export const RELATED_PRODUCTS_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  desktopColumns,
  "heading": ${getIntValue('heading')},
  maxProducts,
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const PRODUCT_INFORMATION_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  desktopMediaPosition,
  desktopMediaWidth,
  mediaAspectRatio,
  "richtext": coalesce(
    richtext[_key == $language][0].value[] ${RICHTEXT_FRAGMENT},
    richtext[_key == $defaultLanguage][0].value[] ${RICHTEXT_FRAGMENT},
  )[],
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const COLLECTION_PRODUCT_GRID_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  desktopColumns,
  enableFiltering,
  enableSorting,
  mobileColumns,
  productsPerPage,
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const COLLECTION_BANNER_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  bannerHeight,
  contentAlignment,
  contentPosition,
  overlayOpacity,
  showDescription,
  showImage,
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const RICHTEXT_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  contentAlignment,
  desktopContentPosition,
  maxWidth,
  "richtext": coalesce(
    richtext[_key == $language][0].value[] ${RICHTEXT_FRAGMENT},
    richtext[_key == $defaultLanguage][0].value[] ${RICHTEXT_FRAGMENT},
  )[],
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const CAROUSEL_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  arrows,
  autoplay,
  "title": ${getIntValue('title')},
  loop,
  pagination,
  slides[] {
    _key,
    image ${IMAGE_FRAGMENT},
  },
  slidesPerViewDesktop,
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const COLLECTION_LIST_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  collections[] -> {
    store {
      gid
    }
  },
  desktopColumns,
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const FEATURED_PRODUCT_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  mediaAspectRatio,
  product -> {
    store {
      descriptionHtml,
      "firstVariant": variants[0] -> {
        store {
          gid,
          previewImageUrl,
          price
        }
      },
      gid,
      options[] {
        name,
        values
      },
      previewImageUrl,
      title
    }
  },
  'richtext': coalesce(
    richtext[_key == $language][0].value[] ${RICHTEXT_FRAGMENT},
    richtext[_key == $defaultLanguage][0].value[] ${RICHTEXT_FRAGMENT},
  )[],
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const FEATURED_COLLECTION_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  collection -> {
    store {
      gid,
      slug,
      title
    }
  },
  desktopColumns,
  "heading": ${getIntValue('heading')},
  maxProducts,
  settings ${SECTION_SETTINGS_FRAGMENT},
  viewAll
}`);

export const IMAGE_BANNER_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  backgroundImage ${IMAGE_FRAGMENT},
  bannerHeight,
  "content": coalesce(
    content[_key == $language][0].value[] ${RICHTEXT_FRAGMENT},
    content[_key == $defaultLanguage][0].value[] ${RICHTEXT_FRAGMENT},
  )[],
  contentAlignment,
  contentPosition,
  overlayOpacity,
  settings ${SECTION_SETTINGS_FRAGMENT}
}`);

export const SERTA_PROMO_BANNER_FRAGMENT = defineQuery(`{
  _key,
  _type,
  message,
  ctaText,
  ctaUrl,
  backgroundColor
}`);

export const SERTA_HERO_CAROUSEL_FRAGMENT = defineQuery(`{
  _key,
  _type,
  autoPlayInterval,
  showArrows,
  showDots,
  slides[] {
    _key,
    _type,
    label,
    headline,
    body,
    cta,
    ctaHref,
    theme,
    imageCentered,
    backgroundColor,
    imageUrl,
    image ${IMAGE_FRAGMENT}
  }
}`);

export const SERTA_SHOP_BY_COLLECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  showShopAll,
  collections[] {
    _key,
    _type,
    name,
    description,
    price,
    href,
    featured,
    imageUrl,
    image ${IMAGE_FRAGMENT}
  }
}`);

export const SERTA_SHOP_BY_TYPE_FRAGMENT = defineQuery(`{
  _key,
  _type,
  showShopAll,
  types[] {
    _key,
    _type,
    name,
    desc,
    href,
    imageUrl,
    image ${IMAGE_FRAGMENT}
  }
}`);

export const SERTA_PERFECT_SLEEPER_FEATURE_FRAGMENT = defineQuery(`{
  _key,
  _type,
  eyebrow,
  headline,
  body,
  ctaText,
  ctaHref,
  imageAlt,
  imageUrl,
  reversed,
  image ${IMAGE_FRAGMENT}
}`);

export const SERTA_TRUST_BADGES_FRAGMENT = defineQuery(`{
  _key,
  _type,
  backgroundColor,
  badges[] {
    _key,
    _type,
    heading,
    body,
    link,
    linkLabel,
    iconUrl,
    icon ${IMAGE_FRAGMENT}
  }
}`);

export const SERTA_ZONED_COMFORT_FRAGMENT = defineQuery(`{
  _key,
  _type,
  eyebrow,
  headline,
  body,
  imageAlt,
  imageUrl,
  image ${IMAGE_FRAGMENT}
}`);

export const SERTA_ALIGNMENT_SECTION_FRAGMENT = defineQuery(`{
  _key,
  _type,
  eyebrow,
  headline,
  ctaText,
  ctaHref,
  videoUrl,
  posterUrl,
  poster ${IMAGE_FRAGMENT}
}`);

export const SERTA_ADVANTAGE_FRAGMENT = defineQuery(`{
  _key,
  _type,
  backgroundColor,
  features[] {
    _key,
    _type,
    eyebrow,
    heading,
    body,
    imageAlt,
    imageUrl,
    videoUrl,
    image ${IMAGE_FRAGMENT}
  }
}`);

export const SERTA_QUALITY_GUARANTEED_FRAGMENT = defineQuery(`{
  _key,
  _type,
  backgroundColor,
  items[] {
    _key,
    _type,
    heading,
    body,
    imageAlt,
    imageUrl,
    image ${IMAGE_FRAGMENT}
  }
}`);

export const SERTA_STORE_LOCATOR_FRAGMENT = defineQuery(`{
  _key,
  _type,
  eyebrow,
  headline,
  body,
  ctaText,
  ctaHref,
  imageAlt,
  imageUrl,
  image ${IMAGE_FRAGMENT}
}`);

export const SERTA_BRAND_HISTORY_FRAGMENT = defineQuery(`{
  _key,
  _type,
  headline,
  body,
  ctaText,
  ctaHref,
  imageAlt,
  imageUrl,
  image ${IMAGE_FRAGMENT}
}`);

export const SECTIONS_FRAGMENT = () =>
  defineQuery(`
    _type == 'richtextSection' => ${RICHTEXT_SECTION_FRAGMENT},
    _type == 'carouselSection' => ${CAROUSEL_SECTION_FRAGMENT},
    _type == 'collectionListSection' => ${COLLECTION_LIST_SECTION_FRAGMENT},
    _type == 'featuredProductSection' => ${FEATURED_PRODUCT_SECTION_FRAGMENT},
    _type == 'featuredCollectionSection' => ${FEATURED_COLLECTION_SECTION_FRAGMENT},
    _type == 'imageBannerSection' => ${IMAGE_BANNER_SECTION_FRAGMENT},
    _type == 'sertaPromoBanner' => ${SERTA_PROMO_BANNER_FRAGMENT},
    _type == 'sertaHeroCarousel' => ${SERTA_HERO_CAROUSEL_FRAGMENT},
    _type == 'sertaShopByCollection' => ${SERTA_SHOP_BY_COLLECTION_FRAGMENT},
    _type == 'sertaShopByType' => ${SERTA_SHOP_BY_TYPE_FRAGMENT},
    _type == 'sertaPerfectSleeperFeature' => ${SERTA_PERFECT_SLEEPER_FEATURE_FRAGMENT},
    _type == 'sertaTrustBadges' => ${SERTA_TRUST_BADGES_FRAGMENT},
    _type == 'sertaZonedComfort' => ${SERTA_ZONED_COMFORT_FRAGMENT},
    _type == 'sertaAlignmentSection' => ${SERTA_ALIGNMENT_SECTION_FRAGMENT},
    _type == 'sertaAdvantage' => ${SERTA_ADVANTAGE_FRAGMENT},
    _type == 'sertaQualityGuaranteed' => ${SERTA_QUALITY_GUARANTEED_FRAGMENT},
    _type == 'sertaStoreLocator' => ${SERTA_STORE_LOCATOR_FRAGMENT},
    _type == 'sertaBrandHistory' => ${SERTA_BRAND_HISTORY_FRAGMENT},
  `);

export const COLLECTION_SECTIONS_FRAGMENT = () =>
  defineQuery(`
    _type == 'collectionBannerSection' => ${COLLECTION_BANNER_SECTION_FRAGMENT},
    _type == 'collectionProductGridSection' => ${COLLECTION_PRODUCT_GRID_SECTION_FRAGMENT},
  `);

export const PRODUCT_SECTIONS_FRAGMENT = () =>
  defineQuery(`
    _type == 'productInformationSection' => ${PRODUCT_INFORMATION_SECTION_FRAGMENT},
    _type == 'relatedProductsSection' => ${RELATED_PRODUCTS_SECTION_FRAGMENT},
  `);
