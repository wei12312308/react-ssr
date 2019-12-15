import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return <ul>
            <Link to="/">首页</Link>
            <hr/>
            <Link to="/about">关于</Link>
        </ul>
}
