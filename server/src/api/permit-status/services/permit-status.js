'use strict';

/**
 * permit-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::permit-status.permit-status');
