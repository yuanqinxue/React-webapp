import * as Types from '../action-types/userInfo';

// actionCreator 是一个函数 返回一个action对象

export function update(data) { // 修改城市的动作
    return {
        type: Types.UPDATE_CITY,
        data
    }
}