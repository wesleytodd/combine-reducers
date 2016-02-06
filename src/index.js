export function combineReducers (reducers = {}) {
	var reducerKeys = Object.keys(reducers);
	return function combination (state = {}, action) {
		var hasChanged = false;
		var nextState = {};
		for (let i = 0; i < reducerKeys.length; i++) {
			let key = reducerKeys[i];
			nextState[key] = reducers[key](state[key], action);
			hasChanged = hasChanged || nextState[key] !== state[key];
		}
		return hasChanged ? nextState : state;
	};
}
