const fs = require('fs').promises;
const path = require('path');

class SetupUtils {
  constructor(strapi) {
    this.strapi = strapi;
    this.apiDir = path.join(process.cwd(), 'src', 'api');
  }

  async createDirectoryStructure(contentName) {
    const contentTypeDir = path.join(this.apiDir, contentName);
    const dirs = [
      path.join(contentTypeDir, 'content-types', contentName),
      path.join(contentTypeDir, 'controllers'),
      path.join(contentTypeDir, 'services'),
      path.join(contentTypeDir, 'routes'),
    ];

    for (const dir of dirs) {
      await fs.mkdir(dir, { recursive: true });
    }
    return { contentTypeDir, dirs };
  }

  async writeSchemaFile(contentName, schema) {
    const schemaPath = path.join(this.apiDir, contentName, 'content-types', contentName, 'schema.json');
    await fs.writeFile(schemaPath, JSON.stringify(schema, null, 2));
  }

  async writeControllerFile(contentName, schema) {
    const controllerPath = path.join(this.apiDir, contentName, 'controllers', `${contentName}.js`);
    
    let controllerContent;
    
    if (schema.kind === 'singleType') {
      controllerContent = `'use strict';
  const { createCoreController } = require('@strapi/strapi').factories;
  
  module.exports = createCoreController('api::${contentName}.${contentName}', ({ strapi }) => ({
    // Customize single type create/update
    async create(ctx) {
      // For single types, we typically want to update or create if not exists
      const existingEntry = await strapi.service('api::${contentName}.${contentName}').find();
      
      if (existingEntry) {
        return this.update(ctx);
      }
      
      return super.create(ctx);
    },
  
    async update(ctx) {
      // Ensure only one entry exists for single types
      return super.update(ctx);
    }
  }));`;
    } else {
      controllerContent = `'use strict';
  const { createCoreController } = require('@strapi/strapi').factories;
  
  module.exports = createCoreController('api::${contentName}.${contentName}');`;
    }
  
    await fs.writeFile(controllerPath, controllerContent);
  }

  async writeServiceFile(contentName) {
    const servicePath = path.join(this.apiDir, contentName, 'services', `${contentName}.js`);
    const content = `'use strict';
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::${contentName}.${contentName}');`;
    await fs.writeFile(servicePath, content);
  }

  async writeRoutesFile(contentName, schema) {
    const routesPath = path.join(this.apiDir, contentName, 'routes', `${contentName}.js`);
    
    let baseRoutes = [];
  
    if (schema.kind === 'singleType') {
      // For single types, use singular route
      baseRoutes = [
        {
          method: 'POST',
          path: `/${contentName}`,
          handler: `${contentName}.create`,
          config: { policies: [], middlewares: [] },
        },
        {
          method: 'GET',
          path: `/${contentName}`,
          handler: `${contentName}.find`,
          config: { policies: [], middlewares: [] },
        },
        {
          method: 'PUT',
          path: `/${contentName}`,
          handler: `${contentName}.update`,
          config: { policies: [], middlewares: [] },
        }
      ];
    } else {
      // For collection types, use plural routes
      baseRoutes = [
        {
          method: 'POST',
          path: `/${contentName}s`,
          handler: `${contentName}.create`,
          config: { policies: [], middlewares: [] },
        },
        {
          method: 'GET',
          path: `/${contentName}s`,
          handler: `${contentName}.find`,
          config: { policies: [], middlewares: [] },
        },
        {
          method: 'GET',
          path: `/${contentName}/:id`,
          handler: `${contentName}.findOne`,
          config: { policies: [], middlewares: [] },
        },
        {
          method: 'PUT',
          path: `/${contentName}s/:id`,
          handler: `${contentName}.update`,
          config: { policies: [], middlewares: [] },
        },
        {
          method: 'DELETE',
          path: `/${contentName}s/:id`,
          handler: `${contentName}.delete`,
          config: { policies: [], middlewares: [] },
        }
      ];
    }
  
    const routes = { routes: baseRoutes };
    const content = `module.exports = ${JSON.stringify(routes, null, 2)};`;
    await fs.writeFile(routesPath, content);
  }

  async createContentType(contentName, schema) {
    try {
      // Explicit type checking and defaulting
      if (!schema) {
        throw new Error(`No schema provided for content type: ${contentName}`);
      }
  
      // Ensure kind is defined
      const contentKind = schema.kind || 'collectionType';
      
      console.log(`🔍 Creating Content Type: ${contentName}`);
      console.log(`Content Type Kind: ${contentKind}`);
      console.log('Full Schema:', JSON.stringify(schema, null, 2));
  
      // Validate schema before proceeding
      if (!schema.info) {
        throw new Error(`Schema for '${contentName}' is missing 'info' object`);
      }
  
      // Prepare full Strapi schema format with fallback values
      const strapiSchema = {
        kind: contentKind,
        collectionName: `components_${contentName}_${contentName}`,
        info: {
          singularName: schema.info.singularName || contentName,
          pluralName: schema.info.pluralName || `${contentName}s`,
          displayName: schema.info.displayName || contentName
        },
        options: schema.options || { draftAndPublish: true },
        attributes: schema.attributes || {}
      };
  
      // Rest of the existing creation logic...
      const { contentTypeDir } = await this.createDirectoryStructure(contentName);
      console.log(`📂 Directory created: ${contentTypeDir}`);
  
      await this.writeSchemaFile(contentName, strapiSchema);
      console.log(`📝 Schema file written for: ${contentName}`);
  
      // Generate and write additional files
      await this.writeControllerFile(contentName, strapiSchema);
      await this.writeServiceFile(contentName);
      await this.writeRoutesFile(contentName, strapiSchema);
  
      console.log(`🎉 Successfully prepared content type: ${contentName}`);
      
      return strapiSchema;
    } catch (error) {
      console.error(`❌ Content Type Creation Failed for ${contentName}:`, error);
      console.error('Detailed Error:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      throw error;
    }
  }

  getAllowedAttributes(contentName) {
    const schemas = require('../config/setup/schemas');
    const schema = schemas[contentName];
    
    if (!schema || !schema.attributes) {
      console.warn(`No schema found for content type: ${contentName}`);
      return [];
    }
    
    return Object.keys(schema.attributes);
  }

  async seedContentType(contentName, data, isCollection = false) {
    try {
      console.log(`Attempting to seed content type: ${contentName}`);
      console.log(`Data type: ${isCollection ? 'Collection' : 'Single Type'}`);
      console.log(`Data:`, JSON.stringify(data, null, 2));
  
      const contentType = `api::${contentName}.${contentName}`;
  
      // Verify content type exists using a different method
      const contentTypes = this.strapi.contentTypes;
      console.log('Available Content Types:', Object.keys(contentTypes));
  
      if (!contentTypes[contentType]) {
        throw new Error(`Content type '${contentType}' not found. Available types: ${Object.keys(contentTypes).join(', ')}`);
      }
  
      // Get the schema for this content type
      const schemas = require('../config/setup/schemas');
      const schema = schemas[contentName];
  
      if (!schema) {
        throw new Error(`No schema found for content type: ${contentName}`);
      }
  
      // Log available attributes from schema
      console.log('Schema Attributes:', Object.keys(schema.attributes || {}));
  
      if (isCollection) {
        for (const item of data) {
          console.log(`Seeding item:`, JSON.stringify(item, null, 2));
          
          // Sanitize item to only include schema attributes
          const sanitizedItem = {};
          for (const [key, value] of Object.entries(item)) {
            if (schema.attributes[key]) {
              sanitizedItem[key] = value;
            } else {
              console.warn(`Attribute '${key}' not found in schema for ${contentName}`);
            }
          }
  
          await this.strapi.entityService.create(contentType, {
            data: { 
              ...sanitizedItem, 
              publishedAt: new Date() 
            },
          });
        }
      } else {
        // Sanitize single type data
        const sanitizedData = {};
        for (const [key, value] of Object.entries(data)) {
          if (schema.attributes[key]) {
            sanitizedData[key] = value;
          } else {
            console.warn(`Attribute '${key}' not found in schema for ${contentName}`);
          }
        }
  
        await this.strapi.entityService.create(contentType, {
          data: { 
            ...sanitizedData, 
            publishedAt: new Date() 
          },
        });
      }
      
      console.log(`Successfully seeded: ${contentName}`);
    } catch (error) {
      console.error(`Detailed seeding error for ${contentName}:`, error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      
      // Log additional error details if available
      if (error.details) {
        console.error('Error details:', JSON.stringify(error.details, null, 2));
      }
      
      // Log full stack trace
      console.error('Error stack:', error.stack);
      
      throw error;
    }
  }}

module.exports = SetupUtils;
