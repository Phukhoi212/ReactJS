import * as types from './../constants/ActionTypes';


var initialState = {
    isLogin: false,
    isSignUp: false,
    token: '',

}


var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                email: action.email,
                password: action.password,
                isLogin: true,
                token: action.token
            };

        case types.SIGNUP:
            return {
                ...state,
                email: action.email,
                password: action.password,
                isSignUp: true,
                token: action.token
            };

        case types.LOGOUT:
            return {
                ...state,
                isLogin: false,
                token: action.token
            };





        default: return state;
    }
};

export default myReducer;