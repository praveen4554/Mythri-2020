
const axios = require('axios');

const initialState = {
    userObject: {}
}

export const userDetails =(state = initialState, action) => {
 const newState = {...state};
 if(action.type === 'userDetails')
    newState.userObject = action.value;
return newState;
}

const fetchData = data =>{
    return {
        type: 'userDetails',
        value: data
    }
}
const errorData = data =>{
    return {
        type: 'userDetailsError',
        value: data
    }
}


export const  fetchUserDetails= ()=> {
    return(dispatch) => {
        dispatch(fetchUserDetails)
     axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
            console.log(res);
            dispatch(fetchData(res.data))
        }).catch((err)=>{
            console.log(err);
             dispatch(errorData(err))
        })
    }

}