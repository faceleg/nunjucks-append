var content = require('../content');

/**
 * Prepend the content of this tag to the name register, then output the register.
 */
function Output() {
  this.tags = ['output'];

  this.parse = function(parser, nodes, lexer) {
    var token = parser.nextToken();

    var nodeList = new nodes.NodeList();
    nodeList.addChild(parser.parsePrimary());

    parser.advanceAfterBlockEnd(token.value);

    var body = parser.parseUntilBlocks('endoutput');
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, 'run', nodeList, [body]);
  };

  this.run = function(context, name, body) {
    content.add(name, body());
    return content.get(name);
  };

}

module.exports = new Output();

