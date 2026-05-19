import {defineField} from 'sanity';

export default defineField({
  name: 'sertaTrustBadges',
  title: 'Trust Badges',
  type: 'object',
  fields: [
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
