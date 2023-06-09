// const {createStore}=require ('redux');
// const INCREMENT='INCREMENT'
// const DECREMENT="DECREMENT"
// // state

// const initalconterState={
//     count:0
   
// }
// const initalUserState={
//     user:[
//         {name:'anisul'}
//     ]
   
// }

// // action-Object_type_payload
// {
//     type:'INCREMENT'
// }
// // Increment Counter
// // decrement user
// const incrementCounter=()=>{
//     return{
//         type:INCREMENT,
    
//     }
// }
// const decrementCounter=()=>{
//     return{
//         type:DECREMENT
       
//     }
// }
// const counterReducer=(state=initalconterState,action)=>{
// switch(action.type){
//     case INCREMENT:
//         return{
//             ...state
//             count :state.count +1
//         }

//     case DECREMENT:
//          return{
//             ...state
//             count:state.count -1,
//         }

//     default:
//         state;
// }
// }
// // getState
// // dispatch
// // subscribe
// const store =createStore(counterReducer);
// store.subscribe(()=>{
//     console.log(store.getState())
// })
// // dispatch action
// store.dispatch(incrementCounter())


// state - count :0
// action -increment ,decrement, rest
// reducer
// store
// CONSTANT
const {createStore}=require('redux')
  const INCREMENT='INCREMENT'
  const DECREMENT='DECREMENT'
  const RESET='RESET'
const initialState={
    count : 0
}
const incrementAction=()=>{
  return {
    type:INCREMENT
  }  
}
const decrementAction=()=>{
  return {
    type:DECREMENT
  }  
}
const resetAction=()=>{
  return {
    type:RESET
  }  
}

const counterReducer=(state=initialState,action)=>{
switch (action.type){
    case INCREMENT:
        return{
            ...state,
            count :state.count +1 
        }
    case DECREMENT:
        return{
            ...state,
            count :state.count -1 
        }
    case RESET:
        return{
            ...state,
            count :0
        }
        


    default:
     state
}
}
// store
const store= createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(decrementAction())