import {TAB_CHANGE} from './actionType';

import {Map} from 'immutable';

const defaultState=Map({
    selectedTab: sessionStorage.getItem('tab') || 'cook'
})

const reducer=(state=defaultState,action)=>{
    action = action || {type : ''}
    switch(action.type){
        case TAB_CHANGE:
            // return {
            //     ...state,
            //     selectedTab:action.tab
            // }
            return state.set('selectedTab',action.tab);
        default:
            return state;
    }
}

export {reducer};