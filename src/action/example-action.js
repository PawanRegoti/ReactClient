import {EXAMPLE_ACTION_TYPE} from '../constants/example-constants.js'

export function exampleAction(value) {
	return dispatch => {
		dispatch({
			type: EXAMPLE_ACTION_TYPE,
			value
		})
	}
}