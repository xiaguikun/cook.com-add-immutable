import React,{useEffect} from 'react';

//react-redux中结构两个useDispatch,useSelector两个Hook
//useDispatch  可以代替mapDispatchToProps  const dispatch=useDispatch();之后就可以直接用dispatch
//useSelector  const store=useSelector(state=>state)  之后store就是redux的state了，可以直接使用了，如果有redux模块化，再点操作符
import {useDispatch,useSelector} from 'react-redux'
import Cooks from '../ui/CookUi';
import {getCooksAll} from '../actionCreator';


const Cook = () => {
    const dispatch=useDispatch();
    const store=useSelector(state=>state)
    useEffect(()=>{
        dispatch(getCooksAll());
    },[dispatch])
    // console.log(store);
    return (
        // <Cooks {...store.cookReducer}></Cooks>
        <Cooks {...store.getIn(['cookReducer']).toJS()}></Cooks>
    );
}

export default Cook;




// import React, { Component } from 'react';

// import Cooks from '../ui/CookUi';
// import {connect} from 'react-redux';
// import {getCooksAll} from '../actionCreator';


// const mapStateToProps=(state)=>{
//     // console.log(state);
//     return {
//         // bannerList:state.cookReducer.bannerList,
//         // bannerPrefix:state.cookReducer.bannerPrefix,
//         // menuList:state.cookReducer.menuList,
//         // menuPrefix:state.cookReducer.menuPrefix,
//         // recommendList:state.cookReducer.recommendList,
//         // recommendUrlPrefix:state.cookReducer.recommendUrlPrefix
//         ...state.cookReducer
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     // console.log(dispatch);
//     return {
//         // getBanner(){
//         //     dispatch(getBannerList())
//         // },
//         // getMenu(){
//         //     dispatch(getMenuList())
//         // },
//         // getRecommend(){
//         //     dispatch(getRecommendList())
//         // }
//         getCooks(){
//             dispatch(getCooksAll())
//         }
//     }
// }
// @connect(mapStateToProps,mapDispatchToProps)
// class Cook extends Component {
//     state = {  }
//     render() {
//         // console.log(this.props);
//         return (
//             <Cooks {...this.props}></Cooks>
//             // <></>
//         );
//     }
//     componentDidMount(){
//         // this.props.getBanner();
//         // this.props.getMenu();
//         // this.props.getRecommend();
//         this.props.getCooks();        
//     }
// }


// export default Cook;