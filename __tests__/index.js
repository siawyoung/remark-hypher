const remark = require('remark')
const visit = require('unist-util-visit')

const plugin = require('../')

it('should use hypher properly', () => {
  const output = remark()
    .use(plugin)
    .processSync('This is a long and important sentence.')
  expect(String(output)).toMatchInlineSnapshot(`
    "This is a long and im­por­tant sen­tence.
    "
  `)
})

it('should use minLength setting properly', () => {
  const output = remark()
    .use(plugin, { minLength: 15 })
    .processSync('This is a long and important sentence.')
  expect(String(output)).toMatchInlineSnapshot(`
    "This is a long and important sentence.
    "
  `)
})

it('should use leftmin setting correctly', () => {
  const output = remark()
    .use(plugin, { leftmin: 3 })
    .processSync('This is a long and important sentence.')
  expect(String(output)).toMatchInlineSnapshot(`
    "This is a long and impor­tant sen­tence.
    "
  `)
})
