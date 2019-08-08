import { combineReducers } from 'redux';
import tasks from './tasks';
import profile from './profile';


const appReducers = combineReducers({
    tasks,
    profile
});

export default appReducers;