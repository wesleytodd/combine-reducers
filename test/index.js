/* global describe it */
var assert = require('assert');
var combineReducers = require('../');

describe('combineReducers', function () {
	it('returns a composite reducer that maps the state keys to given reducers', function () {
		var reducer = combineReducers({
			counter: function (state, action) {
				state = state || 0;
				return action.type === 'increment' ? state + 1 : state;
			},
			stack: function (state, action) {
				state = state || [];
				return action.type === 'push' ? (state.push(action.value) && state) : state;
			}
		});

		var s1 = reducer({}, { type: 'increment' });
		assert.equal(s1.counter, 1);

		var s2 = reducer(s1, { type: 'push', value: 'a' });
		assert.equal(s2.stack[0], 'a');
	});
});
