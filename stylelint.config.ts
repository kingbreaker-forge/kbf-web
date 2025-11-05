/** Stylelint 16.x, Prettier-friendly (no stylelint-config-prettier needed) */
export default {
  extends: ['stylelint-config-recommended'],
  overrides: [
    // Let Stylelint understand <style> blocks in .vue/.html
    {
      files: ['**/*.vue', '**/*.html'],
      customSyntax: 'postcss-html',
    },
    // Proper parsing for SCSS/SASS if you use it
    {
      files: ['**/*.{scss,sass}'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // Keep this empty or only add non-stylistic rules you care about.
    // Prettier handles formatting; Stylelint handles correctness.
  },
};
