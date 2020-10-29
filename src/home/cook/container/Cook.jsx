import React, { Component } from 'react';

import Cooks from '../ui/CookUi';
import {connect} from 'react-redux';
import {getBannerList,getMenuList,getRecommendList} from '../actionCreator';


const mapStateToProps=(state)=>{
    // console.log(state);
    return {
        bannerList:state.cookReducer.bannerList,
        bannerPrefix:state.cookReducer.bannerPrefix,
        menuList:state.cookReducer.menuList,
        menuPrefix:state.cookReducer.menuPrefix,
        recommendList:state.cookReducer.recommendList,
        recommendUrlPrefix:state.cookReducer.recommendUrlPrefix
    }
}
const mapDispatchToProps=(dispatch)=>{
    // console.log(dispatch);
    return {
        getBanner(){
            dispatch(getBannerList())
        },
        getMenu(){
            dispatch(getMenuList())
        },
        getRecommend(){
            dispatch(getRecommendList())
        }
    }
}
@connect(mapStateToProps,mapDispatchToProps)
class Cook extends Component {
    state = {  }
    render() {
        // console.log(this.props);
        return (
            <Cooks {...this.props}></Cooks>
        );
    }
    componentDidMount(){
        this.props.getBanner();
        this.props.getMenu();
        this.props.getRecommend();
        
    }
}


export default Cook;