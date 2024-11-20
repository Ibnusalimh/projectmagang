'use strict';
  const { createCoreController } = require('@strapi/strapi').factories;
  
  module.exports = createCoreController('api::hero.hero', ({ strapi }) => ({
    // Customize single type create/update
    async create(ctx) {
      // For single types, we typically want to update or create if not exists
      const existingEntry = await strapi.service('api::hero.hero').find();
      
      if (existingEntry) {
        return this.update(ctx);
      }
      
      return super.create(ctx);
    },
  
    async update(ctx) {
      // Ensure only one entry exists for single types
      return super.update(ctx);
    }
  }));