import React from 'react';
import Login from './layout/login';
import SignUp from './layout/signup';
import Info from './layout/info';
//import HomePage from './layout/home';



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Login />
    },

    {
        path : '/login',
        exact : false,
        main : () => <Login />
    },

    {
        path : '/signup',
        exact : false,
        main : () => <SignUp />
    },

    {
        path : '/info',
        exact : false,
        main : ({ math, history }) => <Info math = { math } history={ history } />
    },
];

export default routes;