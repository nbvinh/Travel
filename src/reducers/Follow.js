const initialState = {
    data : [
        {
            id:0,
            name: 'Đức Quyết',
            img: require('../img/avartarUser.png'),
            follow: 'Theo dõi',
            following: 'Đang theo dõi'
        },
        {
            id:1,
            name: 'Mai Linh',
            img: require('../img/MaiLinh.png'),
            follow: 'Theo dõi',
            following: 'Đang theo dõi'
        },
        {
            id:2,
            name: 'Thanh Nga',
            img: require('../img/ThanhNga.png'),
            follow: 'Theo dõi',
            following: 'Đang theo dõi'
        },,
        {
            id:3,
            name: 'Ngọc Thắng',
            img: require('../img/NgocThang.png'),
            follow: 'Theo dõi',
            following: 'Đang theo dõi'
        },
        {
            id:4,
            name: 'Tùng Dương',
            img: require('../img/TungDuong.png'),
            follow: 'Theo dõi',
            following: 'Đang theo dõi'
        },
    ],
  };
  
  export default function Follow(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }