import {fromJS} from 'immutable';

const defaultState=fromJS({
    messageList:[],
    urlPrefix:''
})

const reducer=(state=defaultState,action)=>{
    action = action || {type:''}
    switch(action.type){
        case 'getMessageData':
            Reflect.deleteProperty(action,'type');
            // return {
            //     ...state,
            //     messageList:action.messageList,
            //     urlPrefix:action.urlPrefix
            // }
            return state.mergeDeep(action)
        default:
            return state;
    }
}

export {reducer} ;