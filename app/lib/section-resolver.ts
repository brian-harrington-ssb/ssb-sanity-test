import {FooterSocialLinksOnly} from '~/components/footers/footer-social-links-only';
import {CarouselSection} from '~/components/sections/carousel-section';
import {CollectionBannerSection} from '~/components/sections/collection-banner-section';
import {CollectionListSection} from '~/components/sections/collection-list-section';
import {CollectionProductGridSection} from '~/components/sections/collection-product-grid-section';
import {FeaturedCollectionSection} from '~/components/sections/featured-collection-section';
import {FeaturedProductSection} from '~/components/sections/featured-product-section';
import {ImageBannerSection} from '~/components/sections/image-banner-section';
import {ProductInformationSection} from '~/components/sections/product-information-section';
import {RelatedProductsSection} from '~/components/sections/related-products-section';
import {RichtextSection} from '~/components/sections/richtext-section';
import {SertaAdvantageSection} from '~/components/sections/serta/serta-advantage';
import {SertaAlignmentSection} from '~/components/sections/serta/serta-alignment-section';
import {SertaBrandHistorySection} from '~/components/sections/serta/serta-brand-history';
import {SertaHeroCarouselSection} from '~/components/sections/serta/serta-hero-carousel';
import {SertaPerfectSleeperFeatureSection} from '~/components/sections/serta/serta-perfect-sleeper-feature';
import {SertaPromoBannerSection} from '~/components/sections/serta/serta-promo-banner';
import {SertaQualityGuaranteedSection} from '~/components/sections/serta/serta-quality-guaranteed';
import {SertaShopByCollectionSection} from '~/components/sections/serta/serta-shop-by-collection';
import {SertaShopByTypeSection} from '~/components/sections/serta/serta-shop-by-type';
import {SertaStoreLocatorSection} from '~/components/sections/serta/serta-store-locator';
import {SertaTrustBadgesSection} from '~/components/sections/serta/serta-trust-badges';
import {SertaZonedComfortSection} from '~/components/sections/serta/serta-zoned-comfort';

export const sections: {
  [key: string]: React.FC<any>;
} = {
  carouselSection: CarouselSection,
  collectionBannerSection: CollectionBannerSection,
  collectionListSection: CollectionListSection,
  collectionProductGridSection: CollectionProductGridSection,
  featuredCollectionSection: FeaturedCollectionSection,
  featuredProductSection: FeaturedProductSection,
  imageBannerSection: ImageBannerSection,
  productInformationSection: ProductInformationSection,
  relatedProductsSection: RelatedProductsSection,
  richtextSection: RichtextSection,
  sertaAdvantage: SertaAdvantageSection,
  sertaAlignmentSection: SertaAlignmentSection,
  sertaBrandHistory: SertaBrandHistorySection,
  sertaHeroCarousel: SertaHeroCarouselSection,
  sertaPerfectSleeperFeature: SertaPerfectSleeperFeatureSection,
  sertaPromoBanner: SertaPromoBannerSection,
  sertaQualityGuaranteed: SertaQualityGuaranteedSection,
  sertaShopByCollection: SertaShopByCollectionSection,
  sertaShopByType: SertaShopByTypeSection,
  sertaStoreLocator: SertaStoreLocatorSection,
  sertaTrustBadges: SertaTrustBadgesSection,
  sertaZonedComfort: SertaZonedComfortSection,
  socialLinksOnly: FooterSocialLinksOnly,
};
