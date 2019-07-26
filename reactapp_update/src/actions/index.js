import * as types from './../constants/ActionTypes';

export const actLogin = (users) => {
    return{
        type : types.LOGIN,
        users
    }

}