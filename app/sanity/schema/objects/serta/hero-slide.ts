import {defineField} from 'sanity';

export default defineField({
  name: 'sertaHeroSlide',
  title: 'Hero Slide',
  type: 'object',
  fields: [
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'label', type: 'string', title: 'Label'}),
    defineField({name: 'headline', type: 'string', title: 'Headline'}),
    defineField({name: 'body', type: 'text', title: 'Body', rows: 3}),
    defineField({name: 'cta', type: 'string', title: 'CTA Label'}),
    defineField({name: 'ctaHref', type: 'string', title: 'CTA URL'}),
    defineField({
      name: 'theme',
      type: 'string',
      title: 'Theme',
      options: {list: ['dark', 'light']},
      initialValue: 'dark',
    }),
    defineField({
      name: 'imageCentered',
      type: 'boolean',
      title: 'Image Centered',
      description: 'Display image contained instead of full-bleed',
      initialValue: false,
    }),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color when image is centered, e.g. #F7F4F0',
    }),
    defineField({
      name: 'imageUrl',
      type: 'string',
      title: 'Image URL (fallback)',
      description: 'External image URL used when no Sanity asset is uploaded',
    }),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Slide', media};
    },
  },
});
