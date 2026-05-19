import {defineField} from 'sanity';

export default defineField({
  name: 'sertaQualityItem',
  title: 'Quality Item',
  type: 'object',
  fields: [
    defineField({name: 'heading', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 3}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', type: 'string', title: 'Image Alt Text'}),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'heading', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Quality Item', media};
    },
  },
});
