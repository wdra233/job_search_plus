import {AUTH_SUCCESS, ERROR_MSG} from './action-types'
import {reqRegister, reqLogin} from '../api';

// 每个actionType都有一个对应的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg});

// 注册异步action
export const register = user => {
    const {username, password, confirmed, type} = user;
    // 表单数据验证
    if (!username) {
        return errorMsg('Username must not be empty!')
    }
    if (password !== confirmed) {
        return errorMsg('Password and Confirmed password not match!');
    }

    return async dispatch => {
        const response = await reqRegister({username, password, type});
        const result = response.data;
        if (result.code === 0) {
            dispatch(authSuccess(result.data));
        } else {
            dispatch(errorMsg(result.msg));
        }
    }
}

// login异步action
export const login = user => {

    const {username, password} = user;
    // 表单数据验证
    if (!username) {
        return errorMsg('Username must not be empty!')
    }
    if (!password) {
        return errorMsg('Password must not be empty!');
    }
    return async dispatch => {
        const response = await reqLogin(user);
        const result = response.data;
        if (result.code === 0) {
            dispatch(authSuccess(result.data));
        } else {
            dispatch(errorMsg(result.msg));
        }
    }
}