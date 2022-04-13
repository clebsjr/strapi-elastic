const { elasticsearchManager } = require('../services');

module.exports = () => async (ctx, next) => {
  elasticsearchManager(ctx);
  await next();
};
