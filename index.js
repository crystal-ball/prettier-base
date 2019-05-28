module.exports = {
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 90,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  // --- Language overrides
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
  ],
}
