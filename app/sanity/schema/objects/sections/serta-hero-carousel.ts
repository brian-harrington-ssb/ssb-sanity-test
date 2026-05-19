import {defineField} from 'sanity';

export default defineField({
  name: 'sertaHeroCarousel',
  title: 'Hero Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      type: 'array',
      of: [{type: 'sertaHeroSlide'}],
    }),
    defineField({
      name: 'autoPlayInterval',
      type: 'number',
      title: 'Auto-play Interval (ms)',
      description: 'Milliseconds between slides',
      initialValue: 6000,
    }),
    defineField({
      name: 'showArrows',
      type: 'boolean',
      title: 'Show Arrows',
      initialValue: true,
    }),
    defineField({
      name: 'showDots',
      type: 'boolean',
      title: 'Show Dots',
      initialValue: true,
    }),
  ],
  preview: {
    select: {slides: 'slides'},
    prepare({slides}) {
      const count = slides?.length ?? 0;
      return {title: 'Hero Carousel', subtitle: `${count} slide${count !== 1 ? 's' : ''}`};
    },
  },
});
