const { createStrapi } = require('@strapi/strapi');
const schemas = require('../config/setup/schemas');
const seedData = require('../config/setup/seed-data');
const SetupUtils = require('./setup-utils');

function validateSchemasAndData(schemas, seedData) {
  // Validate schemas
  if (!schemas || Object.keys(schemas).length === 0) {
    throw new Error('No schemas defined');
  }

  // Add comprehensive schema validation
  for (const [contentName, schema] of Object.entries(schemas)) {
    // Explicit checks for required schema properties
    if (!schema) {
      throw new Error(`Schema for '${contentName}' is undefined`);
    }

    // Validate kind attribute
    if (!schema.kind) {
      console.warn(`Warning: Schema for '${contentName}' is missing 'kind' attribute. Defaulting to 'collectionType'.`);
      schema.kind = 'collectionType'; // Default fallback
    }

    // Validate info object
    if (!schema.info || typeof schema.info !== 'object') {
      throw new Error(`Schema for '${contentName}' is missing or has invalid 'info' object`);
    }

    // Validate required info properties
    const requiredInfoProps = ['singularName', 'pluralName', 'displayName'];
    for (const prop of requiredInfoProps) {
      if (!schema.info[prop]) {
        throw new Error(`Schema for '${contentName}' is missing '${prop}' in info object`);
      }
    }

    // Validate attributes
    if (!schema.attributes || typeof schema.attributes !== 'object') {
      throw new Error(`Schema for '${contentName}' is missing or has invalid 'attributes' object`);
    }

    // Optional: Additional validation for attributes
    for (const [attrName, attrConfig] of Object.entries(schema.attributes)) {
      if (!attrConfig.type) {
        console.warn(`Warning: Attribute '${attrName}' in '${contentName}' is missing type`);
      }
    }
  }

  // Validate seed data
  if (!seedData || Object.keys(seedData).length === 0) {
    throw new Error('No seed data defined');
  }

  // Check that each content type in seed data has a corresponding schema
  for (const contentName of Object.keys(seedData)) {
    if (!schemas[contentName]) {
      console.warn(`Warning: Seed data exists for '${contentName}' but no corresponding schema found`);
    }
  }
}

async function setup() {
  let app = null;
  let setupUtils = null;

  try {
    // Call the validation function before proceeding
    validateSchemasAndData(schemas, seedData);

    // Rest of the existing setup code remains the same
    app = createStrapi({
      appDir: process.cwd(),
      autoReload: true,
      serveAdminPanel: false,
    });

    // Load and start Strapi
    await app.load();
    await app.postListen();
    await app.start();

    setupUtils = new SetupUtils(app);

    // Create all content types
    for (const [contentName, schema] of Object.entries(schemas)) {
      console.log(`Creating content type: ${contentName}`);
      await setupUtils.createContentType(contentName, schema);
    }

    // Seed all data
    for (const [contentName, data] of Object.entries(seedData)) {
      console.log(`Seeding content type: ${contentName}`);
      const isCollection = Array.isArray(data);
      await setupUtils.seedContentType(contentName, data, isCollection);
    }

    console.log('Setup completed successfully! 🎉');
  } catch (error) {
    console.error('Setup failed:', error);
    
    // Additional detailed error logging
    if (error.details) {
      console.error('Error details:', JSON.stringify(error.details, null, 2));
    }
    
    // Log full error stack for debugging
    console.error('Error stack:', error.stack);
    
    throw error;
  } finally {
    if (app) {
      await app.destroy();
    }
  }
}

module.exports = setup;