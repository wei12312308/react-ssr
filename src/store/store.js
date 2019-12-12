import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk'
import IndexStore from './index'

const storeReducers = combineReducers({
    index: IndexStore
});

export default new createStore(storeReducers, applyMiddleware(thunk));