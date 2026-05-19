import {defineField} from 'sanity';

export default defineField({
  name: 'sertaShopByType',
  title: 'Shop By Type',
  type: 'object',
  fields: [
    defineField({
      name: 'showShopAll',
      type: 'boolean',
      title: 'Show Shop All',
      initialValue: true,
    }),
    defineField({
      name: 'types',
      type: 'array',
      of: [{type: 'sertaMattressType'}],
    }),
  ],
  preview: {
    select: {types: 'types'},
    prepare({types}) {
      const count = types?.length ?? 0;
      return {title: 'Shop By Type', subtitle: `${count} type${count !== 1 ? 's' : ''}`};
    },
  },
});
