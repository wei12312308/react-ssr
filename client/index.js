import React from 'react'
import ReactDom from 'react-dom'

import App from '../src/App'
import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from '../src/store/store'
let browserRouter = (
    <Provider store={store}>
        <BrowserRouter>
            {App}
        </BrowserRouter>
    </Provider>    
)

ReactDom.hydrate(browserRouter, document.getElementById('root'));