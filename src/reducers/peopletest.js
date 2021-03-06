const initialState = {
  user: {},
  count: 0,
  modalProfile: false,
  check: false,
  dataItem: [
    { id: 0, image: require('../img/vinh3.png'), text: 'Lịch trình của tôi' },
    { id: 1, image: require('../img/vinh7.png'), text: 'Khuyến mại' },
    { id: 2, image: require('../img/vinh4.png'), text: 'Yêu thích' },
    { id: 3, image: require('../img/vinh6.png'), text: 'Đánh giá' },
    { id: 4, image: require('../img/vinh5.png'), text: 'Cài đặt' },
  ],
  dataSetting: [
    { id: 0, text: 'Chính sách bảo mật' },
    { id: 1, text: 'Điều khoản sử dụng' },
    { id: 2, text: 'Hướng dẫn thanh toán' },
    { id: 3, text: 'Đăng xuất' },
  ],
  modalReview: false,
  text: '',
  text1: '',
  fisrtname: '',
  lastname: '',
  picture: '',
  test: false,
  userInfo: {},
  phone: '',
  statusBar: true
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "STATUSBAR":
      return { ...state, statusBar: false }
    case "STATUSBARTRUE":
      return { ...state, statusBar: true }
    case "ITEMPROFILE":
      return { ...state, item: action.item }
    case "USERFACEBOOK":
      return { ...state, userInfo: action.userInfo }
    // case "MODE1":
    //   return { ...state, test: false }
    case "MODE":
      return { ...state, test: !state.test }
    case 'PICTURE':
      let newuser3 = [...state.user]
      newuser3.map((e) => {
        if (e.id === action.id) {
          e.avatar = action.avatar
        }
      })
      return { ...state, user: newuser3 }
    case 'TEXT':
      return { ...state, text: action.text }
    case 'LASTNAME':
      let newuser = [...state.user]
      newuser.map((e) => {
        if (e.id === action.id) {
          e.lastname = action.lastname
        }
      })
      return { ...state, user: newuser }
    case 'FISRTNAME':
      let newuser1 = [...state.user]
      newuser1.map((e) => {
        if (e.id === action.id) {
          e.fisrtname = action.fisrtname
        }
      })
      return { ...state, user: newuser1 }
    case 'PHONEEDIT':
      let newuser2 = [...state.user]
      newuser2.map((e) => {
        if (e.id === action.id) {
          e.phone = action.phone
        }
      })
      return { ...state, user: newuser2 }
    case 'TEXT1':
      return { ...state, text1: action.text1 }
    case "PROFILE":
      return { ...state, user: action.data }
    case "PHONE":
      return { ...state, phone: action.phone }
    case 'CHECK':
      return { ...state, check: true }
    case 'MODALPROFILE':
      return { ...state, modalProfile: !state.modalProfile }
    case 'MODALREVIEW':
      return { ...state, modalReview: !state.modalReview }
    default:
      return state;
  }
}