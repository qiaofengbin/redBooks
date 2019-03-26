import {createStore} from 'redux';

// 声明state
const initState = {
  list:[]
}
// const tiger = 10000

//这是action
// const increase = {
//     type:'涨工资'
// }
// const decrease = {
//     type:'扣工资'
// }
// action
// const list = (state=tiger,action)=>{
//   switch(action.type){
//     case '涨工资': 
//         return state += 100;
//       case '扣工资': 
//         return state -= 100;
//       default: 
//         return state;
//   }
  
// }

const list = (state=initState,action)=>{
  switch(action.type){
    case 'GET_LIST': 
        state = Object.assign({},state,{
          list:action.list
        })
        // console.log(state)
        return state;
        break;
  }
}
// 创建store
const store = createStore(list);
export default store;