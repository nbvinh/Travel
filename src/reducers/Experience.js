const initialState = {
  data: [
    {
      id: 0,
      text: 'Ngắm bình minh Phú Yên',
      text1: 'Phú Yên, Việt Nam',
      img: 'https://mangphuyen.com/wp-content/uploads/2019/06/hai-dang-dai-lanh-1.jpg',
      price: '1.000.000',
      mapaddress: {
        latitude: 13.5232757,
        longitude: 108.1051243,
      },
      marker: {
        latitude: 13.549059,
        longitude: 108.125472,
      }
    },
    {
      id: 1,
      text: 'Chinh phục Fanxipan',
      text1: 'Lào Cai, Việt Nam',
      img: 'https://thesuntourist.com/wp-content/uploads/2019/05/1548127579_chinh-phuc-dinh-fansifan-1.jpg',
      price: '8000.000',
      mapaddress: {
        latitude: 13.5232757,
        longitude: 108.1051243,
      },
      marker: {
        latitude: 13.118198,
        longitude: 108.852250,
      }
    },
    {
      id: 2,
      text: 'Trải Nghiệm là người dân bản',
      text1: 'SaPa, Việt Nam',
      img: 'https://www.chudu24.com/wp-content/uploads/2020/07/anhthuy1202-192222032254-du-lich-sapa-ban-cat-cat.jpg',
      price: '1.500.000',
      mapaddress: {
        latitude: 13.5232757,
        longitude: 108.1051243,
      },
      marker: {
        latitude: 13.118198,
        longitude: 108.852250,
      }
    },
    {
      id: 3,
      text: 'Đi du thuyền ra Vịnh Hạ Long',
      text1: 'QUảng Ninh, Việt Nam',
      img: 'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/116133106_3107313955984732_7173921754753671531_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=WMhTPSewzMgAX_4gbCq&_nc_ht=scontent.fhph1-1.fna&oh=6a093c029e84b3c32211b22dba578077&oe=60A84779',
      price: '2.000.000',
      mapaddress: {
        latitude: 13.5232757,
        longitude: 108.1051243,
      },
      marker: {
        latitude: 13.118198,
        longitude: 108.852250,
      }
    },
  ],
};

export default function Experience(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}