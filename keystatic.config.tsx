import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : { kind: 'cloud' },
  cloud: {
    project: 'tristar/tristar-locksmith', // placeholder — user will update
  },
  singletons: {
    business: singleton({
      label: 'Business Info',
      path: 'content/business',
      schema: {
        name: fields.text({ label: 'Business Name' }),
        phone: fields.text({ label: 'Phone' }),
        phoneHref: fields.text({ label: 'Phone href (e.g. tel:8653813931)' }),
        hours: fields.text({ label: 'Hours' }),
        city: fields.text({ label: 'City' }),
        state: fields.text({ label: 'State' }),
        address: fields.text({ label: 'Address' }),
      },
    }),
  },
  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'content/services/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        icon: fields.text({ label: 'Icon (emoji)' }),
        shortDescription: fields.text({ label: 'Short Description', multiline: true }),
        longDescription: fields.text({ label: 'Long Description', multiline: true }),
        features: fields.array(
          fields.text({ label: 'Feature' }),
          { label: 'Features', itemLabel: (props) => props.value }
        ),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          { label: 'FAQs', itemLabel: (props) => props.fields.question.value }
        ),
      },
    }),
    serviceAreas: collection({
      label: 'Service Areas',
      slugField: 'name',
      path: 'content/service-areas/*',
      schema: {
        name: fields.slug({ name: { label: 'Area Name' } }),
        region: fields.text({ label: 'Region' }),
        description: fields.text({ label: 'Description', multiline: true }),
        nearbyAreas: fields.array(
          fields.text({ label: 'Area Name' }),
          { label: 'Nearby Areas', itemLabel: (props) => props.value }
        ),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'name',
      path: 'content/testimonials/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        rating: fields.integer({ label: 'Rating (1-5)' }),
        text: fields.text({ label: 'Review Text', multiline: true }),
        location: fields.text({ label: 'Location (e.g. Knoxville, TN)' }),
      },
    }),
    faqs: collection({
      label: 'FAQs',
      slugField: 'question',
      path: 'content/faqs/*',
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ label: 'Answer', multiline: true }),
      },
    }),
    advantages: collection({
      label: 'Advantages',
      slugField: 'title',
      path: 'content/advantages/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        icon: fields.text({ label: 'Icon (emoji)' }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
});
