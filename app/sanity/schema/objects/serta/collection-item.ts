import {defineField} from 'sanity';

export default defineField({
  name: 'sertaCollectionItem',
  title: 'Collection Item',
  type: 'object',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({name: 'price', type: 'string', description: 'e.g. Starting at $599'}),
    defineField({name: 'href', type: 'string'}),
    defineField({
      name: 'featured',
      type: 'boolean',
      description: "Show 'Most Popular' badge",
      initialValue: false,
    }),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Collection Item', media};
    },
  },
});
