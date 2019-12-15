import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
 
import {getUserInfo} from '../store/user'

function User(props) {
    useEffect(() => {
        console.log('effect', props.userInfo);
        if (!props.userInfo.title) {
            props.getUserInfo()
        }
    }, [])
    return <span>
        {props.userInfo.title}
    </span>
}

User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}

export default connect(
    state => {
        console.log(state);
        
        return { userInfo: state.user.userInfo }
    },
   {getUserInfo} 
)(User)