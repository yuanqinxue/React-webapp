// 合并所有reducer 并导出
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';

export default combineReducers({
    userInfo
});
