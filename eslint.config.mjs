// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import vuePrettierConfig from "@vue/eslint-config-prettier";

export default withNuxt(vuePrettierConfig, {
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
});
