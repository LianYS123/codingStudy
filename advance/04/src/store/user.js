import us from '../service/user';

export default {
    state: {
        isLogin: !!localStorage.getItem('token')
    },
    mutations:{
        setLogin(state,value){
            state.isLogin = value;
        }
    },
    actions:{
        login({commit},userInfo){
            return us.login(userInfo).then(({token}) => {
                if(token){
                    console.log(token);
                    localStorage.setItem('token',token);
                    commit('setLogin',true);
                    return true;
                } else {
                    return false;
                }
            })
        }
    }
}