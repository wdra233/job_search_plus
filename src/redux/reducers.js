/*
包含多个reducer函数：根据old state和指定action返回一个新state
*/
import {combineReducers} from 'redux';

function xxx(state=0, action) {
    return state;
}

function yyy(state=0, action) {
    return state;
}

export default combineReducers({
    xxx, 
    yyy
});