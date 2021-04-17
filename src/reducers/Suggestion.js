const initialState = {
    filterMenu: 'COUPLE',
    data: [
        { id: 0, img: require('../img/vinh31.png'), label: 'Tâm linh' },
        { id: 1, img: require('../img/vinh32.png'), label: 'Văn hóa - Lịch sử' },
        { id: 2, img: require('../img/vinh33.png'), label: 'Kiến trúc' },
        { id: 3, img: require('../img/vinh34.png'), label: 'Ẩm thực' },
        { id: 4, img: require('../img/vinh35.png'), label: 'Biển' },
        { id: 5, img: require('../img/vinh36.png'), label: 'Mua sắm' },
        { id: 6, img: require('../img/vinh37.png'), label: 'Về đêm' },
        { id: 7, img: require('../img/vinh38.png'), label: 'Phượt' },
        { id: 8, img: require('../img/vinh39.png'), label: 'Spa làm đẹp' },
        { id: 9, img: require('../img/vinh40.png'), label: 'Thành phố' },
        { id: 10, img: require('../img/vinh41.png'), label: 'Mới lạ' },
        { id: 11, img: require('../img/vinh42.png'), label: 'Yên tĩnh' },
    ],
    DataContent: [
        { id: 0, icon: require('../img/vinh43.png'), label: 'Xuất phát', width: 10.87, height: 20 },
        { id: 1, icon: require('../img/vinh44.png'), label: 'Đích đến', width: 12.03, height: 18.27 },
        { id: 2, icon: require('../img/vinh45.png'), label: 'Thời gian', width: 16.62, height: 17 },
        { id: 3, icon: require('../img/vinh46.png'), label: 'Ngân sách', width: 18, height: 18 },
        { id: 4, icon: require('../img/vinh47.png'), label: 'Người tham gia', width: 20, height: 20 }
    ],
    ChooseTime: false,
    ChooseBudget: false,
    start: '',
    end: '',
    DataBudget: [
        { id: 0, price1: "1.000.000 ~ 2.000.000" },
        { id: 1, price1: "2.000.000 ~ 3.000.000" },
        { id: 2, price1: "3.000.000 ~ 4.000.000" },
        { id: 3, price1: "4.000.000 ~ 5.000.000" },
        { id: 4, price1: "5.000.000 ~ 6.000.000" },
    ],
    price: '',
    DataPerson: [
        { id: 0, label: 'Người lớn', text: 'trên 12 tuổi', quantity: 1 },
        { id: 1, label: 'Trẻ em', text: '2-11 tuổi', quantity: 1 },
        { id: 2, label: 'Em bé', text: 'dưới 2 tuổi', quantity: 1 },
    ]
};

export default function Suggestion(state = initialState, action) {
    switch (action.type) {
        case 'DOWN':
            let newPerson = [...state.DataPerson]
            newPerson.map((e) => e.quantity > 0 ? e.id === action.id ? e.quantity = e.quantity - 1 : null : null)
            return { ...state, DataPerson: newPerson }
        case 'UP':
            let newPersonUP = [...state.DataPerson]
            newPersonUP.map((e) => e.id === action.id ? e.quantity = e.quantity + 1 : null)
            return { ...state, DataPerson: newPersonUP }
        case 'PRICE':
            return { ...state, price: action.price }
        case "START":
            return { ...state, start: action.start }
        case "END":
            return { ...state, end: action.end }
        case "CHOOSETIME":
            return { ...state, ChooseTime: !state.ChooseTime }
        case "CHOOSEBUDGET":
            return { ...state, ChooseBudget: !state.ChooseBudget }
        case 'CHECK':
            let arr = [...state.data]
            arr.filter((item) => {
                if (item.id === action.id) {
                    item.check = !item.check
                }
            })
            return { ...state, data: arr }
        case 'FILTERTOUR':
            return { ...state, filterMenu: 'TOUR' }
        case 'FILTERFAMILY':
            return { ...state, filterMenu: 'FAMILY' }
        case 'FILTERGOALONE':
            return { ...state, filterMenu: 'GOALONE' }
        case 'FILTERCOUPLE':
            return { ...state, filterMenu: 'COUPLE' }
        default:
            return state;
    }
}