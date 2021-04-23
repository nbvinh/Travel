const initialState = {
    data: [
        { id: 0, provincial: 'Hà Nội', label: 'Thủ đô cổ kính và nhộn nhịp' },
        { id: 1, provincial: 'TP.Hồ Chí Minh', label: 'Thành Phố không bao giờ ngủ' },
        { id: 2, provincial: 'Phan Thiết', label: 'Thủ đô resort' },
        { id: 3, provincial: 'Lý Sơn', label: 'Vương quốc tỏi' },
        { id: 4, provincial: 'Sa Pa', label: 'Thành phố mù sương' },
        { id: 5, provincial: 'Đà Nẵng', label: 'Thành phố đáng sống nhất Việt Nam' },
        { id: 6, provincial: 'Phú Quốc', label: 'Đảo ngọc xanh biếc' },
        { id: 7, provincial: 'Hà Giang', label: 'Vùng đất thách thức' },
        { id: 8, provincial: 'Tam Đảo', label: 'Thị trấn mờ sương' },
        { id: 9, provincial: 'Hạ Long', label: 'Kỳ quan thế giới' },
        { id: 10, provincial: 'Ninh Bình', label: 'Cố đô Hoa Lư' },
    ],
    search: '',
    newsearch: [],
    dataRestaurant: []
};

export default function Search(state = initialState, action) {
    switch (action.type) {
        case "NEWARR":
            return { ...state, newsearch: action.newarr }
        case "SEARCH":
            return { ...state, search: action.search }
        default:
            return state;
    }
}