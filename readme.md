# Mime Standard

An object mapping ~300 standard mime types to ~400 extensions.

This module basically just exports the content of [this file](https://github.com/broofa/mime/blob/340d2b0e175586016b1769a77149937b0bb3fc4e/types%2Fstandard.js).

## Install

```sh
npm install mime-standard
```

## Usage

```ts
import mime from 'mime-standard';

console.log ( mime );
// {
//   "application/andrew-inset": ["ez"],
//   "application/applixware": ["aw"],
//   "application/atom+xml": ["atom"],
//   ...and so on...
// }
```

## License

MIT © Fabio Spampinato
