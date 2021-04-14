const initialState = {
    data: [
        {
            id: 0,
            img1: 'http://dulichdaiduong.vn/upload/dat-mua-ve-may-bay-di-sai-gon.jpg',
            img2: 'https://vietjet.net/includes/uploads/2018/01/ve-may-bay-dong-hoi-sai-gon-600x376.png',
            img3: 'https://bazantravel.com/cdn/medias/uploads/72/72780-du-thuyen-song-sai-gon-ve-dem-700x629.jpg',
            img4: 'https://image.thanhnien.vn/800/uploaded/thanhtrung/2020_03_28/sg13_rhjg.jpg',
            text1: 'TP Hồ Chí Minh',
            text2: '4 Ngày/4 đêm',
            price: '5,200,000 đ/ người',
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '08-13/01/2021',
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
                    name: 'Quận 1',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '120.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Quận 2',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 5,
                    amountKM: 45.6,
                    price: '50.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Quận 3',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 3,
                    amountKM: 15,
                    price: '150.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Quận 4',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 27,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
            ]
        },
        {
            id: 1,
            img1: 'https://nld.mediacdn.vn/2020/3/13/dsc7339-15840709916941262751452.jpg',
            img2: 'https://znews-photo.zadn.vn/w660/Uploaded/jaroin/2017_08_25/hoi_an_dem.jpg',
            img3: 'https://lh3.googleusercontent.com/proxy/ZWXxAPYfx-qVYdAFFCwaOEB4s-Et132NEBPd6-zQVbOQTgyaGJU087s1RkP-suqgTzlkpQ44e4uj5rqSvS6Ml1LlFn1oWkcnRel4t-Cd9tJ-p1YeGXK67w',
            img4: 'https://image.thanhnien.vn/768/uploaded/cuongnv/2020_09_22/img_4223_wvgq.jpg',
            text1: 'Hội An, Đà Nẵng',
            text2: '4 Ngày 3 đêm',
            price: '5,200,000 đ/ người',
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '26 - 30/12/2019',
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
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '50.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 4,
                    amountKM: 27,
                    price: '120.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 5,
                    amountKM: 45.6,
                    price: '60.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
            ]
        },
        {
            id: 2,
            img1: 'https://btnmt.1cdn.vn/2020/10/27/sls-nhung-dia-diem-chup-anh-cuoi-dep-o-ninh-binh-03_0.jpg',
            img2: 'http://baochinhphu.vn//Uploaded/hoangtrongdien/2020_09_16/bien-so-ninh-binh.jpg',
            img3: 'https://dulichchat.com/wp-content/uploads/2019/07/review-ninh-binh-dulichchat-4.jpg',
            img4: 'https://wikidulich.org/wp-content/uploads/2019/06/photo-4-1546913289799903276687.jpg',
            text1: 'TP Ninh Bình',
            text2: '4 Ngày / 4 đêm',
            price: '5,200,000 đ/ người',
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '3 ngày 4 đêm',
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
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '300.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 3,
                    amountKM: 15,
                    price: '200.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 5,
                    amountKM: 20,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 31,
                    price: '60.000đ/ 2 vé/ 2 người'
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
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '4 ngày/ 4 đêm',
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
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 5,
                    amountKM: 27,
                    price: '150.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 3,
                    amountKM: 15,
                    price: '120.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 6,
                    amountKM: 40,
                    price: '50.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 27,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
            ]
        },
    ],

    finish: [
        {
            id: 0,
            img1: 'https://lh3.googleusercontent.com/proxy/11TnEoLZxZssxFn4fGpDFMWov5GrIAL9yJZy0YiKkGox9PuSFbFsdJFWIHNy59WmfTZC2VOcCC1L7_RfJuzm9YIjSKQ5A1GbQvdcLOkoHuwzMYLkQH98VQhhYQY',
            img2: 'http://media.hanoitv.vn/files/nguyennga/2020-12-03/a1.jpg',
            img3: 'https://tourdulichviet.com/storage/upload/images/800x600/tour-da-nang-ha-long.jpg',
            img4: 'https://image.thanhnien.vn/800/uploaded/thanhtrung/2020_03_28/sg13_rhjg.jpg',
            text1: 'Hạ Long , Quảng Ninh',
            text2: '4 Ngày/4 đêm',
            price: '5,200,000 đ/ người',
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '08-13/01/2021',
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
                    name: 'Quận 1',
                    time: '45 phút',
                    distance: '17km',
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '120.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Quận 2',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 5,
                    amountKM: 45.6,
                    price: '50.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Quận 3',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 3,
                    amountKM: 15,
                    price: '150.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Quận 4',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 27,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
            ]
        },
        {
            id: 1,
            img1: 'https://nld.mediacdn.vn/2020/3/13/dsc7339-15840709916941262751452.jpg',
            img2: 'https://znews-photo.zadn.vn/w660/Uploaded/jaroin/2017_08_25/hoi_an_dem.jpg',
            img3: 'https://lh3.googleusercontent.com/proxy/ZWXxAPYfx-qVYdAFFCwaOEB4s-Et132NEBPd6-zQVbOQTgyaGJU087s1RkP-suqgTzlkpQ44e4uj5rqSvS6Ml1LlFn1oWkcnRel4t-Cd9tJ-p1YeGXK67w',
            img4: 'https://image.thanhnien.vn/768/uploaded/cuongnv/2020_09_22/img_4223_wvgq.jpg',
            text1: 'Hội An, Đà Nẵng',
            text2: '4 Ngày 3 đêm',
            price: '5,200,000 đ/ người',
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '26 - 30/12/2019',
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
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '50.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 4,
                    amountKM: 27,
                    price: '120.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 5,
                    amountKM: 45.6,
                    price: '60.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
            ]
        },
        {
            id: 2,
            img1: 'https://btnmt.1cdn.vn/2020/10/27/sls-nhung-dia-diem-chup-anh-cuoi-dep-o-ninh-binh-03_0.jpg',
            img2: 'http://baochinhphu.vn//Uploaded/hoangtrongdien/2020_09_16/bien-so-ninh-binh.jpg',
            img3: 'https://dulichchat.com/wp-content/uploads/2019/07/review-ninh-binh-dulichchat-4.jpg',
            img4: 'https://wikidulich.org/wp-content/uploads/2019/06/photo-4-1546913289799903276687.jpg',
            text1: 'TP Ninh Bình',
            text2: '4 Ngày / 4 đêm',
            price: '5,200,000 đ/ người',
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '3 ngày 4 đêm',
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
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 4,
                    amountKM: 30,
                    price: '300.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 3,
                    amountKM: 15,
                    price: '200.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 5,
                    amountKM: 20,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 31,
                    price: '60.000đ/ 2 vé/ 2 người'
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
            pricePlanes: '2,600,000 đ/ người',
            avatar: 'http://linkvaobong88ag.com/wp-content/uploads/2020/11/khong-minh-thanh-15.jpg',
            time: '4 ngày/ 4 đêm',
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
                    timeCar: '25 phút',
                    day1: '5/12/2021',
                    Destination: 5,
                    amountKM: 27,
                    price: '150.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 1,
                    time1: '8:15',
                    img: require('../img/day2.png'),
                    name: 'Làng Chài Nhơn Hải',
                    time: '1 giờ',
                    distance: '15km',
                    timeCar: '25 phút',
                    day1: '6/12/2021',
                    Destination: 3,
                    amountKM: 15,
                    price: '120.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 2,
                    time1: '10:00',
                    img: require('../img/day3.png'),
                    name: 'Eo Gió',
                    time: '1 giờ 30 phút',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '7/12/2021',
                    Destination: 6,
                    amountKM: 40,
                    price: '50.000đ/ 2 vé/ 2 người'
                },
                {
                    imgId: 3,
                    time1: '14:00',
                    img: require('../img/day4.png'),
                    name: 'Bãi Đá Kỳ Co',
                    time: '3 giờ',
                    distance: '7km',
                    timeCar: '15 phút',
                    day1: '8/12/2021',
                    Destination: 4,
                    amountKM: 27,
                    price: '100.000đ/ 2 vé/ 2 người'
                },
            ]
        },
    ],
};

export default function MySchedule(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}