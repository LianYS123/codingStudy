export default function({$axios},inject) {
    inject('login',user => {
        return $axios.post('/api/login',user);
    })
}