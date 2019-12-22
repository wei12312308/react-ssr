import React from 'react'
import ReactDom from 'react-dom'

import routers from '../src/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store'

import Header from '../src/component/Header'

let browserRouter = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header></Header>
            <Switch>
                {
                    routers.map(route => {
                        return <Route {...route} key={route.key}></Route>
                    })
                }
            </Switch>
        </BrowserRouter>
    </Provider>
)

if (window.__context) {
    //ssr
    ReactDom.hydrate(browserRouter, document.getElementById('root'));
} else {
    //csr
    ReactDom.render(browserRouter, document.getElementById('root'));
}