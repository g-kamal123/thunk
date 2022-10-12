const initialState ={
    data:[],
    loader:false
}
export const MiddlewareReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'datastore': return {...state,data:action.payload};
        case 'loader': return {...state,loader:!state.loader}
        default: return state;
    }
}