import colorPicker from '../plugins/color-picker';
import rangeSlider from '../plugins/range-slider';
import blogPost from './documents/blog-post';
import collection from './documents/collection';
import collectionTemplate from './documents/collection-template';
import color from './documents/color';
import font from './documents/font';
import page from './documents/page';
import product from './documents/product';
import productTemplate from './documents/product-template';
import productVariant from './documents/product-variant';
import fontAsset from './objects/font/font-asset';
import fontCategory from './objects/font/font-category';
import socialLinksOnly from './objects/footers/social-links-only';
import announcementBar from './objects/global/announcement-bar';
import aspectRatios from './objects/global/aspect-ratios';
import bannerRichtext from './objects/global/banner-richtext';
import contentAlignment from './objects/global/content-alignment';
import contentPosition from './objects/global/content-position';
import footersList from './objects/global/footers-list';
import padding from './objects/global/padding';
import productRichtext from './objects/global/product-richtext';
import richtext from './objects/global/richtext';
import sectionSettings from './objects/global/section-settings';
import sectionsList, {
  collectionSections,
  productSections,
} from './objects/global/sections-list';
import seo from './objects/global/seo';
import anchor from './objects/navigation/anchor';
import externalLink from './objects/navigation/external-link';
import headerNavigation from './objects/navigation/header-navigation';
import internalButton from './objects/navigation/internal-button';
import internalLink from './objects/navigation/internal-link';
import link from './objects/navigation/link';
import nestedNavigation from './objects/navigation/nested-navigation';
import carouselSection from './objects/sections/carousel-section';
import collectionBanner from './objects/sections/collection-banner';
import collectionListSection from './objects/sections/collection-list-section';
import collectionProductGrid from './objects/sections/collection-product-grid';
import featuredCollectionSection from './objects/sections/featured-collection-section';
import featuredProductSection from './objects/sections/featured-product-section';
import imageBannerSection from './objects/sections/image-banner-section';
import productInformationSection from './objects/sections/product-information-section';
import relatedProductsSection from './objects/sections/related-products-section';
import richtextSection from './objects/sections/richtext-section';
import sertaAdvantage from './objects/sections/serta-advantage';
import sertaAlignmentSection from './objects/sections/serta-alignment-section';
import sertaBrandHistory from './objects/sections/serta-brand-history';
import sertaHeroCarousel from './objects/sections/serta-hero-carousel';
import sertaPerfectSleeperFeature from './objects/sections/serta-perfect-sleeper-feature';
import sertaPromoBanner from './objects/sections/serta-promo-banner';
import sertaQualityGuaranteed from './objects/sections/serta-quality-guaranteed';
import sertaShopByCollection from './objects/sections/serta-shop-by-collection';
import sertaShopByType from './objects/sections/serta-shop-by-type';
import sertaStoreLocator from './objects/sections/serta-store-locator';
import sertaTrustBadges from './objects/sections/serta-trust-badges';
import sertaZonedComfort from './objects/sections/serta-zoned-comfort';
import sertaAdvantageFeature from './objects/serta/advantage-feature';
import sertaCollectionItem from './objects/serta/collection-item';
import sertaHeroSlide from './objects/serta/hero-slide';
import sertaMattressType from './objects/serta/mattress-type';
import sertaQualityItem from './objects/serta/quality-item';
import sertaTrustBadge from './objects/serta/trust-badge';
import inventory from './objects/shopify/inventory';
import options from './objects/shopify/options';
import placeholderString from './objects/shopify/placeholder-string';
import priceRange from './objects/shopify/price-range';
import proxyString from './objects/shopify/proxy-string';
import shopifyCollection from './objects/shopify/shopify-collection';
import shopifyCollectionRule from './objects/shopify/shopify-collection-rule';
import shopifyProduct from './objects/shopify/shopify-product';
import shopifyProductVariant from './objects/shopify/shopify-product-variant';
import footer from './singletons/footer';
import header from './singletons/header';
import home from './singletons/home';
import settings from './singletons/settings';
import themeContent from './singletons/theme-content';

const singletons = [home, header, footer, settings, themeContent];
const documents = [
  page,
  color,
  collection,
  product,
  productTemplate,
  collectionTemplate,
  blogPost,
  productVariant,
  font,
];
const sections = [
  imageBannerSection,
  featuredCollectionSection,
  featuredProductSection,
  collectionListSection,
  productInformationSection,
  relatedProductsSection,
  carouselSection,
  richtextSection,
  collectionProductGrid,
  collectionBanner,
  sertaPromoBanner,
  sertaHeroCarousel,
  sertaShopByCollection,
  sertaShopByType,
  sertaPerfectSleeperFeature,
  sertaTrustBadges,
  sertaZonedComfort,
  sertaAlignmentSection,
  sertaAdvantage,
  sertaQualityGuaranteed,
  sertaStoreLocator,
  sertaBrandHistory,
];
const footers = [socialLinksOnly];
const sertaObjects = [
  sertaHeroSlide,
  sertaCollectionItem,
  sertaMattressType,
  sertaTrustBadge,
  sertaAdvantageFeature,
  sertaQualityItem,
];

const objects = [
  link,
  padding,
  contentPosition,
  contentAlignment,
  richtext,
  aspectRatios,
  internalLink,
  externalLink,
  nestedNavigation,
  footersList,
  sectionsList,
  productSections,
  collectionSections,
  productRichtext,
  bannerRichtext,
  fontAsset,
  fontCategory,
  seo,
  sectionSettings,
  anchor,
  headerNavigation,
  internalButton,
  announcementBar,
  rangeSlider,
  colorPicker,
  inventory,
  options,
  placeholderString,
  priceRange,
  proxyString,
  shopifyProduct,
  shopifyProductVariant,
  shopifyCollection,
  shopifyCollectionRule,
];

export const schemaTypes = [
  ...sertaObjects,
  ...objects,
  ...documents,
  ...sections,
  ...footers,
  ...singletons,
];
