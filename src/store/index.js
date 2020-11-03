import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import reducer from './reducer';

import Immutable from 'immutable';

const initialState=Immutable.Map()

const applyMiddle=applyMiddleware(thunk)

const store =createStore(reducer,initialState,applyMiddle);

export default store;
