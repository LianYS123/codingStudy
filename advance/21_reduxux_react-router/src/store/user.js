
export const login = payload => dispatch => {
    dispatch({ type: 'loadingStart' })
    setTimeout(() => {
        dispatch({ type: 'loadingEnd' });
        dispatch({ type: 'login', payload: true });
    }, 1000);
};
export const logout = payload => ({ type: 'logout', payload });

export default function (state = { isLogin: false }, { type, payload }) {
    switch (type) {
        case 'login':
            return { ...state, isLogin: payload };
        case 'logout':
            return { ...state, isLogin: false };
        case 'loadingStart':
            return { ...state, loading: true };
        case 'loadingEnd':
            return { ...state, loading: false };
        default:
            return { ...state };
    }
}