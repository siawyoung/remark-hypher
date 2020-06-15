const visit = require('unist-util-visit')
const Hypher = require('hypher')

const remarkHypher = (options = {}) => {
  const { language = null, ...rest } = options
  const opts = language
    ? { ...language, ...rest }
    : { ...require('hyphenation.en-us'), ...rest }
  const hyphenator = new Hypher(opts)
  const transformer = (tree) => {
    visit(tree, 'text', (node) => {
      node.value = hyphenator.hyphenateText(node.value, options.minLength || 4)
    })
  }
  return transformer
}

module.exports = remarkHypher
