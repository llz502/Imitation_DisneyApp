import getters from './getters'
import {
    SF,
    HF,
    MGMBT,
    LT
} from './type'

const state={
    footer:true,
    Mmenubody:false,
    Login:false
};
const mutations={
    [SF](state){
        state.footer=true
    },
    [HF](state){
        state.footer=false
    },
    [MGMBT](state){
        state.Mmenubody=!state.Mmenubody
    },
    [LT](state){
        state.Login=!state.Login
    }
}

export default {
    state,
    mutations,
    getters
}
