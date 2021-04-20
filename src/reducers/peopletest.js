const initialState = {
  user: [],
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
  Star: [
    { id: 0, text1: '1' },
    { id: 1, text1: '2' },
    { id: 2, text1: '3' },
    { id: 3, text1: '4' },
    { id: 4, text1: '5' },
  ],
  modalReview: false,
  text: '',
  text1: '',
  fisrtname: '',
  lastname: '',
  picture: '',
  test: false
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "MODE1":
      return { ...state, test: false }
    case "MODE":
      return { ...state, test: !state.test }
    case 'PICTURE':
      return { ...state, picture: action.picture }
    case 'TEXT':
      return { ...state, text: action.text }
    case 'LASTNAME':
      return { ...state, lastname: action.lastname }
    case 'FISRTNAME':
      return { ...state, fisrtname: action.fisrtname }
    case 'TEXT1':
      return { ...state, text1: action.text1 }
    case 'CHOOSE':
      let arr = [...state.Star]
      arr.map((item) => {
        if (item.id === action.id) {
          item.check = !item.check
        }
      })
      return { ...state, Star: arr }
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