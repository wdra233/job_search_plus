/*
包含多个reducer函数：根据old state和指定action返回一个新state
*/
import {combineReducers} from 'redux';
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'

const initUser = {
    username: '', 
    type: '',
    msg: '',
    redirectTo: '' //自动重定向
};

function user(state=initUser, action) {
    switch(action.type) {
        case AUTH_SUCCESS:
            return {...action.data, redirectTo: '/'}
        case ERROR_MSG:
            return {...state, msg: action.data};
        default:
            return state;
    }
}

export default combineReducers({
    user
});