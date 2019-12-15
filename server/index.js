import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import routers from '../src/App'
import {StaticRouter, matchPath, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {getServerStore} from '../src/store/store'
import request from '../src/utils/request'

import Header from '../src/component/Header'
const store = getServerStore();

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    const promises = [];
    routers.some(route => {
        const match = matchPath(req.url, route);
        if(match) {
            const {loadData} = route.component;
            if(loadData) {
                // if(route.urls && route.urls.length) {
                //     route.urls.forEach(item => {
                //         promises.push(request({
                //             url: item.url,
                //             method: item.method
                //         }))
                //     })
                // }
                promises.push(loadData(store, route.url))
            }
        }
    })

    Promise.all(promises).then((result) => {
        // console.log(result);
        // store.res = result;
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                        <Header></Header>
                        {
                            routers.map(route => {
                                return <Route {...route}></Route>
                            })
                        }
                </StaticRouter>
            </Provider>
        )
        
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>react ssr</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>window.__context = ${JSON.stringify(store.getState())}</script>
                    <script src="./bundle.js"></script>
                </body>
            </html>
        `)
    }).catch(err => {
        console.log(err + ',------------------');
    })
    
})

app.listen(3001, err => {
    console.log('服务器启动成功');
})