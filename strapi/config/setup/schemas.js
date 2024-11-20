const schemas = {
    hero: {
      kind: 'singleType',
      info: {
        singularName: 'hero',
        pluralName: 'heroes',
        displayName: 'Hero Section',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: { type: 'string', required: true },
        description: { type: 'text', required: true },
        chip_text: { type: 'string' },
        cta_demo_text: { type: 'string' },
        cta_register_text: { type: 'string' },
        cta_register_link: { type: 'string' },
      },
    },
    partner: {
      kind: 'collectionType',
      info: {
        singularName: 'partner',
        pluralName: 'partners',
        displayName: 'Partner Companies',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        name: { type: 'string', required: true },
        order: { type: 'integer' },
      },
    },
    benefit: {
      kind: 'singleType',
      info: {
        singularName: 'benefit',
        pluralName: 'benefits',
        displayName: 'Business Benefits',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: { type: 'string', required: true },
        description: { type: 'text', required: true },
      },
    },
    solution: {
      kind: 'collectionType',
      info: {
        singularName: 'solution',
        pluralName: 'solutions',
        displayName: 'Business Solutions',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: { type: 'string', required: true },
        description: { type: 'text', required: true },
        link: { type: 'string', required: true },
      },
    },
    feature: {
      kind: 'collectionType',
      info: {
        singularName: 'feature',
        pluralName: 'features',
        displayName: 'Features',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: { type: 'string', required: true },
        description: { type: 'text', required: true },
      },
    },
    testimonial: {
      kind: 'collectionType',
      info: {
        singularName: 'testimonial',
        pluralName: 'testimonials',
        displayName: 'Testimonials',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        company_name: { type: 'string', required: true },
        testimonial_text: { type: 'text', required: true },
        person_name: { type: 'string', required: true },
        person_position: { type: 'string', required: true },
      },
    },
    cta: {
      kind: 'singleType',
      info: {
        singularName: 'cta',
        pluralName: 'ctas',
        displayName: 'CTA Section',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: { type: 'string', required: true },
        description: { type: 'text', required: true },
        feature_button_text: { type: 'string' },
        register_button_text: { type: 'string' },
        register_button_link: { type: 'string' },
      },
    },
  };
  
  module.exports = schemas;