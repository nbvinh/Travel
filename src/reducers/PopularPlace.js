const initialState = {
  data: [
    {
      id: 0,
      text: 'Quảng Ngãi',
      text1: 'Lý Sơn',
      img: 'http://pystravel.vn/wp-content/uploads/2015/06/ly-son-pys-travel0061.jpg',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
      ScheduleOK: [
        {
          id: 0,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 1,
          img1: 'https://vcdn1-dulich.vnecdn.net/2019/03/04/Eo-Gio-Quy-Nhon-Vnexpress-1551670722.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LkWX2wNYclDiZt1e4W-zrw',
          img2: 'https://www.vietnambooking.com/wp-content/uploads/2020/07/hon-kho-quy-nhon-1.jpg',
          img3: 'https://timchuyenbay.com/assets/uploads/2020/06/quy-nhon.jpg',
          img4: 'https://tourdulichviet.com/storage/upload/images/800x600/tour-ha-noi-quy-nhon-ky-co-eo-gio-4-ngay-3-dem.png',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 2,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Vinh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 3,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Nam',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 4,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Quy',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
      ],
      HotelLySon: [
        {
          id: 0,
          text: 'CenTral Lý Sơn',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '500,000'
        },
        {
          id: 1,
          text: 'Mường Thanh Holiday',
          text2: 'Resort',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '700,000'
        },
        {
          id: 2,
          text: 'Mường Thanh Luxury',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000'
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
          price: '500,000'
        },
      ],
      Restaurant: [
        {
          id: 0,
          text: 'Hải Sản Khói Chiều',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://image.phunuonline.com.vn/news/2020/20200227/thumbnail/470x300/giai-cuu-tom-hum-xong-dot-nhien-bi-_1582808538.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '20.000 - 400.000 đ'
        },
        {
          id: 1,
          text: 'Hải Sản Thịnh Phát',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://canghaisan.com/wp-content/uploads/2020/11/81-2.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 2,
          text: 'Nhà hàng Long Hiền',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://owa.bestprice.vn/images/articles/uploads/diem-danh-cac-dia-chi-an-tom-hum-o-da-nang-ngon-bo-re-5f50acdb76c96.jpg',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 3,
          text: 'Nhà Hàng Vinh Anh',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://kinhnghiemdulichdn.com/wp-content/uploads/2018/04/6-min.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000'
        },
      ],
      Experience: [
        {
          id: 0,
          text: 'Ngắm bình minh Phú Yên',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://mangphuyen.com/wp-content/uploads/2019/06/hai-dang-dai-lanh-1.jpg',
          price: '1.000.000'
        },
        {
          id: 1,
          text: 'Chinh phục Fanxipan',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://thesuntourist.com/wp-content/uploads/2019/05/1548127579_chinh-phuc-dinh-fansifan-1.jpg',
          price: '8000.000'
        },
        {
          id: 2,
          text: 'Trải Nghiệm là người dân bản',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://www.chudu24.com/wp-content/uploads/2020/07/anhthuy1202-192222032254-du-lich-sapa-ban-cat-cat.jpg',
          price: '1.500.000'
        },
        {
          id: 3,
          text: 'Đi du thuyền ra Vịnh Hạ Long',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://lh3.googleusercontent.com/proxy/YjDwt3saA_clqNx1VVkjrw0N6jZArjw9cHB1-fGLPn1ygEqh1FU_I-0GKxHLF6XruNSkK6acPkI4gb-N4rjh-IqX6rST2Burx96fiwhhuvVTuGuId6pUrKsQz2EYVZwMNw',
          price: '2.000.000'
        },
      ]
    },
    {
      id: 1,
      text: 'Khánh Hòa',
      text1: 'Nha Trang',
      name: 'Nha Trang - Vương quốc tỏi',
      img: 'https://nhatrangsensetravel.com/view/at_tong-quan-du-lich-nha-trang_acc7a58da8c62a5da6d0d6d678a79618.jpg',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
      ScheduleOK: [
        {
          id: 0,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 1,
          img1: 'https://vcdn1-dulich.vnecdn.net/2019/03/04/Eo-Gio-Quy-Nhon-Vnexpress-1551670722.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LkWX2wNYclDiZt1e4W-zrw',
          img2: 'https://www.vietnambooking.com/wp-content/uploads/2020/07/hon-kho-quy-nhon-1.jpg',
          img3: 'https://timchuyenbay.com/assets/uploads/2020/06/quy-nhon.jpg',
          img4: 'https://tourdulichviet.com/storage/upload/images/800x600/tour-ha-noi-quy-nhon-ky-co-eo-gio-4-ngay-3-dem.png',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 2,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Vinh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 3,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Nam',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 4,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Quy',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
      ],
      HotelLySon: [
        {
          id: 0,
          text: 'CenTral Lý Sơn',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '500,000'
        },
        {
          id: 1,
          text: 'Mường Thanh Holiday',
          text2: 'Resort',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '700,000'
        },
        {
          id: 2,
          text: 'Mường Thanh Luxury',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000'
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
          price: '500,000'
        },
      ],
      Restaurant: [
        {
          id: 0,
          text: 'Hải Sản Khói Chiều',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://image.phunuonline.com.vn/news/2020/20200227/thumbnail/470x300/giai-cuu-tom-hum-xong-dot-nhien-bi-_1582808538.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '20.000 - 400.000 đ'
        },
        {
          id: 1,
          text: 'Hải Sản Thịnh Phát',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://canghaisan.com/wp-content/uploads/2020/11/81-2.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 2,
          text: 'Nhà hàng Long Hiền',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://owa.bestprice.vn/images/articles/uploads/diem-danh-cac-dia-chi-an-tom-hum-o-da-nang-ngon-bo-re-5f50acdb76c96.jpg',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 3,
          text: 'Nhà Hàng Vinh Anh',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://kinhnghiemdulichdn.com/wp-content/uploads/2018/04/6-min.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000'
        },
      ],
      Experience: [
        {
          id: 0,
          text: 'Ngắm bình minh Phú Yên',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://mangphuyen.com/wp-content/uploads/2019/06/hai-dang-dai-lanh-1.jpg',
          price: '1.000.000'
        },
        {
          id: 1,
          text: 'Chinh phục Fanxipan',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://thesuntourist.com/wp-content/uploads/2019/05/1548127579_chinh-phuc-dinh-fansifan-1.jpg',
          price: '8000.000'
        },
        {
          id: 2,
          text: 'Trải Nghiệm là người dân bản',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://www.chudu24.com/wp-content/uploads/2020/07/anhthuy1202-192222032254-du-lich-sapa-ban-cat-cat.jpg',
          price: '1.500.000'
        },
        {
          id: 3,
          text: 'Đi du thuyền ra Vịnh Hạ Long',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://lh3.googleusercontent.com/proxy/YjDwt3saA_clqNx1VVkjrw0N6jZArjw9cHB1-fGLPn1ygEqh1FU_I-0GKxHLF6XruNSkK6acPkI4gb-N4rjh-IqX6rST2Burx96fiwhhuvVTuGuId6pUrKsQz2EYVZwMNw',
          price: '2.000.000'
        },
      ]
    },
    {
      id: 2,
      text: 'Kiên Giang',
      text1: 'Phú Quốc',
      name: 'Phú Quốc - Vương quốc tỏi',
      img: 'https://www.asas.com.vn/wp-content/uploads/2019/01/3430_tf_180426053143_680291.gif',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
      ScheduleOK: [
        {
          id: 0,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 1,
          img1: 'https://vcdn1-dulich.vnecdn.net/2019/03/04/Eo-Gio-Quy-Nhon-Vnexpress-1551670722.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LkWX2wNYclDiZt1e4W-zrw',
          img2: 'https://www.vietnambooking.com/wp-content/uploads/2020/07/hon-kho-quy-nhon-1.jpg',
          img3: 'https://timchuyenbay.com/assets/uploads/2020/06/quy-nhon.jpg',
          img4: 'https://tourdulichviet.com/storage/upload/images/800x600/tour-ha-noi-quy-nhon-ky-co-eo-gio-4-ngay-3-dem.png',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 2,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Vinh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 3,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Nam',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 4,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Quy',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
      ],
      HotelLySon: [
        {
          id: 0,
          text: 'CenTral Lý Sơn',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '500,000'
        },
        {
          id: 1,
          text: 'Mường Thanh Holiday',
          text2: 'Resort',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '700,000'
        },
        {
          id: 2,
          text: 'Mường Thanh Luxury',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000'
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
          price: '500,000'
        },
      ],
      Restaurant: [
        {
          id: 0,
          text: 'Hải Sản Khói Chiều',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://image.phunuonline.com.vn/news/2020/20200227/thumbnail/470x300/giai-cuu-tom-hum-xong-dot-nhien-bi-_1582808538.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '20.000 - 400.000 đ'
        },
        {
          id: 1,
          text: 'Hải Sản Thịnh Phát',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://canghaisan.com/wp-content/uploads/2020/11/81-2.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 2,
          text: 'Nhà hàng Long Hiền',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://owa.bestprice.vn/images/articles/uploads/diem-danh-cac-dia-chi-an-tom-hum-o-da-nang-ngon-bo-re-5f50acdb76c96.jpg',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 3,
          text: 'Nhà Hàng Vinh Anh',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://kinhnghiemdulichdn.com/wp-content/uploads/2018/04/6-min.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000'
        },
      ],
      Experience: [
        {
          id: 0,
          text: 'Ngắm bình minh Phú Yên',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://mangphuyen.com/wp-content/uploads/2019/06/hai-dang-dai-lanh-1.jpg',
          price: '1.000.000'
        },
        {
          id: 1,
          text: 'Chinh phục Fanxipan',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://thesuntourist.com/wp-content/uploads/2019/05/1548127579_chinh-phuc-dinh-fansifan-1.jpg',
          price: '8000.000'
        },
        {
          id: 2,
          text: 'Trải Nghiệm là người dân bản',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://www.chudu24.com/wp-content/uploads/2020/07/anhthuy1202-192222032254-du-lich-sapa-ban-cat-cat.jpg',
          price: '1.500.000'
        },
        {
          id: 3,
          text: 'Đi du thuyền ra Vịnh Hạ Long',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://lh3.googleusercontent.com/proxy/YjDwt3saA_clqNx1VVkjrw0N6jZArjw9cHB1-fGLPn1ygEqh1FU_I-0GKxHLF6XruNSkK6acPkI4gb-N4rjh-IqX6rST2Burx96fiwhhuvVTuGuId6pUrKsQz2EYVZwMNw',
          price: '2.000.000'
        },
      ]
    },
    {
      id: 3,
      text: 'Quảng Ninh',
      text1: 'Vịnh Hạ Long',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
      ScheduleOK: [
        {
          id: 0,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 1,
          img1: 'https://vcdn1-dulich.vnecdn.net/2019/03/04/Eo-Gio-Quy-Nhon-Vnexpress-1551670722.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LkWX2wNYclDiZt1e4W-zrw',
          img2: 'https://www.vietnambooking.com/wp-content/uploads/2020/07/hon-kho-quy-nhon-1.jpg',
          img3: 'https://timchuyenbay.com/assets/uploads/2020/06/quy-nhon.jpg',
          img4: 'https://tourdulichviet.com/storage/upload/images/800x600/tour-ha-noi-quy-nhon-ky-co-eo-gio-4-ngay-3-dem.png',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha AAnh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 2,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Vinh',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 3,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '3 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Nam',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
        {
          id: 4,
          img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
          img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
          img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
          img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
          text1: 'Lý Sơn, Quảng Ngãi',
          text2: '5 Ngày',
          price: '5,200,000 đ/ người',
          avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
          time: '10 giờ trước',
          name: 'Ha Quy',
          day1: '5/12',
          day2: '6/12',
          day3: '7/12',
          day4: '8/12',
          imgday: [
            {
              imgId: 0,
              time1: '7:00',
              img: require('../img/day1.png'),
              name: 'Tháp đôi',
              time: '45 phút',
              distance: '17km',
              timeCar: '25 phút'
            },
            {
              imgId: 1,
              time1: '8:15',
              img: require('../img/day2.png'),
              name: 'Làng Chài Nhơn Hải',
              time: '1 giờ',
              distance: '15km',
              timeCar: '25 phút'
            },
            {
              imgId: 2,
              time1: '10:00',
              img: require('../img/day3.png'),
              name: 'Eo Gió',
              time: '1 giờ 30 phút',
              distance: '7km',
              timeCar: '15 phút'
            },
            {
              imgId: 3,
              time1: '14:00',
              img: require('../img/day4.png'),
              name: 'Bãi Đá Kỳ Co',
              time: '3 giờ',
              distance: '7km',
              timeCar: '15 phút'
            },
          ]
        },
      ],
      HotelLySon: [
        {
          id: 0,
          text: 'CenTral Lý Sơn',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '500,000'
        },
        {
          id: 1,
          text: 'Mường Thanh Holiday',
          text2: 'Resort',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '700,000'
        },
        {
          id: 2,
          text: 'Mường Thanh Luxury',
          text2: 'Khách sạn',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '800,000'
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
          price: '500,000'
        },
      ],
      Restaurant: [
        {
          id: 0,
          text: 'Hải Sản Khói Chiều',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://image.phunuonline.com.vn/news/2020/20200227/thumbnail/470x300/giai-cuu-tom-hum-xong-dot-nhien-bi-_1582808538.jpg',
          img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
          img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
          img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
          price: '20.000 - 400.000 đ'
        },
        {
          id: 1,
          text: 'Hải Sản Thịnh Phát',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://canghaisan.com/wp-content/uploads/2020/11/81-2.jpg',
          img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
          img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 2,
          text: 'Nhà hàng Long Hiền',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://owa.bestprice.vn/images/articles/uploads/diem-danh-cac-dia-chi-an-tom-hum-o-da-nang-ngon-bo-re-5f50acdb76c96.jpg',
          img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
          img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
          price: '40.000 - 300.000 đ'
        },
        {
          id: 3,
          text: 'Nhà Hàng Vinh Anh',
          text2: 'Nhà Hàng',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://kinhnghiemdulichdn.com/wp-content/uploads/2018/04/6-min.jpg',
          img1: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
          img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--1-800x450.jpg',
          img3: 'https://q-cf.bstatic.com/images/hotel/max1024x768/227/227459882.jpg',
          price: '500,000'
        },
      ],
      Experience: [
        {
          id: 0,
          text: 'Ngắm bình minh Phú Yên',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://mangphuyen.com/wp-content/uploads/2019/06/hai-dang-dai-lanh-1.jpg',
          price: '1.000.000'
        },
        {
          id: 1,
          text: 'Chinh phục Fanxipan',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://thesuntourist.com/wp-content/uploads/2019/05/1548127579_chinh-phuc-dinh-fansifan-1.jpg',
          price: '8000.000'
        },
        {
          id: 2,
          text: 'Trải Nghiệm là người dân bản',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://www.chudu24.com/wp-content/uploads/2020/07/anhthuy1202-192222032254-du-lich-sapa-ban-cat-cat.jpg',
          price: '1.500.000'
        },
        {
          id: 3,
          text: 'Đi du thuyền ra Vịnh Hạ Long',
          text1: 'Lý Sơn, Quảng Ngãi',
          img: 'https://lh3.googleusercontent.com/proxy/YjDwt3saA_clqNx1VVkjrw0N6jZArjw9cHB1-fGLPn1ygEqh1FU_I-0GKxHLF6XruNSkK6acPkI4gb-N4rjh-IqX6rST2Burx96fiwhhuvVTuGuId6pUrKsQz2EYVZwMNw',
          price: '2.000.000'
        },
      ]
    },
  ],
};

export default function PopularPlace(state = initialState, action) {
  switch (action.type) {
    case 'IDPOPULARPLACE':
      return { ...state, id: action.id }
    default:
      return state;
  }
}