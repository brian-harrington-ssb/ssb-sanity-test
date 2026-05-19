import {defineField} from 'sanity';

export default defineField({
  name: 'sertaTrustBadge',
  title: 'Trust Badge',
  type: 'object',
  fields: [
    defineField({name: 'heading', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 3}),
    defineField({name: 'icon', type: 'image', options: {hotspot: true}}),
    defineField({name: 'link', type: 'string'}),
    defineField({name: 'linkLabel', type: 'string', title: 'Link Label'}),
    defineField({name: 'iconUrl', type: 'string', title: 'Icon URL (fallback)'}),
  ],
  preview: {
    select: {title: 'heading', media: 'icon'},
    prepare({title, media}) {
      return {title: title || 'Trust Badge', media};
    },
  },
});
