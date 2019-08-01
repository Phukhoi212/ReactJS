import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';
import axios from 'axios';


export const logIn = (email, password) => {
    return {
        type: Types.LOGIN,
        email: email,
        password: password
    }
}
export const loginRequest = (email, password) => {
    return (dispatch) => {
        return callApi('login', 'POST', {
            email: email,
            password: password
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            console.log(res);
            dispatch(logIn(email, password))
        }).catch(er => {
            alert("Login failed, please check again!!!");
        })
    };
};



export const signUp = (email, password) => {
    return {
        type: Types.SIGNUP,
        email: email,
        password: password
    }
}


export const signupRequest = (email, password) => {
    return (dispatch) => {
        return callApi('sign_up', 'POST', {
            email: email,
            password: password
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            console.log(res);
            dispatch(signUp(email, password))
        }).catch(er => {
            alert("Signup failed, please check again!!!");
        })
    };
};


export const getProfile = state => {
    console.log(state);
    return {
        type: Types.GET_PROFILE,
        state
    };
};



export const getProfileRequest = () => {
    return dispatch => {
        var token = localStorage.getItem("token");
        axios({
            method: "post",
            url: "https://terralogic-training.firebaseapp.com/api/get_profile",
            headers: {
                "x-user-token": token
            }
        }).then(res => {
            console.log(res);
            dispatch(getProfile(res.data.data));
        })
    };
}

export const updateProfile = (state) => {
    return {
        type: Types.UPDATE_PROFILE,
        state
    };


}


export const updateProfileRequest = (state) => {
    return dispatch => {
        var token = localStorage.getItem("token");
        console.log("token:", token);
        axios({
            method: "post",
            url: "https://terralogic-training.firebaseapp.com/api/set_profile",
            headers: {
                "x-user-token": token
            },
            data: state
        }).then(res => {
            console.log(res);
            dispatch(updateProfile(res.data.data));
            alert("Update Success!!!");
        })
            .catch(er => {
                alert("Update Failed");
            });
    };
}


export const logOut = (state) => {
    return {
        type: Types.LOGOUT,
        state
    };


}


export const logOutRequest = () => {
    return dispatch => {
        var token = localStorage.getItem("token");
        axios({
            method: "post",
            url: "https://terralogic-training.web.app/api/logout",
            headers: {
                "x-user-token": token
            }
        })
            .then(res => {
                console.log('Logout', res);
                dispatch(logOut());
                localStorage.clear();

            })
            .catch(er => {
                alert("ERROR");
            });
    };
}



