const initialState = {
    user: [],
    count: 0,
    modalProfile: false
  };
  
  export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
      case 'MODALPROFILE':
        return{...state,modalProfile: !state.modalProfile}
      case 'PHONE' :
        return{...state, phone: action.phone}
      default:
        return state;
    }
  }