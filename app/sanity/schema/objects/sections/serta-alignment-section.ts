import {defineField} from 'sanity';

export default defineField({
  name: 'sertaAlignmentSection',
  title: 'Alignment Banner',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'body', type: 'text', rows: 4}),
    defineField({name: 'ctaText', type: 'string', title: 'CTA Label'}),
    defineField({name: 'ctaHref', type: 'string', title: 'CTA URL'}),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Hex color, e.g. #FFFFFF',
      initialValue: '#FFFFFF',
    }),
    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
      description: 'mp4 URL',
    }),
    defineField({
      name: 'poster',
      type: 'image',
      title: 'Poster / Fallback Image',
      options: {hotspot: true},
    }),
    defineField({name: 'posterUrl', type: 'string', title: 'Poster URL (fallback)'}),
  ],
  preview: {
    select: {title: 'headline', media: 'poster'},
    prepare({title, media}) {
      return {title: title || 'Alignment Banner', subtitle: 'Alignment Banner', media};
    },
  },
});
