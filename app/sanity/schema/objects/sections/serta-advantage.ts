import {defineField} from 'sanity';

export default defineField({
  name: 'sertaAdvantage',
  title: 'Serta Advantage',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow', initialValue: 'The Serta advantage'}),
    defineField({name: 'headline', type: 'string', title: 'Headline', initialValue: 'Comfortable, supportive, and cooling sleep'}),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{type: 'sertaAdvantageFeature'}],
    }),
  ],
  preview: {
    select: {features: 'features'},
    prepare({features}) {
      const count = features?.length ?? 0;
      return {title: 'Serta Advantage', subtitle: `${count} feature${count !== 1 ? 's' : ''}`};
    },
  },
});
