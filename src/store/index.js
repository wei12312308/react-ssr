// import axios from 'axios'
import request from '../utils/request'

// type
const GET_LIST = "INDEX/GET_LIST";
const changeList = list => {
    return {
        type: GET_LIST,
        list
    }
}

export const getIndexList = serve => {
    return (dispatch, getStete, $axios) => {
        $axios.get('/api/course/list').then(res => {
            if(res.data.success) {
                dispatch(changeList(res.data.list))
            }
        }).catch(err => {
            console.log(err);
        })
        /*request({
            url: 'course/list',
            method: 'GET',
        }).then(res => {
            if(res.data.success) {
                dispatch(changeList(res.data.list))
            }
        }).catch(err => {
            console.log(err);
        })
*/

        // return axios.get('http://localhost:9001/api/course/list').then(res => {
        //     if(res.data.success) {
        //         dispatch(changeList(res.data.list))
        //     }
        // }).catch(err => {
        //     console.log(err);
        // })
    }
}

const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
    }
}
