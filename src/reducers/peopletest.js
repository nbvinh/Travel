const initialState = {
  user: [],
  count: 0,
  modalProfile: false,
  check: false,
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "PHONE":
      return { ...state, phone: action.phone }
    case 'CHECK':
      return { ...state, check: true }
    default:
      return state;
  }
}