import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk'
import IndexStore from './index'
import UserStore from './user'

import axios from 'axios'

const serverAxios = axios.create({
    baseURL: 'http://localhost:9001/'
})

const clientAxios = axios.create({
    baseURL: '/'
})

const storeReducers = combineReducers({
    index: IndexStore,
    user: UserStore
});

export const getServerStore = () => {
    return new createStore(storeReducers, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}

export const getClientStore = () => {
    const defaultState = window.__context ? window.__context : {}
    return new createStore(storeReducers, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
