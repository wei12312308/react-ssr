import React, {useEffect} from 'react';
import {connect} from 'react-redux'
 
import {getIndexList} from '../store/index'
function Index(props) {
    useEffect(() => {
        props.getIndexList()
    }, [])
    // console.log(props);
    return (
        <div>
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

export default connect(
    state => {
        return {list: state.index.list}
    },
   {getIndexList} 
)(Index)