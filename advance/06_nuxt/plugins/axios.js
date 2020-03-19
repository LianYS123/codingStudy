export default function (ctx) {
    console.log('plugin ctx:', Object.keys(ctx));
    const { $axios, store } = ctx;
    $axios.onRequest(config => {
        if (store.state.user.token) {
            config.headers.Authorization = 'Bearer ' + store.state.user.token;
        }
    })
}