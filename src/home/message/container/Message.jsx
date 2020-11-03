import React, { useEffect } from 'react';

import MessageUi from '../ui/MessageUi';


import {useDispatch,useSelector} from 'react-redux';
import {getMessageList} from '../actionCreator';


const Message=()=>{

    const dispatch=useDispatch();
    const store=useSelector(state=>state)

        useEffect(()=>{
            dispatch(getMessageList());
        },[dispatch])


        return (
            <MessageUi {...store.getIn(['messageReducer']).toJS()}></MessageUi>
        );
    }

   


    // componentDidMount(){
    //     // console.log(this.props);
    //     this.props.getMessage();

    //     // axios.get('http://rootbk.cn:5000/api/messages/list')
    //     // .then((res)=>{
    //     //     console.log(res);
    //     // })
    // }

export default Message;