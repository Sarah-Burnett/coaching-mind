"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByUsername: async (ctx) => {
    return await strapi.query("coach").findOne({ user: { id: 1 } });
  },
};
