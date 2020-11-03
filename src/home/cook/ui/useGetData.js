import memoize from 'memoize-one';
import  { useState } from 'react'

const useGetData=(props)=>{
    const [state,setState]=useState({
        type:1
      })
  
      
  
     const filter=memoize(
          (list,type)=>{
                return list.filter(item=>{
                  return item.type===type
                })
          }
     )

     const handleClick=(num)=>()=>{
        setState({
          type:num
        })
      }

      const filterList=filter(props.recommendList,state.type)

      return {
        handleClick,
        filterList,
        state
      }
}

export default useGetData;