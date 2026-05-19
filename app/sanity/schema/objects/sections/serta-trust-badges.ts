import {defineField} from 'sanity';

export default defineField({
  name: 'sertaTrustBadges',
  title: 'Trust Badges',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow', initialValue: 'Shop with confidence'}),
    defineField({name: 'headline', type: 'string', title: 'Headline', initialValue: "Buy online from a mattress company you can trust"}),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color',
    }),
    defineField({
      name: 'badges',
      type: 'array',
      of: [{type: 'sertaTrustBadge'}],
    }),
  ],
  preview: {
    select: {badges: 'badges'},
    prepare({badges}) {
      const count = badges?.length ?? 0;
      return {title: 'Trust Badges', subtitle: `${count} badge${count !== 1 ? 's' : ''}`};
    },
  },
});
