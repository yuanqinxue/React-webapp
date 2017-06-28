// 合并所有reducer 并导出
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {store} from './store';

export default combineReducers({
    userInfo,
    store
});
