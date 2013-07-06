var content = require('../content');

/**
 * Append the content of this tag to the named register.
 */
function Append() {
  this.tags = ['append'];

  this.parse = function(parser, nodes, lexer) {
    var token = parser.nextToken();
    var args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(token.value);

    var body = parser.parseUntilBlocks('endappend');
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, 'run', args, [body]);
  };

  this.run = function(context, name, body) {
    content.add(name, body());
  };
}

module.exports = new Append();
