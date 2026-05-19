import {defineField} from 'sanity';

export default defineField({
  name: 'sertaMattressType',
  title: 'Mattress Type',
  type: 'object',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'desc', type: 'text', title: 'Description', rows: 3}),
    defineField({name: 'ctaLabel', type: 'string', title: 'CTA Label', description: 'e.g. Shop Foam'}),
    defineField({name: 'href', type: 'string'}),
    defineField({name: 'imageUrl', type: 'string', title: 'Image URL (fallback)'}),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Mattress Type', media};
    },
  },
});
