import {createStore} from 'redux';
import {EXAMPLE_ACTION_TYPE} from '../constants/example-constants.js'

export const exampleState = {
	storeValue: 'Dummy value 2'
};

const exampleReducer = (state = exampleState, action) => {
	switch (action.type){
		case EXAMPLE_ACTION_TYPE:
			return Object.assign({},state,{storeValue: action.value});
		default:
			return state;
	}
}

export default exampleReducer;