import {defineField} from 'sanity';

export default defineField({
  name: 'sertaPerfectSleeperFeature',
  title: 'Perfect Sleeper Feature',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 5}),
    defineField({name: 'ctaText', type: 'string', title: 'CTA Label'}),
    defineField({name: 'ctaHref', type: 'string', title: 'CTA URL'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', type: 'string', title: 'Image Alt Text'}),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
    defineField({
      name: 'reversed',
      type: 'boolean',
      description: 'Flip image/text layout',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Perfect Sleeper Feature', subtitle: 'Perfect Sleeper Feature', media};
    },
  },
});
