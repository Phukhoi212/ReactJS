import * as types from './../constants/ActionTypes';

var initialState = {
    display_name: '',
    display_info: '',
    avatar: '',
    phone: '',
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PROFILE:
            console.log("dataProfile: ", action.state);
            return {
                ...state,
                display_name: action.state.display_name,
                display_info: action.state.display_info,
                phone: action.state.phone,
            };

        case types.UPDATE_PROFILE:
            console.log("data", action.state);
            return {
                ...action.state
            };

        default: return state;

    }

}

export default myReducer;