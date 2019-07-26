import React from 'react';
import Login from './layout/login';
import SignUp from './layout/signup';
import Info from './layout/info';
import HomePage from './layout/home';
import UserPage from './layout/home/user';



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },

    {
        path : '/login',
        exact : false,
        main : ({history}) => <Login history={history}/>
    },

    {
        path : '/signup',
        exact : false,
        main : () => <SignUp />
    },

    {
        path: '/list',
        exact: false,
        main: () => <UserPage />
    },

    {
        path : '/info',
        exact : false,
        main : ({ math }) => <Info math = {math} />
    },
];

export default routes;