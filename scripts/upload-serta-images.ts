/**
 * One-time script: uploads all serta imageUrl / iconUrl / posterUrl values
 * to Sanity's asset library and patches the home document to use real image refs.
 *
 * Run with:
 *   pnpm tsx --env-file=.env scripts/upload-serta-images.ts
 */
import {createClient} from '@sanity/client';

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.PUBLIC_SANITY_STUDIO_DATASET!,
  token: process.env.SANITY_WRITE_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function uploadUrl(originalUrl: string): Promise<string> {
  // Sanity's image pipeline doesn't support AVIF — request JPEG from AEM CDN instead
  const url = originalUrl.replace(/\.avif(\?.*)?$/, '.jpg');
  const filename = (url.split('/').pop()?.split('?')[0] ?? 'image');
  process.stdout.write(`  uploading ${filename} ... `);

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'image/jpeg,image/png,image/webp,image/*',
    },
  });
  if (!res.ok) throw new Error(`fetch failed: ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());

  const ext = (url.split('.').pop()?.split('?')[0] ?? 'jpg').toLowerCase();
  const mime =
    ext === 'png'  ? 'image/png'  :
    ext === 'webp' ? 'image/webp' :
    ext === 'svg'  ? 'image/svg+xml' : 'image/jpeg';

  const asset = await client.assets.upload('image', buf, {
    filename,
    contentType: mime,
  });
  console.log(`done → ${asset._id}`);
  return asset._id;
}

function ref(id: string) {
  return {_type: 'image', asset: {_type: 'reference', _ref: id}};
}

async function main() {
  const doc: any = await client.fetch('*[_id == "home"][0]');
  const sections: any[] = doc.sections ?? [];

  for (const section of sections) {
    switch (section._type) {
      case 'sertaHeroCarousel':
        console.log('Hero Carousel slides:');
        for (const slide of section.slides ?? []) {
          if (slide.imageUrl) {
            slide.image = ref(await uploadUrl(slide.imageUrl));
          }
        }
        break;

      case 'sertaShopByCollection':
        console.log('Shop by Collection:');
        for (const item of section.collections ?? []) {
          if (item.imageUrl) {
            item.image = ref(await uploadUrl(item.imageUrl));
          }
        }
        break;

      case 'sertaShopByType':
        console.log('Shop by Type:');
        for (const item of section.types ?? []) {
          if (item.imageUrl) {
            item.image = ref(await uploadUrl(item.imageUrl));
          }
        }
        break;

      case 'sertaPerfectSleeperFeature':
        console.log('Perfect Sleeper Feature:');
        if (section.imageUrl) {
          section.image = ref(await uploadUrl(section.imageUrl));
        }
        break;

      case 'sertaTrustBadges':
        console.log('Trust Badges:');
        for (const badge of section.badges ?? []) {
          if (badge.iconUrl) {
            badge.icon = ref(await uploadUrl(badge.iconUrl));
          }
        }
        break;

      case 'sertaZonedComfort':
        console.log('Zoned Comfort:');
        if (section.imageUrl) {
          section.image = ref(await uploadUrl(section.imageUrl));
        }
        break;

      case 'sertaAlignmentSection':
        console.log('Alignment Section:');
        if (section.posterUrl) {
          section.poster = ref(await uploadUrl(section.posterUrl));
        }
        break;

      case 'sertaAdvantage':
        console.log('Advantage:');
        for (const feature of section.features ?? []) {
          if (feature.imageUrl) {
            feature.image = ref(await uploadUrl(feature.imageUrl));
          }
        }
        break;

      case 'sertaQualityGuaranteed':
        console.log('Quality Guaranteed:');
        for (const item of section.items ?? []) {
          if (item.imageUrl) {
            item.image = ref(await uploadUrl(item.imageUrl));
          }
        }
        break;

      case 'sertaStoreLocator':
        console.log('Store Locator:');
        if (section.imageUrl) {
          section.image = ref(await uploadUrl(section.imageUrl));
        }
        break;

      case 'sertaBrandHistory':
        console.log('Brand History:');
        if (section.imageUrl) {
          section.image = ref(await uploadUrl(section.imageUrl));
        }
        break;
    }
  }

  console.log('\nPatching home document...');
  await client.patch('home').set({sections}).commit();
  console.log('Done! All images uploaded and document updated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
