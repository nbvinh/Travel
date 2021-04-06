const initialState = {
    data: [
        {
            id: 0,
            img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
            img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
            img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
            img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
            text1: 'Đà Lạt, Lâm Đồng',
            text2: '5 Ngày',
            price: '5,200,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '10 giờ trước',
            name: 'Ha AAnh',
            day1: '5/12',
            day2: '6/12',
            day3: '7/12',
            day4: '8/12',
            imgday: [
                {
                    imgId: 0,
                    time1: '7:00',
                    img: require('../img/day1.png'),
                    name: 'Tháp đôi',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút'
                },
            ]
        },
        {
            id: 1,
            img1: 'https://vcdn1-dulich.vnecdn.net/2019/03/04/Eo-Gio-Quy-Nhon-Vnexpress-1551670722.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LkWX2wNYclDiZt1e4W-zrw',
            img2: 'https://www.vietnambooking.com/wp-content/uploads/2020/07/hon-kho-quy-nhon-1.jpg',
            img3: 'https://timchuyenbay.com/assets/uploads/2020/06/quy-nhon.jpg',
            img4: 'https://tourdulichviet.com/storage/upload/images/800x600/tour-ha-noi-quy-nhon-ky-co-eo-gio-4-ngay-3-dem.png',
            text1: 'Quy Nhơn, Bình Định',
            text2: '5 Ngày',
            price: '5,200,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '10 giờ trước',
            name: 'Ha AAnh',
            day1: '5/12',
            day2: '6/12',
            day3: '7/12',
            day4: '8/12',
            imgday: [
                {
                    imgId: 0,
                    time1: '7:00',
                    img: require('../img/day1.png'),
                    name: 'Tháp đôi',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút'
                },
            ]
        },
        {
            id: 2,
            img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
            img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
            img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
            img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
            text1: 'Đà Lạt, Lâm Đồng',
            text2: '3 Ngày',
            price: '5,200,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '10 giờ trước',
            name: 'Ha Vinh',
            day1: '5/12',
            day2: '6/12',
            day3: '7/12',
            day4: '8/12',
            imgday: [
                {
                    imgId: 0,
                    time1: '7:00',
                    img: require('../img/day1.png'),
                    name: 'Tháp đôi',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút'
                },
            ]
        },
        {
            id: 3,
            img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
            img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
            img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
            img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
            text1: 'Đà Lạt, Lâm Đồng',
            text2: '3 Ngày',
            price: '5,200,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '10 giờ trước',
            name: 'Ha Nam',
            day1: '5/12',
            day2: '6/12',
            day3: '7/12',
            day4: '8/12',
            imgday: [
                {
                    imgId: 0,
                    time1: '7:00',
                    img: require('../img/day1.png'),
                    name: 'Tháp đôi',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút'
                },
            ]
        },
        {
            id: 4,
            img1: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-15.jpg',
            img2: 'https://cdn.nhatrangbooking.com.vn/uploads/2020/03/03252020082945892-xenhatrangdalat1.jpg',
            img3: 'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/11_2019/thumbs/780_crop_quang_truong_lam_vien.jpg',
            img4: 'https://vcdn-dulich.vnecdn.net/2020/08/11/116375998-661232007934987-5849-7281-8339-1597143013.jpg',
            text1: 'Đà Lạt, Lâm Đồng',
            text2: '5 Ngày',
            price: '5,200,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '10 giờ trước',
            name: 'Ha Quy',
            day1: '5/12',
            day2: '6/12',
            day3: '7/12',
            day4: '8/12',
            imgday: [
                {
                    imgId: 0,
                    time1: '7:00',
                    img: require('../img/day1.png'),
                    name: 'Tháp đôi',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút'
                },
            ]
        },
    ],
};

export default function Schedule(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}