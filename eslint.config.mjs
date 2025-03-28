// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      "quotes": "warn",
      "eol-last": "warn",
      "semi": "warn",
      "no-multiple-empty-lines": ["warn", { "max": 1 }],
      "padding-line-between-statements": [
        "warn",
        {
          "blankLine": "always",
          "prev": "*",
          "next": "function"
        }
      ],
      // Conflicts
      "vue/multi-word-component-names": "off",
      "no-use-before-define": "off",
      "space-before-function-paren": "off",
      "vue/max-attributes-per-line": "off",
      "vue/html-closing-bracket-newline": "off"
    }
  }
);
