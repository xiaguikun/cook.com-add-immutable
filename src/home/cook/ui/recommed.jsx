import React from 'react';
import {DivRecommed} from './StyledComponents';

import useGetData from './useGetData';
import useToDetail from './useToDetail';


const Recommed=(props)=> {

  const {handleClick,filterList,state}=useGetData(props);
  const {toDetail} =useToDetail();
 
    // console.log(this.props);
    
    // console.log(filterList);
    return (
      <DivRecommed>
          <nav>
            <li className={state.type===1 ? 'active' : null} onClick={handleClick(1)}>推荐</li>
            <li className={state.type===2 ? 'active' : null} onClick={handleClick(2)}>日常</li>
            <li className={state.type===3 ? 'active' : null} onClick={handleClick(3)}>最热</li>
          </nav>
          <section>
            {
              filterList.map((item)=>{
                  return (
                    <div key={item.id} onClick={toDetail(item.id,item.title)}>
                        <img src={props.recommendUrlPrefix+item.url} alt=""/>
                        <p>{item.title}</p>
                    </div>
                  )
              })
            }
          </section>
      </DivRecommed>
    );
  }

export default Recommed;