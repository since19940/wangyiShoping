import {GET_HOME_DATA,GET_NAVLIST,GET_BENEFIS} from "./mutation_types"
import $http from "../api"

const OK = 0;
export default {
    async getHomeInfo(store) {
        const body = await $http.reqHomeData()
         if(body.code===OK){
            store.commit(GET_HOME_DATA,body.data)
        }
        
    },
    async getHomeData(store){
    const body = await $http.reqHomeData()
        if(body.code===OK){
            store.commit(GET_NAVLIST,body.data.kingKongModule.kingKongList)
        }
    },

}