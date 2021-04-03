const initialState = {
    data : [
        {id:0,text:'Ngắm bình minh Phú Yên',text1:'Phú Yên, Việt Nam',img: 'https://mangphuyen.com/wp-content/uploads/2019/06/hai-dang-dai-lanh-1.jpg'},
        {id:1,text:'Chinh phục Fanxipan',text1:'Lào Cai, Việt Nam',img: 'https://thesuntourist.com/wp-content/uploads/2019/05/1548127579_chinh-phuc-dinh-fansifan-1.jpg'},
        {id:2,text:'Trải Nghiệm là người dân bản',text1:'SaPa, Việt Nam',img: 'https://www.chudu24.com/wp-content/uploads/2020/07/anhthuy1202-192222032254-du-lich-sapa-ban-cat-cat.jpg'},
        {id:3,text: 'Đi du thuyền ra Vịnh Hạ Long',text1:'QUảng Ninh, Việt Nam',img: 'https://lh3.googleusercontent.com/proxy/YjDwt3saA_clqNx1VVkjrw0N6jZArjw9cHB1-fGLPn1ygEqh1FU_I-0GKxHLF6XruNSkK6acPkI4gb-N4rjh-IqX6rST2Burx96fiwhhuvVTuGuId6pUrKsQz2EYVZwMNw'},
    ],
  };
  
  export default function Experience(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }