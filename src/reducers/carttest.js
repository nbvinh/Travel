const initialState = {
    listProducts: [],
    count: 0
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADDCOUNT' : 
      return{...state,count : state.count+1}
  
      default:
        return state;
    }
  }