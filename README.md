# emit-loader

> Loader that emits raw entry files, without webpack wrapper

This loader is made for few very specific cases, so you probably don't need it.

## Install

```bash
npm i emit-loader
# or
yarn add emit-loader
```

## Usage

Add it to your use chain as the last loader.

```javascript
// webpack.config.js

module.exports = {
  // ...
  modules: {
    loaders: {
      {
        use: [
          'emit-loader',
          // Other loaders
        ],
      },
    },
  },
};
```
