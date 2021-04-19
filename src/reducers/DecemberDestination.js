const initialState = {
  data: [
    { id: 0, text: 'SaPa', text1: 'Lào Cai', img: 'https://viettrekking.vn/wp-content/uploads/2020/01/30097580257_5b7be918f6_c-1.jpg' },
    { id: 1, text: 'Mộc Châu', text1: 'Sơn La', img: 'https://lh3.googleusercontent.com/proxy/4QBEcLYvZiabCvvGce9HKw_h0VghZIk2zbC7kUySpcFReFJWmJSNeUJbsQHosxXJhgb5CpgFtOHdyg2eqH0PNLdHfXwbvY8NcR5MGu0oDDFeDiiP8GkrcCImRTt_DuS488KzI2voeqArrkBj2fE' },
    { id: 2, text: 'Tam Đảo', text1: 'Vĩnh Phúc', img: 'https://img.nhandan.com.vn/Files/Images/2021/02/20/3D-1613814306516.jpg' },
    { id: 3, text: 'Đồng Văn', text1: 'Hà Nam', img: 'https://wiki-travel.com.vn/Uploads/Post/anhvo2804-192002032042-dongvanlungcu.jpg' },
  ],
  DestinationFind: [
    { id: 0, text: 'Phố đi bộ', text1: 'Ninh Bình', img: 'https://icdn.dantri.com.vn/thumb_w/640/2018/11/19/pho-di-bo-12-15425942816211184813060.jpg' },
    { id: 1, text: 'Cổng chào', text1: 'Tràng An', img: 'https://danviet.mediacdn.vn/upload/3-2018/images/2018-07-16/22-1531730117-width640height426.jpg' },
    { id: 2, text: 'Quảng trường ', text1: 'Đinh Tiên Hoàng đế', img: 'https://vissaihotel.vn/photo/quang-truong-dinh-tien-hoang-de-1.jpg' },
    { id: 3, text: 'Hang Múa', text1: 'Ninh Bình', img: 'https://dulich.ninhbinh.vn/wp-content/uploads/2019/06/8.jpg' },
  ],
};

export default function DecemberDestination(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}