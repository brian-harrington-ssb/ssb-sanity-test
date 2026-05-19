import {defineField} from 'sanity';

export default defineField({
  name: 'sertaQualityGuaranteed',
  title: 'Quality Guaranteed',
  type: 'object',
  fields: [
    defineField({name: 'headline', type: 'string', title: 'Headline', initialValue: 'Quality guaranteed'}),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'sertaQualityItem'}],
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      const count = items?.length ?? 0;
      return {title: 'Quality Guaranteed', subtitle: `${count} item${count !== 1 ? 's' : ''}`};
    },
  },
});
