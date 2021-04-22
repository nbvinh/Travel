const initialState = {
  data: [
    { id: 0, text: 'Lịch trình', img: require('../img/plan.png') },
    { id: 1, text: 'Khách sạn', img: require('../img/img2.png') },
    { id: 2, text: 'Máy bay', img: require('../img/img3.png') },
    { id: 3, text: 'Combo', img: require('../img/img4.png') },
    { id: 4, text: 'Nhà hàng', img: require('../img/img5.png') },
    { id: 5, text: 'Cafe', img: require('../img/img6.png') }
  ],
  hotel: [
    {
      id: 0,
      text: 'Đà Nẵng',
      text1: 'Cầu Vàng',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/164502898_150311316972187_860406980925349918_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=3bgVQFTSaRsAX9qBu4A&_nc_ht=scontent.fhph1-1.fna&oh=4b77dee9172fe520fb5b9a32519bab8e&oe=60A7B005',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
    },
    {
      id: 1,
      text: 'Thừa thiên Huế',
      text1: 'Hồ Thủy Tiên',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/158049273_843608922860145_869203344494317539_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0DJcKGm-3pQAX-lij90&_nc_ht=scontent.fhph1-1.fna&oh=bdf3be786f656f09b02261f33df3033a&oe=60A5D010',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
    },
    {
      id: 2,
      text: 'Sapa',
      text1: 'Chợ Đêm',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/155162470_827143531477759_2677271956170505077_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=kn_fW3AYi1YAX-Hfbk3&_nc_ht=scontent.fhph1-1.fna&oh=e6b4d782f6ea7b1225e482dfd46e5286&oe=60A734D7',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
    },
    {
      id: 3,
      text: 'Đà Lạt',
      text1: 'Thác Dambri',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/159766823_3779286475495871_3265049954274462513_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=CE0mzsZlX9EAX9qiWDS&_nc_ht=scontent.fhph1-2.fna&oh=89e4d1dc27b94a4d3fa08820d4dea83d&oe=60A851AB',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
    },
    {
      id: 4,
      text: 'Phú Quốc',
      text1: 'Hòn Thơm',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/102940372_311745526492812_188567651631203146_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=J-NvB3z1pn4AX-Xe5hD&_nc_ht=scontent.fhph1-1.fna&oh=b53cbbb2839263010298cdb13d4b02f7&oe=60A738FB',
      name: 'Đảo Lý Sơn - Vương quốc tỏi',
      label: 'Đảo Lý Sơn không chỉ được mệnh danh là “Vương quốc tỏi” mà còn có “Đảo ngọc” Cù Lao Ré. Sức hút của đảo Lý Sơn nằm ở chiến tích lịch sử lẫy lừng, ở những con người miền...',
    },
  ],
  Homestay: [
    {
      id: 0,
      text: 'Làng Homestay',
      text2: 'Khách sạn',
      text1: 'Mộc Châu, Sơn La',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/175923875_308293780903024_4470687127340928599_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=dHnwtbuMCKoAX_NgwGT&_nc_ht=scontent.fhph1-1.fna&oh=82d9e398319ec8fbb02bf0f1681e7952&oe=60A69E5C',
      price: '350,000đ/ đêm'
    },
    {
      id: 1,
      text: 'Homestay Villa',
      text2: 'Homestay',
      text1: 'Sóc Sơn, Hà Nội',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/175424403_463682364964086_5789670135436356086_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=F4-vC3h_dEkAX91GMqa&_nc_ht=scontent.fhph1-1.fna&oh=4b3e1d8f02cc051e76d13615385a81d9&oe=60A539A6',
      price: '2,570,000đ/ đêm'
    },
    {
      id: 2,
      text: 'Naman Retreat',
      text2: 'Khách sạn',
      text1: 'Đà Nẵng',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/117389584_302982944150468_6691127627304213381_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=HfubuwT2i8MAX_k5OnS&_nc_ht=scontent.fhph1-2.fna&oh=e39ee31fcdc025f709a51f1f176f584c&oe=60A82C0A',
      price: '800,000đ/ đêm'
    },
    {
      id: 3,
      text: 'Palm HomeStay',
      text2: 'HomeStay',
      text1: 'Tp.Ninh Bình, Ninh Bình',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/176540805_525709685254351_2276119648129436866_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=g8rsm9Mn7LgAX8MebIO&_nc_ht=scontent.fhph1-1.fna&oh=a3fea7919c83bc4186e084b332261424&oe=60A8A5AB',
      price: '500,000đ/ đêm'
    },
  ],
  couple: [
    {
      id: 0,
      text: 'Couple Nest',
      text2: 'Khách sạn',
      text1: 'Quận 7, TP.HCM',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/176558754_943821073058857_2286779286524736231_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=jP_QeFMxQyoAX8K0xKN&_nc_ht=scontent.fhph1-1.fna&oh=573ce062e7343d52efcf83d564c66f1e&oe=60A844AB',
      price: '350,000đ/ đêm'
    },
    {
      id: 1,
      text: 'Nghìn lẻ một đêm',
      text2: 'Khách sạn',
      text1: 'Bình Chánh, TP.HCM',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/174642935_483923142730492_6747109907314615568_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=gFaAl1hNVV4AX8eIIed&_nc_ht=scontent.fhph1-1.fna&oh=2fd01805651c10f85961174970fd2b49&oe=60A8CB09',
      price: '2,570,000đ/ đêm'
    },
    {
      id: 2,
      text: 'Bonita Grand',
      text2: 'Khách sạn',
      text1: 'Quận 5, TP.HCM',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/117389584_302982944150468_6691127627304213381_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=HfubuwT2i8MAX_k5OnS&_nc_ht=scontent.fhph1-2.fna&oh=e39ee31fcdc025f709a51f1f176f584c&oe=60A82C0A',
      price: '800,000đ/ đêm'
    },
    {
      id: 3,
      text: 'Bonita Signature',
      text2: 'HomeStay',
      text1: 'Quận 1, TP.HCM',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/175359240_482500676536281_1854418461273015270_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=DE6FymXOY9wAX80McT-&_nc_ht=scontent.fhph1-1.fna&oh=e8c1e262dded91413770a37a22d54132&oe=60A77E93',
      price: '500,000đ/ đêm'
    },
  ],
  RestaurantData: [
    {
      id: 0,
      text: 'Nhà hàng Ngự Uyển',
      text2: 'Nhà hàng',
      text1: 'Nguyễn Huệ, TP Huế',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/176107538_842003846381084_6547774378857865418_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=4y7iXQZOH1sAX-YJl-k&_nc_ht=scontent.fhph1-2.fna&oh=32ee92de637fd0cb2d90113e0615188f&oe=60A81C06',
      img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
      img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
      img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
      price: '20.000 - 400.000 đ'
    },
    {
      id: 1,
      text: 'Nhà hàng Thăng Long',
      text2: 'Nhà hàng',
      text1: 'Hoa Lư, Ninh Bình',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/173531580_1084647338694219_6844891831539683746_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=WI9Bx07xAHEAX86ecPv&_nc_ht=scontent.fhph1-2.fna&oh=adb62c805fada3f2ddb2999099f9a407&oe=60A5CAA4',
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
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/175736544_297742305138777_2092346379076935012_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=pMQP5izcxigAX8GYpCa&_nc_ht=scontent.fhph1-2.fna&oh=6b7c6d8c82d9576498b89de6d205d23c&oe=60A593C0',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
    {
      id: 3,
      text: 'Nhà hàng Long Hiền',
      text2: 'Nhà hàng',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/175736544_297742305138777_2092346379076935012_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=pMQP5izcxigAX8GYpCa&_nc_ht=scontent.fhph1-2.fna&oh=6b7c6d8c82d9576498b89de6d205d23c&oe=60A593C0',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
  ],
  RestaurantFamily: [
    {
      id: 0,
      text: 'Nhà hàng Mỹ Tường Viên',
      text2: 'Nhà hàng',
      text1: 'Hoàng Đạo Thúy, Hà Nội',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/175736544_297742305138777_2092346379076935012_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=pMQP5izcxigAX8GYpCa&_nc_ht=scontent.fhph1-2.fna&oh=6b7c6d8c82d9576498b89de6d205d23c&oe=60A593C0',
      img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
      img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
      img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
      price: '50.000 - 600.000 đ'
    },
    {
      id: 1,
      text: 'Khao Lao - Nhà hàng Lào',
      text2: 'Nhà hàng',
      text1: 'Nguyễn Chí Thanh, Hà Nội',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/173531580_1084647338694219_6844891831539683746_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=WI9Bx07xAHEAX86ecPv&_nc_ht=scontent.fhph1-2.fna&oh=adb62c805fada3f2ddb2999099f9a407&oe=60A5CAA4',
      img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
      img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '55.000 - 850.000 đ'
    },
    {
      id: 2,
      text: 'Nhà hàng Long Hiền',
      text2: 'Nhà hàng',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/175736544_297742305138777_2092346379076935012_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=pMQP5izcxigAX8GYpCa&_nc_ht=scontent.fhph1-2.fna&oh=6b7c6d8c82d9576498b89de6d205d23c&oe=60A593C0',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
    {
      id: 3,
      text: 'Nhà hàng Long Hiền',
      text2: 'Nhà hàng',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/176107538_842003846381084_6547774378857865418_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=4y7iXQZOH1sAX-YJl-k&_nc_ht=scontent.fhph1-2.fna&oh=32ee92de637fd0cb2d90113e0615188f&oe=60A81C06',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
  ],
  Cafe: [
    {
      id: 0,
      text: 'Quán gió',
      text2: 'Nhà hàng',
      text1: 'Tam Đảo, Vĩnh Phúc',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/105662632_1638271519657729_547942690650002861_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=HNR_bsV6FfoAX9T1Vmg&_nc_ht=scontent.fhph1-2.fna&oh=716ee87bbab72c45bca328cfb1ae116b&oe=60A72BD0',
      img1: 'https://pix10.agoda.net/hotelImages/358/3582444/3582444_17112918230060038374.jpg',
      img2: 'https://du-lich.chudu24.com/f/m/1712/25/nepn4377-hdr-1139515.jpg?w=550&c=1',
      img3: 'https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/11393/img_max/11393_1513224223_theherriotthotel&suite_16.jpg',
      price: '50.000 - 600.000 đ'
    },
    {
      id: 1,
      text: 'Cafe Horizon',
      text2: 'Nhà hàng',
      text1: 'Đà Lạt, Lâm Đồng',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/116794706_1623352834493492_7666182035178431476_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=g_8rhNN5ZSgAX-Q-0UT&_nc_ht=scontent.fhph1-1.fna&oh=933925d178c2e3cf18eaa5f2788e335f&oe=60A55E45',
      img1: 'https://q-cf.bstatic.com/images/hotel/max1024x768/120/120233599.jpg',
      img2: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120280555.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '55.000 - 850.000 đ'
    },
    {
      id: 2,
      text: 'Hidden Gem Coffee',
      text2: 'Nhà hàng',
      text1: 'Hà Nội',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/109770102_573515000002347_7503582465247688986_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=R3n_ewo1ybwAX8ssd6R&tn=BOLxxWAm1ikEQxwz&_nc_ht=scontent.fhph1-2.fna&oh=178ce16dd4017447f6bcd139e8e435d9&oe=60A54DEA',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
    {
      id: 3,
      text: 'Nhà hàng Long Hiền',
      text2: 'Nhà hàng',
      text1: 'Gia Viễn, Ninh Bình',
      img: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/176107538_842003846381084_6547774378857865418_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=4y7iXQZOH1sAX-YJl-k&_nc_ht=scontent.fhph1-2.fna&oh=32ee92de637fd0cb2d90113e0615188f&oe=60A81C06',
      img1: 'https://i2.wp.com/du-lich.net/wp-content/uploads/2019/07/Review-kh%C3%A1ch-s%E1%BA%A1n-Herriott-Hotel-%C4%90%C3%A0-N%E1%BA%B5ng-6.jpg?resize=810%2C539&ssl=1',
      img2: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--15-800x450.jpg',
      img3: 'https://www.hotel-board.com/picture/the-herriott-hotel-suite-hotel-15445282.jpg',
      price: '40.000 - 300.000 đ'
    },
  ],
};

export default function dataheader(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}