const initialState = {
    data: [
        {
            id: 0,
            label: 'Bạn có muốn đi Tp Hồ Chí Minh? OKGO có tất cả',
            day: '20/12/2019',
            time: '10:30',
            img: require('../img/vinh9.png'),
            color: 'rgba(255, 120, 0, 0.08)'
        },
        {
            id: 1,
            label: 'Bạn có một gơi ý mới: điểm đến tháng 12',
            day: '17/12/2019',
            time: '10:30',
            img: require('../img/vinh10.png'),
            color: 'rgba(255, 120, 0, 0.08)'
        },
        {
            id: 2,
            label: 'Bạn vừa nhận được Voucher Soa tậi Hà Nội khi đặt vé máy bay qua OKGO',
            day: '15/12/2019',
            time: '10:30',
            img: require('../img/vinh11.png'),
            color: 'rgba(255, 120, 0, 0.08)'
        },
        {
            id: 3,
            label: 'Đề xuất : Lặn ngắm San hô Phú Quốc',
            day: '15/12/2019',
            time: '10:30',
            img: require('../img/vinh12.png'),
            color: "rgba(255, 120, 0, 0.08)"
        },
        {
            id: 4,
            label: 'Bạn có một gợi ý mới: điểm đén tháng 12',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh13.png'),
            color: 'white'
        },
        {
            id: 5,
            label: 'Nhận ngay mã giảm giá tại nhà hàng Hải Sản Thịnh Phát khi đến Lý Sơn',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh14.png'),
            color: 'white'
        },
        {
            id: 6,
            label: 'Khám phá cung đường Bình Thuận, giảm giá di chuyển',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh15.png'),
            color: 'white'
        },
        {
            id: 7,
            label: 'Ninh Bình - điểm đến không thể bỏ lỡ',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh16.png'),
            color: 'white'
        },
        {
            id: 8,
            label: 'Trải nghiệm cung đường đèo Hà Giang. Tạo lịch trình trên OKGO để có chuyến đi hoàn hảo.',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh17.png'),
            color: 'white'
        },
        {
            id: 9,
            label: 'Giảm giá 20% đồ uống cho cặp đôi đến Đà Lạt',
            day: '15/12/2019',
            time: '10:30',
            img: require('../img/vinh18.png'),
            color: 'white'
        },
        {
            id: 10,
            label: 'Đề xuất cho bạn: Homestay Mộc Châu',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh19.png'),
            color: 'white'
        },
        {
            id: 11,
            label: 'Gợi ý điểm ngắm trọn hoàng hôn trên biển Lý Sơn',
            day: '12/12/2019',
            time: '10:30',
            img: require('../img/vinh20.png'),
            color: 'white'
        },
    ],
};

export default function Notification(state = initialState, action) {
    switch (action.type) {
        case 'NEWNOTIFICATION':
            let newarr = [...state.data]
            newarr.find((item) => {
                if (item.id === action.id) {
                    item.color = 'white'
                }
            })
            return { ...state, data: newarr }
        default:
            return state;
    }
}