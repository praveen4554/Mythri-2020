import { myReducer } from './reducer';
import { userDetails } from './userDetails';
import { combineReducers } from 'redux';

export default combineReducers({
    userDetails,
    myReducer
})