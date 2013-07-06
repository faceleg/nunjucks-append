var append = require('./lib/nunjucks-tags/append'),
  output = require('./lib/nunjucks-tags/output');

module.exports = {

  /**
   * Add the nunjucks extensions to the given nunjucks environment
   *
   * @param {Object} nunjucksEnvironment The nunjucks environment to extend.
   */
  initialise: function(nunjucksEnvironment) {
    nunjucksEnvironment.addExtension('append', append);
    nunjucksEnvironment.addExtension('output', output);
  }
}
