<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# civix

Civix is a civic engagement app designed to cut through the overwhelming noise of modern politics, making local government transparency and participation more accessible in an era of constant digital information overload. With the sheer volume of news, misinformation, and partisan spin flooding social media, it’s increasingly difficult for people to stay informed in an objective, actionable way—especially when figures like Trump and Elon Musk manipulate narratives through platforms like X (formerly Twitter) to shape public perception. Unlike traditional government websites that are cumbersome and inaccessible, Civix delivers real-time, geo-targeted updates on city council decisions, zoning laws, infrastructure projects, and local policies in a concise, digestible format. The app also live-streams city meetings, provides verified policy summaries, and allows users to directly engage with representatives without relying on corporate-controlled media algorithms. By decentralizing civic knowledge and putting the power back in the hands of individuals, Civix ensures that local politics remain transparent and actionable, helping users cut through the chaos and engage meaningfully with the decisions that actually affect their daily lives.
>>>>>>> e0cd46683895af36a1a61894ff4f2d1bccc731f8
