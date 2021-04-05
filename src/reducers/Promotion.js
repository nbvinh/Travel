const initialState = {
  data: [
    {
      id: 0,
      img: require('../img/Promotion1.png'),
      text1: 'Giảm 300K khi nhập mã MEGA để đặt khách sạn',
      timeIN: '1/12',
      timeOut: '31/12',
      orderprice: 1000000,
      condition: false,
    },
    {
      id: 1,
      img: require('../img/Promotion2.png'),
      text1: 'Giảm 200K khi đặt Tour qua OKGO',
      timeIN: '1/12',
      timeOut: '31/12',
      orderprice: 1000000,
      condition: false,
    },
    {
      id: 2,
      img: require('../img/Promotion3.png'),
      text1: 'Đặt Tour trên OKGO để nhận voucher',
      timeIN: '1/10',
      timeOut: '31/11',
      orderprice: 0,
      condition: true,
    },
    {
      id: 3,
      img: require('../img/Promotion4.png'),
      text1: 'Giảm 300K khi đặt vé máy bay trên OKGO',
      timeIN: '1/10',
      timeOut: '15/11',
      orderprice: 500000,
      condition: true,
    },
    {
      id: 4,
      img: require('../img/Promotion5.png'),
      text1: 'Giảm 300K khi nhập mã MEGA để đặt khách sạn',
      timeIN: '1/12',
      timeOut: '31/12',
      orderprice: 2000000,
      condition: false,
    },
  ],
};

export default function Promotion(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}