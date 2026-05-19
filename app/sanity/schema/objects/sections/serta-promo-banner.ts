import {defineField} from 'sanity';

export default defineField({
  name: 'sertaPromoBanner',
  title: 'Promo Banner',
  type: 'object',
  fields: [
    defineField({name: 'message', type: 'string', title: 'Message'}),
    defineField({name: 'ctaText', type: 'string', title: 'CTA Label'}),
    defineField({name: 'ctaUrl', type: 'string', title: 'CTA URL'}),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color, e.g. #001E6C',
    }),
  ],
  preview: {
    select: {title: 'message'},
    prepare({title}) {
      return {title: title || 'Promo Banner', subtitle: 'Promo Banner'};
    },
  },
});
