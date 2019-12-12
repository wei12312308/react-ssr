const express = require('express')

const app = express();

app.get('/api/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET,POST');
    res.header('Content-Type', 'application/json;chatset=utf-8');
    res.json({
        success: true,
        list: [
            {name: '1', id: 1},
            {name: '2', id: 2},
            {name: '3', id: 3},
            {name: '4', id: 4},
        ]
    })
})

app.listen(9001, () => {
    console.log("mockjs服务启动成功！");
})