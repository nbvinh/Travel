const initialState = {
  data: [
    { id: 0, text: 'Quảng Ngãi', text1: 'Lý Sơn', img: 'http://pystravel.vn/wp-content/uploads/2015/06/ly-son-pys-travel0061.jpg' },
    { id: 1, text: 'Khánh Hòa', text1: 'Nha Trang', img: 'https://nhatrangsensetravel.com/view/at_tong-quan-du-lich-nha-trang_acc7a58da8c62a5da6d0d6d678a79618.jpg' },
    { id: 2, text: 'Kiên Giang', text1: 'Phú Quốc', img: 'https://www.asas.com.vn/wp-content/uploads/2019/01/3430_tf_180426053143_680291.gif' },
    { id: 3, text: 'Quảng Ninh', text1: 'Vịnh Hạ Long', img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg' },
  ],
};

export default function PopularPlace(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}