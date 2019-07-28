import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import exampleReducer from '../reducer/example-reducer.js';

const configureStore = initialState => {
    return createStore(
        exampleReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};

const store = configureStore();
export default store;