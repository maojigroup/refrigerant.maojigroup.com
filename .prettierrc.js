export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: [
    'classes',
    'enter-class',
    'enter-from-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-from-class',
    'leave-active-class',
    'leave-to-class',
  ],
  tailwindFunctions: ['tw', 'defineVariants'],
};
