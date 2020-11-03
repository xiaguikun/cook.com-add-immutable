import {useHistory} from 'react-router-dom'

const useToDetail=()=>{
    const history=useHistory();   
  
    const toDetail=(id,title)=>()=>{
    history.push('/detail/'+id,{title:title})
    }

    return {
        toDetail
    }
}

export default useToDetail;