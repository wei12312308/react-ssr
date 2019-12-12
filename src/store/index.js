import axios from 'axios'

// type
const GET_LIST = "INDEX/GET_LIST";
const changeList = list => ({
    type: GET_LIST,
    list
})

export const getIndexList = serve => {
    return (dispatch, getStete, axiosInstance) => {
        return axios.get('http://localhost:9001/api/course/list').then(res => {
            if(res.data.success) {
                dispatch(changeList(res.data.list))
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            console.log(action);
            
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
    }
}
