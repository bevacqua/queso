# queso

> Turn a plain object into a query string

# Install

```shell
npm install queso --save
```

# Usage

You can use `queso` to generate a full query string.

```js
queso({ foo: 'bar', baz: true });
// <- ?foo=bar&baz
```

You can also demand that the prefix is always an ampersand `&`.

```js
queso({ foo: 'bar', baz: true }, true);
// <- &foo=bar&baz
```

# License

MIT
