# @strdr4605/eslint-plugin-react-props-destructuring

A very opinionated rule for ReactJS props destructuring. See discussion [here](https://github.com/yannickcr/eslint-plugin-react/pull/3086).

## Install

```bash
npm i -D @strdr4605/eslint-plugin-react-props-destructuring
```

## Usage

In your `.eslintrc.js` file:

```js
  ...
  plugins: ["react", "@strdr4605/react-props-destructuring"],
  rules: {
    ...
    "@strdr4605/react-props-destructuring/no-multiline": "warn",
  },
  ...
```

## Rules

| Link to rule docs | Description |
| ---- | ---- |
| [@strdr4605/react-props-destructuring/no-multiline](rules/no-multiline.md) | Prevent multiline props destructuring in a ReactJS component definition |
