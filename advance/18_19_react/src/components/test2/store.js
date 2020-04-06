

function fruitReducer(state = [], action) {
    switch (action.type) {
        case 'init':
            return action.payload;
        case 'add':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default fruitReducer;