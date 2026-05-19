import {defineField} from 'sanity';

export default defineField({
  name: 'sertaShopByCollection',
  title: 'Shop By Collection',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow', initialValue: 'Shop by collection'}),
    defineField({name: 'headline', type: 'string', title: 'Headline', initialValue: 'Thoughtfully designed for every sleeper'}),
    defineField({
      name: 'showShopAll',
      type: 'boolean',
      title: 'Show Shop All',
      initialValue: true,
    }),
    defineField({
      name: 'collections',
      type: 'array',
      of: [{type: 'sertaCollectionItem'}],
    }),
  ],
  preview: {
    select: {collections: 'collections'},
    prepare({collections}) {
      const count = collections?.length ?? 0;
      return {title: 'Shop By Collection', subtitle: `${count} item${count !== 1 ? 's' : ''}`};
    },
  },
});
