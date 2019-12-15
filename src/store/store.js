import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk'
import IndexStore from './index'

const storeReducers = combineReducers({
    index: IndexStore
});

// export default new createStore(storeReducers, applyMiddleware(thunk));

export const getServerStore = () => {
    return new createStore(storeReducers, applyMiddleware(thunk));
}

export const getClientStore = () => {
    const defaultState = window.__context ? window.__context : {}
    return new createStore(storeReducers, defaultState, applyMiddleware(thunk))
}
