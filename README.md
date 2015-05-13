> Generator-based ES6 CLI options parser.

![](https://img.shields.io/badge/---Parsec-05B3E1.svg?style=flat-square)
![](https://img.shields.io/badge/---ES6-FF2C77.svg?style=flat-square)
![](https://img.shields.io/badge/---MIT-36BF91.svg?style=flat-square)

<a name="parsec"></a>

<p align="center">
<a href="https://github.com/bucaran/parsec/blob/master/README.md">
<img width="95%" src="https://cloud.githubusercontent.com/assets/8317250/7609248/1735d894-f9ac-11e4-9f80-eb0483533355.png">
</a>
</p>

<p align="center">
<b><a href="#synopsis">Synopsis</a></b>
|
<b><a href="#install">Install</a></b>
|
<b><a href="#usage">Usage</a></b>
</p>


# Synopsis [![Build Status][TravisLogo]][Travis]

_Parsec_ is a lovingly crafted command line options parser using ES6 generators in around 100 LOC.

```js
Parsec.parse(process.argv) // -T850
  .options(["T", "terminator"], { default: 800 })
  .options("model", { default: 101 })
  .options("name", { default: "Schwa" })
```
```json
{
  "T": "850",
  "terminator": "850",
  "model": "101",
  "m": "101",
  "name": "Schwa",
  "n": "Schwa"
}
```

# Install

```sh
npm install parsec
```

# Usage

_Parsec_ automatically slices arguments starting from index `2`, but you can specify the `sliceIndex` via the second argument to `parse`.

## Syntax
```js
Parsec.parse(argv[, {
  sliceIndex = 2,
  operandsKey = "_",
  noFlags = true
}])
  .options("option string")
  .options([aliases], { default })
  ...

```

_Parsec_ uses the _first_ letter of an option string as an alias:

```js
Parsec.parse(["-tla"], { sliceIndex: 0 })
  .options("three")
  .options("letter")
  .options("abbreviation")
```
```json
{
  "t": true,
  "l": true,
  "a": true,
  "three": true,
  "letter": true,
  "abbreviation": true
}
```

Pass an array of aliases, or specify default values via `{ default: value }`

```js
Parsec.parse(["-G"], { sliceIndex: 0 })
  .options(["G", "g", "great"])
  .options(["r", "R"], { default: 8 })
```
```json
{
  "G":true,
  "g":true,
  "great":true,
  "r":8,
  "R":8
}
```

You can negate options using a `--no-` prefix before an option.

```js
Parsec.parse(["--no-woman-no-cry", "--no-wonder=false"],
  { sliceIndex: 0 })
```
```json
{
  "woman-no-cry": false,
  "wonder": true
}
```

## API

### __`Parsec.parse(args, opts)`__

The only one method you will probably deal with.

#### `opts`
  + `operandsKey = "_"`
  + `sliceIndex = 2`
  + `noFlags = true`

### `Parsec.prototype.tuples`

Returns an iterator that yields objects of the form `{ prev, curr, next }` for each item in a list.

### `Parsec.prototype.map`

Maps CLI arguments to custom _Token_ objects.

  + Short Options
  ```js
  { isShort, tokens }
  ```

  + Long Options
  ```js
  { isLong, key, value, token }
  ```

  + Operands
  ```js
  { token, isBare }
  ```

### `Parsec.prototype.shorts`

Token sub-iterator for short options.

### `Parsec.prototype.tokens`

Token iterator for options:
  ```js
  { curr, next, value }
  ```

### `Parsec.prototype.entries`

Iterator for entries:
  ```js
  { key, value }
  ```

### Properties

#### `operandsKey = "_"`

Use a different key name for the operands list.

#### `noFlags = true`

> Set to `false` to opt out.

```js
Parsec.parse(["--no-love=false", "--no-war", "--no-no", "ok"],
  { sliceIndex: 0 })
```
```json
  {
    "love": true,
    "war": false,
    "no-no": "ok"
  }
```

# Roadmap ✈

+ Add loose type support.
+ Invalid option check.

# License

[MIT](http://opensource.org/licenses/MIT) © [Jorge Bucaran][Author]

[Author]: http://about.bucaran.me
[TravisLogo]: http://img.shields.io/travis/bucaran/parsec.svg?style=flat-square
[Travis]: https://travis-ci.org/bucaran/parsec