module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.vue', '**/*.scss', '**/*.css'],
      customSyntax: 'postcss-html' // lets stylelint understand <style> blocks in Vue
    }
  ],
  rules: {
    'at-rule-no-unknown': null
  }
};
