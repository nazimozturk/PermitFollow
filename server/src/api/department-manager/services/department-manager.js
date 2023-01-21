'use strict';

/**
 * department-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::department-manager.department-manager');
