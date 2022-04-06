# Mime Standard

An object mapping ~300 standard mime types to ~400 extensions.

This module basically just exports the content of [this file](https://github.com/broofa/mime/blob/master/types/standard.js).

## Install

```sh
npm install --save mime-standard
```

## Usage

```ts
import mime from 'mime-standard';

console.log ( mime );

/*
{
  "application/andrew-inset": ["ez"],
  "application/applixware": ["aw"],
  "application/atom+xml": ["atom"],
  ...and so on...
}
*/
```

## License

MIT © Fabio Spampinato
