import {GET_NAVLIST,GET_HOME_DATA} from "./mutation_types" //提取对应状态类型名称
export default {
    [GET_HOME_DATA](state, homeData) {
        state.homeData=homeData
    },
    [GET_NAVLIST](state,navList){
        state.navList = navList
    },
  
}