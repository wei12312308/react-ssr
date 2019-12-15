import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
 
import {getIndexList} from '../store/index'
function Index(props) {
    
    const [count, setCount] = useState(1);
    useEffect(() => {
        if(!props.list.length) {
            props.getIndexList()
        }
    }, [])
    return (
        <div>
            <h1>123, {props.title} {count}</h1>
                <button 
                onClick={()=> {
                    setCount(count + 1);
                }}
            >
                累加
            </button>
            <ul>
                {
                    props.list.map(item => {
                        return (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}

export default connect(
    state => {
        return {list: state.index.list}
    },
   {getIndexList} 
)(Index)