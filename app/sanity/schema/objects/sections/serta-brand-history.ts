import {defineField} from 'sanity';

export default defineField({
  name: 'sertaBrandHistory',
  title: 'Brand History',
  type: 'object',
  fields: [
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 6, title: 'Body'}),
    defineField({name: 'ctaText', type: 'string', title: 'CTA Label'}),
    defineField({name: 'ctaHref', type: 'string', title: 'CTA URL'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', type: 'string', title: 'Image Alt Text'}),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Brand History', subtitle: 'Brand History', media};
    },
  },
});
