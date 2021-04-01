const initialState = {
    data : [
        {id:0,img: require('../img/Promotion1.png')},
        {id:1,img: require('../img/Promotion2.png')},
        {id:2,img: require('../img/Promotion3.png')},
        {id:3,img: require('../img/Promotion4.png')},
        {id:4,img: require('../img/Promotion5.png')},
    ],
  };
  
  export default function Promotion(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }