module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  semi: false,
  endOfLine: "lf",
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "",
    "^@/data/(.*)$",
    "",
    "^@/layouts/(.*)$",
    "^@/components/(.*)$",
    "",
    "^@/app/(.*)$",
    "",
    "^@/lib/(.*)$",
    "",
    "^[./]",
  ],
}
