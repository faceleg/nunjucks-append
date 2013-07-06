var register = {};

module.exports = {

  /**
   * Prepend content to the named register.
   *
   * @param {String} name Name of the output register.
   * @param {String} content Content to be prepended.
   */
  add: function(name, content) {
    if (register[name]) {
      return register[name] = content + register[name];
    }
    return register[name] = content;
  },

  /**
   * Get the content for the named register.
   *
   * @param {String} name Name of the register.
   * @return {String} The content of the register.
   */
  get: function(name) {
    var content = register[name];
    delete register[name];
    return content;
  }
}
