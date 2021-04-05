const initialState = {
  data: [
    {
      id: 0,
      text: 'The Herriott Hotel & Suite',
      text2: 'Khách sạn',
      text1: 'Phước Mỹ, Đà Nẵng',
      img: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
      img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
      img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
      img3:'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
      price: '500,000'
    },
    {
      id: 1,
      text: 'Naman Retreat Resort Đà Nẵng',
      text2: 'Resort',
      text1: 'Hòa Hải, Đà Nẵng',
      img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
      img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
      img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
      img3:'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '700,000'
    },
    {
      id: 2,
      text: 'Mường Thanh Luxury Phú Quốc',
      text2: 'Khách sạn',
      text1: 'Phú Quốc, Việt Nam',
      img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3:'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '800,000'
    },
    {
      id: 3,
      text: 'Đi du thuyền ra Vịnh Hạ Long',
      text2: 'Khách sạn',
      text1: 'Quảng Ninh, Việt Nam',
      img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
      img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
      img3:'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
      price: '500,000'
    },
  ],
};

export default function Hotel(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}