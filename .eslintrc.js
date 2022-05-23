module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "brace-style": ["error", "1tbs"],
    "semi": ["error", "always"],
    "vue/no-v-model-argument": "off",
    "vue/component-tags-order": [
        "error",
        {
            "order": ["style", "template", "script"],
        }
    ],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  },
};
