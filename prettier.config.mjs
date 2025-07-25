/** @type {import("prettier").Config} */
export default {
  plugins: [
   
    "prettier-plugin-organize-imports",
     "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./tailwind.config.js",
  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
