import React, { useState,} from 'react';
import {Route} from 'react-router-dom'

import About from './container/About'
import Index from './container/Index'
import User from './container/User';
import './App.css'
import NotFound from './container/NotFound';

export default [
    {
        path: '/',
        component: Index,
        exact: true,
        key: 'index'
    },
    {
        path: '/about',
        component: About,
        exact: true,
        key: 'about'
    },
    {
        path: '/user',
        component: User,
        exact: true,
        key: 'user',
    },
    {
        component: NotFound,
        key: 'not-found',
    }
]
// function App(props) {
//     const [count, setCount] = useState(1);
//     return (
//         <div className="main-container">
//             <div>
//                 <h1>123, {props.title} {count}</h1>
//                 <button 
//                     onClick={()=> {
//                         setCount(count + 1);
//                     }}
//                 >
//                     累加
//                 </button>
//             </div>
//             <Route path="/" exact component={Index}></Route>
//             <Route path="/about" exact component={About}></Route>
//         </div>
//     )
// }
// export default <App title={"开课吧"}></App>


// import React, {useState} from 'react'

// function App(props) {
//     const [count, setCount] = useState(1)
//     return <div>
//             <h1>123, {props.title} {count}</h1>
//         <button 
//             onClick={()=> {
//                 setCount(count + 1);
//             }}
//         >累加</button>
//     </div>
// }

// export default <App title={"开课吧"}></App>