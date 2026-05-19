import {defineField} from 'sanity';

export default defineField({
  name: 'sertaZonedComfort',
  title: 'Zoned Comfort',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 4}),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color, e.g. #F7F4F0',
      initialValue: '#F7F4F0',
    }),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', type: 'string', title: 'Image Alt Text'}),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Zoned Comfort', subtitle: 'Zoned Comfort', media};
    },
  },
});
