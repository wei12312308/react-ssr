import React from 'react'
import ReactDom from 'react-dom'

import routers from '../src/App'
import {BrowserRouter, Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import {getClientStore} from '../src/store/store'

import Header from '../src/component/Header'

let browserRouter = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header></Header>
            {
                routers.map(route => {
                    return <Route {...route}></Route>
                })
            }
        </BrowserRouter>
    </Provider>    
)

ReactDom.hydrate(browserRouter, document.getElementById('root'));