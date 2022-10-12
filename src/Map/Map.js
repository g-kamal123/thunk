import { fetchData } from "../Middleware/Middleware"

export const mapToState =(state)=>{
    return{
        ...state
    }
}
export const mapToDispatch =(dispatch)=>{
    return{
        fetchData:()=>dispatch(fetchData())
    }
}