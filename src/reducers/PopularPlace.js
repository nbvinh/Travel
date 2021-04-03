const initialState = {
  data : [
      {id:0,text:'Lý Sơn, Quảng Ngãi',img: 'http://pystravel.vn/wp-content/uploads/2015/06/ly-son-pys-travel0061.jpg'},
      {id:1,text:'Nha Trang, Khánh Hòa',img: 'https://nhatrangsensetravel.com/view/at_tong-quan-du-lich-nha-trang_acc7a58da8c62a5da6d0d6d678a79618.jpg'},
      {id:2,text:'Phú Quốc, Kiên Giang',img: 'https://www.asas.com.vn/wp-content/uploads/2019/01/3430_tf_180426053143_680291.gif'},
      {id:3,text: 'Vịnh Hạ Long, Quảng Ninh',img: 'https://lh3.googleusercontent.com/proxy/YjDwt3saA_clqNx1VVkjrw0N6jZArjw9cHB1-fGLPn1ygEqh1FU_I-0GKxHLF6XruNSkK6acPkI4gb-N4rjh-IqX6rST2Burx96fiwhhuvVTuGuId6pUrKsQz2EYVZwMNw'},
  ],
};

export default function PopularPlace(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}