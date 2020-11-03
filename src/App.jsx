import React, { Component } from 'react';
// import React from 'react';

import {withRouter} from 'react-router-dom';
// import { Route,Redirect} from 'react-router-dom';

import { Route,Redirect,Switch} from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';



import Home from '@/home/Home.jsx'
import {Detail} from '@/detail/index.js';

import 'animate.css';
import './style.css';


// const App =withRouter((props)=>{
//     return (
//             <>             
//                 <Redirect from="/" to="/home" exact></Redirect>
//                 <Route path="/home" children={(props) => <Home {...props}></Home>}></Route>
//                 <Route path="/detail/:id" children={(props) => <Detail {...props}></Detail>}></Route>
               
//             </>
//     )
// })

// export default App;


@withRouter
class App extends Component {
    state = {  }
    render() {
        // console.log(this.props);
        return (
            <>          
                <TransitionGroup>
                    <Redirect from='/' to='/home' exact></Redirect>
                    <Route path='/home' children={(props)=><Home {...props}></Home>}></Route>     
                    <CSSTransition
                    timeout={400}
                    key={this.props.location.pathname}
                    classNames='my-node'
                    // classNames={{
                    //     enter: 'animate__animated',
                    //     enterActive: 'animate__bounceInRight',
                    //     exit: 'animate__animated',
                    //     exitActive: 'animate__bounceOutRight'
                    // }}
                    >
                        <Switch location={this.props.location}>                            
                            <Route path='/detail/:id'>
                                <Detail></Detail>
                            </Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>       
            </>
        );
    }
}

export default App;

