# Storybook Addon Golden Ratio

Storybook Addon Golden Ratio can be used to overlay golden curve images optop of your components inside the preview of [Storybook](https://storybook.js.org).

## Usage

Requires Storybook 6.1 or later.

```sh
npm i -D kieranhall/addon-storybook-golden-ratio
```

Then, add following content to `.storybook/main.js`:

```js
module.exports = {
  addons: ["kieranhall/storybook-addon-golden-ratio"],
};
```

You can now click on the overlay button in the toolbar to toggle the golden curves.
