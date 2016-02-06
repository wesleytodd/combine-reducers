# Combine Reducers

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

[travis-image]: https://travis-ci.org/wesleytodd/combine-reducers.svg?branch=master
[travis-url]: https://travis-ci.org/wesleytodd/combine-reducers
[npm-image]: https://img.shields.io/npm/v/combine-reducers.svg?style=flat
[npm-url]: https://npmjs.org/package/combine-reducers
[downloads-image]: https://img.shields.io/npm/dm/combine-reducers.svg?style=flat
[downloads-url]: https://npmjs.org/package/combine-reducers

This is a standalone implementation of the combine reducers method from redux.  You might ask, why would you not just use Redux?  Redux comes with a bunch of other opinions that I personally do not fully subscribe to.  Also, I hope to make some changes to improve on the existing pattern.

This module also removes most of the opinionated type checking stuff that Redux does.  I would rather document the module and trust users to use it properly than add a bunch of code to force them into my opinions.  Why shouldn't a reducer return undefined?  Also it makes it much smaller (13 lines compared to 139).

## Usage

```
$ npm install --save combine-reducers
```

```javascript
var combineReducers = require('combine-reducers');

var reducer = combineReducers({
	foo: function (store, action) {
		return action.type === 'incr-foo' ? store + 1 : store;
	},
	bar: function (store, action) {
		return action.type === 'incr-bar' ? store + 1 : store;
	}
});

reducer({
	foo: 1,
	bar: 2
}, {
	type: 'incr-foo'
}); // {foo: 2, bar: 1}
```
