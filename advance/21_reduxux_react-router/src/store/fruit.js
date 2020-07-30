// mapDispatchToProps
export const init = payload => dispatch => dispatch({ type: 'init', payload });
export const add = payload => dispatch => dispatch({ type: 'add', payload });
export const minus = payload => dispatch => dispatch({ type: 'minus', payload });
export const setFruit = payload => dispatch => dispatch({ type: 'setFruit', payload });

export default function (state = { name: '水果', count: 0 }, { type, payload }) {
    switch (type) {
        case 'init':
            return { ...state, name: '香蕉', count: 1 };
        case 'add':
            return { ...state, count: state.count + 1 };
        case 'minus':
            return { ...state, count: state.count - 1 };
        case 'setFruit':
            return { ...state, name: payload };
        default:
            return {...state};
    }
}