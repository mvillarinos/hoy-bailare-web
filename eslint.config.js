import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    css: true,
    html: true,
    markdown: 'prettier',
  },
})
