const initialState = {
    data: [
      { id: 0, text: 'SaPa', text1: 'Lào Cai', img: 'https://viettrekking.vn/wp-content/uploads/2020/01/30097580257_5b7be918f6_c-1.jpg' },
      { id: 1, text: 'Mộc Châu', text1: 'Sơn La', img: 'https://lh3.googleusercontent.com/proxy/4QBEcLYvZiabCvvGce9HKw_h0VghZIk2zbC7kUySpcFReFJWmJSNeUJbsQHosxXJhgb5CpgFtOHdyg2eqH0PNLdHfXwbvY8NcR5MGu0oDDFeDiiP8GkrcCImRTt_DuS488KzI2voeqArrkBj2fE' },
      { id: 2, text: 'Tam Đảo', text1: 'Vĩnh Phúc', img: 'https://img.nhandan.com.vn/Files/Images/2021/02/20/3D-1613814306516.jpg' },
      { id: 3, text: 'Đồng Văn', text1: 'Hà Nam', img: 'https://wiki-travel.com.vn/Uploads/Post/anhvo2804-192002032042-dongvanlungcu.jpg' },
    ],
  };
  
  export default function DecemberDestination(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }