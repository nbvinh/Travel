const initialState = {
  user: [],
  count: 0,
  modalProfile: false,
  check: false,
  dataItem :[
    {id:0,image : require('../img/vinh3.png'),text: 'Lịch trình của tôi'},
    {id:1,image : require('../img/vinh7.png'),text: 'Khuyến mại'},
    {id:2,image : require('../img/vinh4.png'),text: 'Yêu thích'},
    {id:3,image : require('../img/vinh6.png'),text: 'Đánh giá'},
    {id:4,image : require('../img/vinh5.png'),text: 'Cài đặt'},
  ],
  dataSetting:[
    {id:0,text:'Chính sách bảo mật'},
    {id:1,text:'Điều khoản sử dụng'},
    {id:2,text:'Hướng dẫn thanh toán'},
    {id:3,text:'Đăng xuất'},
  ]
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "PROFILE":
      return{...state,user: action.data}
    case "PHONE":
      return { ...state, phone: action.phone }
    case 'CHECK':
      return { ...state, check: true }
    case 'MODALPROFILE' :
      return{...state,modalProfile: !state.modalProfile}
    default:
      return state;
  }
}