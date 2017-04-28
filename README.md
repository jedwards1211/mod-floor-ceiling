# mod-floor-ceiling

[![Greenkeeper badge](https://badges.greenkeeper.io/jedwards1211/mod-floor-ceiling.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/jedwards1211/mod-floor-ceiling.svg?branch=master)](https://travis-ci.org/jedwards1211/mod-floor-ceiling)
[![Coverage Status](https://coveralls.io/repos/github/jedwards1211/mod-floor-ceiling/badge.svg?branch=master)](https://coveralls.io/github/jedwards1211/mod-floor-ceiling?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

computes floor and ceiling for any modulus, not just 1

```
node
> require('mod-floor-ceiling').modFloor(3.8, 1.7)
3.4
> require('mod-floor-ceiling').modFloor(3.4, 1.7)
3.4
> require('mod-floor-ceiling').modCeiling(-17.8, 2.5)
-17.5
> require('mod-floor-ceiling').modLower(15, 5)
10
> require('mod-floor-ceiling').modLower(16, 5)
15
> require('mod-floor-ceiling').modHigher(15, 5)
20
> require('mod-floor-ceiling').modHigher(14, 5)
15

```

## Usage

```
npm install mod-floor-ceiling
```

### `modFloor(value: number, modulus: number, anchor?: number = 0): number`

Returns the greatest (closest to positive infinity) multiple of `modulus`, plus `anchor`, that is `<= value`.

### `modCeiling(value: number, modulus: number, anchor?: number = 0): number`

Returns the least (closest to negative infinity) multiple of `modulus`, plus `anchor`, that is `>= value`.

### `modLower(value: number, modulus: number, anchor?: number = 0): number`

Returns the greatest (closest to positive infinity) multiple of `modulus`, plus `anchor`, that is `< value`.

### `modHigher(value: number, modulus: number, anchor?: number = 0): number`

Returns the greatest (closest to positive infinity) multiple of `modulus`, plus `anchor`, that is `> value`.

### What is `anchor`?

**Anchor controls the offset of multiples of modulus.**

For example, with a modulus of 3 and the default anchor of 0, possible return values include -6, -3, 0, 3, 6, etc.

But with anchor of 1, possible return values include -5, -2, 1, 4, 7, etc.

It's simple; `modFloor(value, modulus, anchor)` just computes `anchor + modFloor(value - anchor, modulus)`.

