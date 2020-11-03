
### 项目配置



### redux使用
    1.首先安装组件 yarn add redux react-redux redux-thunk
    
    2.建立store文件夹 建立index.js reducer.js actionCreator.js 文件
        在reducer.js文件中写defultState和reducer，暴露reduce人
        在index.js中引入createStore和applyMiddleware从redux中，引入reducer ，然后引入thunk从redux-thunk中作为参数传入到applyMiddlware,然后传入createStore中  生成store并暴露

    3.在总的父组件index中从react-redux 中引入Provider，包裹App，然后传入store={store}

    4.在组件内用的时候，从react-redux中引入connect，接收两个参数mapStateToProps=(state)=>{}  mapDispatchToProps=(dispatch)=>{}

    5.模块化redux：在组件内的文件夹中建立术语自己的reducer，actionCreater，然后将reducer暴露出来，在store文件中的reducer中引入reducer然后引入combineReducers从redux中，然后合并各个组件的reducer然后暴露出总的reducer

补充：如果用了redux的模块化，那么在组件内设置mapStateToProps的时候，return的state的时候，通过state.asNameReducer.msg 才能访问的到模块state中的数据


### prop-types
    1. 安装 prop-types 
    2. 在需要判断的组件中(检测的是父组件传下来的props中的数据)，引入{string,array} from 'prop-types'
     在下面组件名.propTypes={数据1：string}


### 1px边框解决方案
    方法：利用 ::after 添加伪元素的方法，然后父元素相对定位 添加的伪元素绝对定位，根据api设置伪元素的width和height为100%( 200% 300%) 利用transform-scale()缩放为1(0.5 0.3333)实现边框线的变细
    封装：./assets/styledComponents/border.js
        封装 写一个border函数，接收一个参数(组价)，const newComp=styled(Comp)``  return newComp   暴露出border函数
        引用时  引入border  const Item=border(styled.div``)


### 路由

####    路由信息
        在用<Route>引用时如果没用用component引用的时候，在组件的props中拿不到路由信息，此时可以用Hooks，和withRoute这个高阶组件包裹一下(也可以用react-router-dom 提供的四hook来获得)
        history.push()方法可以接受两个参数，第一个是地址，第二个是一个对象，可以传数据而且地址中不显示，可以在this.props.location.state中得到
        路由后退是history.goBack()

####    路由传参
        1.动态路由传参(在path中加入/:id ,在to的时候加入参数，在组件中接收打印出来通过props.match.params.id获得参数,或者可以通过Hooks中的useParams()来直接得到id)

        2.用<Link to={{pathname:'/home2',search:'?name=zhangsna&age=22',hash:'#then-hash', state:{id:20}}}><Link> to属性加对象 (用hooks中的useLocation)  to属性既可以接收字符串也可以接收对象

        3.search传值，接收的时候可以考虑URLSerachParams,使用URLSearchParams时search=new URLSearchParams(location.search)，然后通过实例化后的里面的get方法得到对应的值，search.get('id')

        react-router-dom 中提供了useHistory  useLocation  useParams  useRouteMatch这些Hooks可以用

### Hooks
    react-redux中解构出两个useDispatch,useSelector两个Hook
        useDispatch  可以代替mapDispatchToProps  const dispatch=useDispatch();之后就可以直接用dispatch
        useSelector  const store=useSelector(state=>state)  之后store就是redux的state了，可以直接使用了，如果有redux模块化，再点操作符 store.cookReducer.data
    
    react-router-dom中解构出 useLoaction  useRouteMatch  useParams  useHistory

    react中解构出 useState useEffect useContext

### 添加immutable管理数据
    immutable 是一种数据修改方式  持久化数据结构，结构共享
    1.首先在总的store文件夹中的
        reducer文件中import { combineReducers } from 'redux' 替换为 import {combineReducers} from 'redux-immutable';
        index文件中，引入import Immutable from 'immutable';   const initialState=Immutable.Map()  
            并将initialState作为createStore()的第二个参数传入
    2.在模块的redux中
        reducer修改数据时用return state.set('selectedTab',action.tab);或者 return state.mergeDeep(action); 要把defaultState数据转换成Map Lists结构，用fromJS直接转化
        在组件中拿数据的时候 {...store.getIn(['cookReducer']).toJS()}  拿到传下去




