const initialState = {
  data: [
    { id: 0, text: 'SaPa', text1: 'Đà Nẵng', img: 'https://img.nhandan.com.vn/Files/Images/2021/03/23/40692162_9381807_image_a_23_1616-1616460198504.jpg' },
    { id: 1, text: 'Mộc Châu', text1: 'Thừa Thiên Huế', img: 'https://kinhdoanhvatiepthi.vn/data/uploads/2019/06/1-1549259842892597995605-crop-1549259852756985792178.jpg' },
    { id: 2, text: 'Tam Đảo', text1: 'Ninh Bình', img: 'https://vcdn-dulich.vnecdn.net/2020/06/04/ninhbinh-lythanhco4-1591259984-9135-1591260195.jpg' },
    { id: 3, text: 'Đồng Văn', text1: 'Hà Nam', img: 'https://wiki-travel.com.vn/Uploads/Post/anhvo2804-192002032042-dongvanlungcu.jpg' },
  ],
};

export default function Review(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}