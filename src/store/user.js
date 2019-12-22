// import axios from 'axios'
import request from '../utils/request'

// type
const USER_INFO = "USER/USER_INFO";
const changeUserInfo  = data => {
    return {
        type: USER_INFO,
        data
    }
}

export const getUserInfo = serve => {
    return (dispatch, getStete, $axios) => {
        console.dir($axios);
        $axios.get('/api/user/userInfo').then(res => {
            if(res.data.success) {
                dispatch(changeUserInfo(res.data.data))
            }
        }).catch(err => {
            console.log(err);
        })
        
        // request({
        //     url: 'user/userInfo',
        //     method: 'GET',
        // }).then(res => {
        //     if(res.data.success) {
        //         dispatch(changeUserInfo(res.data.data))
        //     }
        // }).catch(err => {
        //     console.log(err);
        // })

        
        // return axios.get('http://localhost:9001/api/user/userInfo').then(res => {
        //     if(res.data.success) {
        //         dispatch(changeUserInfo(res.data.data))
        //     }
        // }).catch(err => {
        //     console.log(err);
        // })
    }
}

const defaultState = {
    userInfo: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_INFO:
            console.log('action', action);

            const newState = {
                ...state,
                userInfo: action.data
            }
            return newState
        default:
            return state;
    }
}
