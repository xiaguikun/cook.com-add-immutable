// import { combineReducers } from 'redux';
import {combineReducers} from 'redux-immutable';

import {reducer as cookReducer} from '../home/cook/reducer';
import {reducer as messageReducer} from '../home/message/reducer';
import {reducer as homeReducer} from '../home/reducer';

const reducer=combineReducers({
    cookReducer,
    messageReducer,
    homeReducer
})

export default reducer;