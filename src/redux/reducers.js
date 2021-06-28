/*
包含多个reducer函数：根据old state和指定action返回一个新state
*/
import {combineReducers} from 'redux';
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER} from './action-types';

import {getRedirectTo} from '../utils';

const initUser = {
    username: '', 
    type: '',
    msg: '',
    redirectTo: '' //自动重定向
};

function user(state=initUser, action) {
    switch(action.type) {
        case AUTH_SUCCESS:
            const {type, user} = action.data;
            return {...action.data, redirectTo: getRedirectTo(type, user)}
        case ERROR_MSG:
            return {...state, msg: action.data};
        case RECEIVE_USER:
            return action.data;
        case RESET_USER:
            return {...initUser, msg: action.data};
        default:
            return state;
    }
}

export default combineReducers({
    user
});