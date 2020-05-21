const initialState = {
    user: 'Guest'
}

export const myReducer =(state = initialState, action) => {
 const newState = {...state};
 console.log('reducer state', state);
 console.log(action);
 if(action.type === 'Authorization')
    newState.user = action.value;
return newState;
}
