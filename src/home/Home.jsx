import React ,{useState} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {Cook} from './cook/index';
import {Message} from './message/index';

import { TabBar } from 'antd-mobile';
import {changeTabData} from './actionCreator';


import cookImg from '@img/img11.jpg';
import cookActiveImg from '@img/img1.jpg';
import shareImg from '@img/img22.jpg';
import shareActiveImg from '@img/img2.jpg';
import messageImg from '@img/img33.jpg';
import messageActiveImg from '@img/img3.jpg';
import mineImg from '@img/img44.jpg';
import mineActiveImg from '@img/img4.jpg';


// const mapStateToProps=(state)=>{

//     return {
//         selectedTab:state.homeReducer.selectedTab
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         changeTab(tab){
//             dispatch(changeTabData(tab))
//         }
//     }
// }

const Home=()=> {
    // state = { 
    //     hidden: false,
    //     fullScreen: true,
    //  }
        // console.log(this.props);

        const [state] = useState({
            hidden: false,
            fullScreen: true,
        })
        // console.log(state);
        const dispatch=useDispatch();
        const store=useSelector(state=>state);
        // console.log(store);
        
        return (
            <>
                <div style={state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={state.hidden}
                    tabBarPosition='bottom'
                    >
                    <TabBar.Item
                        key="Life"
                        icon={<div style={{
                        width: '30px',
                        height: '30px',
                        background: `url(${cookImg}) center center /  28px 28px no-repeat`}}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '30px',
                        height: '30px',
                        background: `url(${cookActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        // selected={store.homeReducer.selectedTab === 'cook'}
                        selected={store.getIn(['homeReducer','selectedTab']) === 'cook'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'cook',
                        // });
                        // this.props.changeTab('cook')
                        dispatch(changeTabData('cook'));
                        sessionStorage.setItem('tab','cook')
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('Life')} */}
                        <Cook></Cook>
                        {/* <div>cooks</div> */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${shareImg}) center center /  28px 28px no-repeat`}}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${shareActiveImg}) center center /  28px 28px no-repeat`}}
                        />
                        }
                        key="Koubei"
                        // selected={store.homeReducer.selectedTab === 'share'}
                        selected={store.getIn(['homeReducer','selectedTab']) === 'share'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'share',
                        // });
                        // this.props.changeTab('share')
                        dispatch(changeTabData('share'));
                        sessionStorage.setItem('tab','share')
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
                        <div>share</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${messageImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${messageActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        key="Friend"
                        // selected={store.homeReducer.selectedTab === 'message'}
                        selected={store.getIn(['homeReducer','selectedTab']) === 'message'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'message',
                        // });
                        // this.props.changeTab('message')
                        dispatch(changeTabData('message'));
                        sessionStorage.setItem('tab','message')
                        }}
                    >
                        {/* {this.renderContent('Friend')} */}
                        <Message></Message>
                        {/* <div>mssage</div> */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: mineImg }}
                        selectedIcon={{ uri: mineActiveImg}}
                        key="my"
                        // selected={store.homeReducer.selectedTab === 'mine'}
                        selected={store.getIn(['homeReducer','selectedTab']) === 'mine'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'mine',
                        // });
                        // this.props.changeTab('mine')
                        dispatch(changeTabData('mine'));
                        sessionStorage.setItem('tab','mine')
                        }}
                    >
                        {/* {this.renderContent('My')} */}
                        <div>mine</div>
                    </TabBar.Item>
                    </TabBar>
                </div>
            </>
        );
    }

export default Home;