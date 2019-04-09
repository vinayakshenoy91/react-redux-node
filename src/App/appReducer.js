const initialState = {
    words: '',
    data: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETWORDS':
            return Object.assign({}, state, {
                words: action.payload
            });
        case 'SETDATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state
    }
}