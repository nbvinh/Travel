const initialState = {
    DataContent: [
        { id: 0, icon: require('../img/vinh43.png'), label: 'Xuất phát', width: 10.87, height: 20 },
        { id: 1, icon: require('../img/vinh44.png'), label: 'Đích đến', width: 12.03, height: 18.27 },
        { id: 2, icon: require('../img/vinh45.png'), label: 'Thời gian', width: 16.62, height: 17 },
        { id: 3, icon: require('../img/vinh47.png'), label: 'Người tham gia', width: 20, height: 20 },
        { id: 4, icon: require('../img/vinh53.png'), label: 'Công khai', width: 18, height: 18 },
    ],
    ChooseTime: false,
    ChooseBudget: false,
    start: '',
    end: '',
    DataPerson: [
        { id: 0, label: 'Người lớn', text: 'trên 12 tuổi', quantity: 1 },
        { id: 1, label: 'Trẻ em', text: '2-11 tuổi', quantity: 1 },
        { id: 2, label: 'Em bé', text: 'dưới 2 tuổi', quantity: 1 },
    ]
};

export default function CreateSchedules(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}