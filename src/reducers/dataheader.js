const initialState = {
    data : [
        {id:0,text:'Lịch trình',img: require('../img/plan.png')},
        {id:1,text:'Khách sạn',img: require('../img/img2.png')},
        {id:2,text:'Máy bay',img: require('../img/img3.png')},
        {id:3,text:'Combo',img: require('../img/img4.png')},
        {id:4,text:'Nhà hàng',img: require('../img/img5.png')},
        {id:5,text:'Cafe',img: require('../img/img6.png')}
    ],
  };
  
  export default function dataheader(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }