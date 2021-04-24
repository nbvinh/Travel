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
      img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
      price: '500,000đ/ đêm',
      address: "An Hải Bắc, Sơn Trà, Đà Nẵng",
      timeOpen: " 05:00 - 23:00",
      priceDetails: "500.000đ - 6.950.00đ",
      map: require('../img/vinh57.png'),
      introduce1: require('../img/vinh58.png'),
      introduce2: require('../img/vinh59.png'),
      introduce3: require('../img/vinh60.png'),
      NearHotel: [
        {
          id: 0,
          text: 'Khách sạn Hoa Lư',
          text2: 'Khách sạn',
          text1: 'Hoa Lư, Ninh Bình',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/e1/73/nh-toan-c-nh.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '350,000đ/ đêm'
        },
        {
          id: 1,
          text: 'Emeralda Resort & Spa',
          text2: 'Resort',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '2,570,000đ/ đêm'
        },
        {
          id: 2,
          text: 'Naman Retreat',
          text2: 'Khách sạn',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000đ/ đêm'
        },
        {
          id: 3,
          text: 'The Vissai',
          text2: 'Khách sạn',
          text1: 'Tp.Ninh Bình, Ninh Bình',
          img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000đ/ đêm'
        },
      ]
    },
    {
      id: 1,
      text: 'Naman Retreat Resort Đà Nẵng',
      text2: 'Resort',
      text1: 'Hòa Hải, Đà Nẵng',
      img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
      img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
      img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '700,000đ/ đêm',
      address: "An Hải Bắc, Sơn Trà, Đà Nẵng",
      timeOpen: " 05:00 - 23:00",
      priceDetails: "700.000đ - 6.950.00đ",
      map: require('../img/vinh57.png'),
      introduce1: require('../img/vinh58.png'),
      introduce2: require('../img/vinh59.png'),
      introduce3: require('../img/vinh60.png'),
      NearHotel: [
        {
          id: 0,
          text: 'Khách sạn Hoa Lư',
          text2: 'Khách sạn',
          text1: 'Hoa Lư, Ninh Bình',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/e1/73/nh-toan-c-nh.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '350,000đ/ đêm'
        },
        {
          id: 1,
          text: 'Emeralda Resort & Spa',
          text2: 'Resort',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '2,570,000đ/ đêm'
        },
        {
          id: 2,
          text: 'Naman Retreat',
          text2: 'Khách sạn',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000đ/ đêm'
        },
        {
          id: 3,
          text: 'The Vissai',
          text2: 'Khách sạn',
          text1: 'Tp.Ninh Bình, Ninh Bình',
          img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000đ/ đêm'
        },
      ]
    },
    {
      id: 2,
      text: 'Mường Thanh Luxury Holiday',
      text2: 'Khách sạn',
      text1: 'Lý Sơn, Quảng Ngãi',
      img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '800,000đ/ đêm',
      address: "Thôn Đông, Xã An Vĩnh, Lý Sơn, Quảng Ngãi",
      timeOpen: " 05:00 - 23:00",
      priceDetails: "850.000đ - 6.950.00đ",
      map: require('../img/vinh57.png'),
      introduce1: require('../img/vinh58.png'),
      introduce2: require('../img/vinh59.png'),
      introduce3: require('../img/vinh60.png'),
      NearHotel: [
        {
          id: 0,
          text: 'Khách sạn Hoa Lư',
          text2: 'Khách sạn',
          text1: 'Hoa Lư, Ninh Bình',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/e1/73/nh-toan-c-nh.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '350,000đ/ đêm'
        },
        {
          id: 1,
          text: 'Emeralda Resort & Spa',
          text2: 'Resort',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '2,570,000đ/ đêm'
        },
        {
          id: 2,
          text: 'Naman Retreat',
          text2: 'Khách sạn',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000đ/ đêm'
        },
        {
          id: 3,
          text: 'The Vissai',
          text2: 'Khách sạn',
          text1: 'Tp.Ninh Bình, Ninh Bình',
          img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000đ/ đêm'
        },
      ]
    },
    {
      id: 3,
      text: 'Hotel Vịnh Hạ Long',
      text2: 'Khách sạn',
      text1: 'Quảng Ninh, Việt Nam',
      img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
      img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
      img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
      price: '500,000đ/ đêm',
      address: "Thành phố Hạ Long, Hạ LongF",
      timeOpen: " 05:00 - 23:00",
      priceDetails: "850.000đ - 6.950.00đ",
      map: require('../img/vinh57.png'),
      introduce1: require('../img/vinh58.png'),
      introduce2: require('../img/vinh59.png'),
      introduce3: require('../img/vinh60.png'),
      NearHotel: [
        {
          id: 0,
          text: 'Khách sạn Hoa Lư',
          text2: 'Khách sạn',
          text1: 'Hoa Lư, Ninh Bình',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/e1/73/nh-toan-c-nh.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '350,000đ/ đêm'
        },
        {
          id: 1,
          text: 'Emeralda Resort & Spa',
          text2: 'Resort',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '2,570,000đ/ đêm'
        },
        {
          id: 2,
          text: 'Naman Retreat',
          text2: 'Khách sạn',
          text1: 'Gia Viễn, Ninh Bình',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000đ/ đêm'
        },
        {
          id: 3,
          text: 'The Vissai',
          text2: 'Khách sạn',
          text1: 'Tp.Ninh Bình, Ninh Bình',
          img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000đ/ đêm'
        },
      ]
    },
  ],
  dataFind: [
    {
      id: 0,
      text: 'Khách sạn Hoa Lư',
      text2: 'Khách sạn',
      text1: 'Hoa Lư, Ninh Bình',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/e1/73/nh-toan-c-nh.jpg',
      img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
      img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
      img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
      price: '350,000đ/ đêm'
    },
    {
      id: 1,
      text: 'Emeralda Resort & Spa',
      text2: 'Resort',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
      img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
      img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '2,570,000đ/ đêm'
    },
    {
      id: 2,
      text: 'Naman Retreat',
      text2: 'Khách sạn',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '800,000đ/ đêm'
    },
    {
      id: 3,
      text: 'The Vissai',
      text2: 'Khách sạn',
      text1: 'Tp.Ninh Bình, Ninh Bình',
      img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
      img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
      img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
      price: '500,000đ/ đêm'
    },
  ],
  restaurant: [
    {
      id: 0,
      text: 'Nhà hàng Trung Tuyết',
      text2: 'Nhà hàng',
      text1: 'Thanh Bình, Ninh Bình',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/76/38/5e/nha-hang-trung-tuy-t.jpg',
      img1: 'https://media-cdn.tripadvisor.com/media/photo-p/15/0f/a4/c5/best-in-ninh-binh.jpg',
      img2: 'https://images.foody.vn/res/g15/143229/prof/s576x330/foody-mobile-6-jpg-763-635696385219917496.jpg',
      img3: 'https://travelgear.vn/blog/wp-content/uploads/2019/08/thit-de-ninh-binh.jpg',
      price: '20.000 - 400.000 đ'
    },
    {
      id: 1,
      text: 'Nhà hàng Thăng Long',
      text2: 'Nhà hàng',
      text1: 'Hoa Lư, Ninh Bình',
      img: 'https://scontent.smarttourism.vn/resources/portal/Images/NBH/superadminportal.nbh/NhaHang/Thang%20Long%20Restaurant/5.jpg_636615601281694320.jpg',
      img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
      img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
    {
      id: 2,
      text: 'Nhà hàng Long Hiền',
      text2: 'Nhà hàng',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://images.foody.vn/res/g24/230060/prof/s576x330/foody-mobile-2-jpg-151-635968485961806901.jpg',
      img1: 'https://topgo.vn/wp-content/uploads/2020/01/nha-hang-pho-ta-hien-11.jpg',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
    {
      id: 3,
      text: 'Nhà hàng Lạc Hồng',
      text2: 'Nhà hàng',
      text1: 'Tp.Ninh Bình, Ninh Bình',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/98/54/4c/nha-hang-l-c-h-ng.jpg',
      img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
      img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
      price: '40.000 - 300.000 đ'
    },
  ],
};

export default function Hotel(state = initialState, action) {
  switch (action.type) {
    case "TYPE":
      return { ...state, typeHotel: action.typeHotel }
    case "ITEM":
      return { ...state, item: action.item }
    default:
      return state;
  }
}