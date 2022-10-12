export const fetchData =()=>{
    const apicall =async(dispatch)=>{
        dispatch({
            type:'loader'
        })
        const ftch = await fetch("https://api.github.com/users")
        const data = await ftch.json()
        dispatch({
            type:'datastore',
            payload:data
        })
        dispatch({
            type:'loader'
        })
    }
    return apicall
}