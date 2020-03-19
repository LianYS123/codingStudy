
export const state = () => ({

})
export const actions = {
    // nuxtServerInit({commit},{app}){
    //     const token = app.cookies.token;
    //     console.log(token);
    //     if(token){
    //         commit('user/setToken',token);
    //     } 
    // },
    nuxtServerInit({commit},{app}){
        const token = app.$cookies.get('token');
        console.log('token:',token);
        if(token){
            commit("user/init",token);  //更新令牌
        }
    }
}
