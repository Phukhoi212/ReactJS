import * as Types from './../constants/ActionTypes';
var initialState = [];

const users = (state = initialState, action ) =>{
    switch(action.type){
        
        case Types.LOGIN:
            state = action.users;
            return [];
        default: return [...state];
    }
};

export default users;