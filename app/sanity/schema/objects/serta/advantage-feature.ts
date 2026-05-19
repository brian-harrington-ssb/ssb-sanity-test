import {defineField} from 'sanity';

export default defineField({
  name: 'sertaAdvantageFeature',
  title: 'Advantage Feature',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'heading', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 4}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageAlt', type: 'string', title: 'Image Alt Text'}),
    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
      description: 'Optional mp4 URL',
    }),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'heading', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Advantage Feature', media};
    },
  },
});
