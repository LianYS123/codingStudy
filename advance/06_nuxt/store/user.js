export const state = () => ({
    // isLogin: false
    token: ''
})
export const mutations = {
    // setLoginState(state,isLogin){
    //     state.isLogin = isLogin;
    // },
    setToken(state,token){
        state.token  = token;
    }
}
export const actions = {
    login({commit},user){
        return this.$login(user).then(({token}) => {
            if(token){
                commit('setToken',token);
            }
            return !!token;
        });
    }
}
export const getters = {
    isLogin(){
        return !!token;
    }
}
