import {defineField} from 'sanity';

export default defineField({
  name: 'sertaStoreLocator',
  title: 'Store Locator',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 4}),
    defineField({name: 'ctaText', type: 'string', title: 'CTA Label'}),
    defineField({name: 'ctaHref', type: 'string', title: 'CTA URL'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', type: 'string', title: 'Image Alt Text'}),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Store Locator', subtitle: 'Store Locator', media};
    },
  },
});
