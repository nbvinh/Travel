const initialState = {
    data : [
        {id:0,
            text:'The Herriott Hotel & Suite',
            text2:'Khách sạn',
            text1:'Phước Mỹ, Đà Nẵng',
            img: 'https://cdn1.ivivu.com/iVivu/2018/01/06/10/the-herriott-hotel--2-800x450.jpg',
            price :'500,000'
        },
        {id:1,text:'Naman Retreat Resort Đà Nẵng',text2:'Resort',text1:'Hòa Hải, Đà Nẵng',img: 'https://namanretreat.com/media/1813/beachfront-villa-1.jpg',price :'700,000'},
        {id:2,text:'Mường Thanh Luxury Phú Quốc',text2:'Khách sạn',text1:'Phú Quốc, Việt Nam',img: 'https://pix10.agoda.net/hotelImages/1624612/-1/e83069440bf0d6965fa4d3274b318ad4.jpg?s=1024x768',price :'800,000'},
        {id:3,text: 'Đi du thuyền ra Vịnh Hạ Long',text2:'Khách sạn',text1:'QUảng Ninh, Việt Nam',img: 'https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg',price :'500,000'},
    ],
  };
  
  export default function Hotel(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }