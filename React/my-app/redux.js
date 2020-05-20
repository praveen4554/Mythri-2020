const { createStore } = require('redux');

const initialState = {
    user: 'Guest'
}

const myReducer =(state = initialState, action) => {
 const newState = {...state};
 console.log('reducer state', state);
 console.log(action);
 if(action.type === 'Authorization')
    newState.user = action.value;
return newState;
}

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('subscribe',store.getState());
});

console.log('inital calling',store.getState());
store.dispatch({type: 'Authorization',value:'praveen'});