import React from 'react'

import path from 'path'
import fs from 'fs'
import {renderToString} from 'react-dom/server'
import express from 'express'
import routers from '../src/App'
import {StaticRouter, matchPath, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {getServerStore} from '../src/store/store'

import proxy from 'http-proxy-middleware'

import Header from '../src/component/Header'
const store = getServerStore();

const app = express()
app.use(express.static('public'))

app.use(
    '/api',
    proxy({ target: 'http://localhost:9001', changeOrigin: true })
);

function csrRender(res) {
    const filename = path.resolve(process.cwd(), 'public/index.csr.html');
    const html = fs.readFileSync(filename, 'utf-8')
    return res.send(html)
}

app.get('*', (req, res) => {

    if(req.query._mode == 'csr') {
        console.log('url参数开启csr降级');
        return csrRender(res);
        
    }
    console.log(req.url);
    
    const promises = [];
    routers.some(route => {
        const match = matchPath(req.url, route);
        if(match) {
            const {loadData} = route.component;
            if(loadData) {
                promises.push(loadData(store, route.url))
            }
        }
    })

    Promise.all(promises).then((result) => {
        // console.log(result);
        // store.res = result;
        const context = {
            css: []
        };
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                        <Header></Header>
                        <Switch>
                            {
                                routers.map(route => {
                                    return <Route {...route} key={route.key}></Route>
                                })
                            }
                        </Switch>
                </StaticRouter>
            </Provider>
        )
console.log(context);

        if(context.statusCode) {
            // 状态的切换和页面的跳转
            res.status(context.statusCode)
        }

        if(context.action == 'REPLACE') {
            res.redirect(301, context.url)
        }
        const css = context.css.join('\n');
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>react ssr</title>
                    <style>
                    ${css}
                    </style>
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