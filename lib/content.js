var captured = {};

module.exports = {

  /**
   * Prepend content to the named register.
   *
   * @param {String} name Name of the output register.
   * @param {String} content Content to be prepended.
   */
  add: function(name, content) {
    if (captured[name]) {
      return captured[name] = content + captured[name];
    }
    return captured[name] = content;
  },

  /**
   * Get the content for the named register.
   *
   * @param {String} name Name of the register.
   * @return {String} The content of the register.
   */
  get: function(name) {
    return captured[name];
  }
}
