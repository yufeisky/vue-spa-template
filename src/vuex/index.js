
/**
 * Created by linbin on 18/16/15.
 */

import getGiftList from '../api/api';
console.log('getGiftList',getGiftList)
  const index = {
    // namespaced: true,
    // 多页面共享数据    
    state: {
        giftList:[]
    },
  
    // 数据变更
    mutations: {
        giftList(state,list){
            state.giftList = list
        }
    },

    // 操作
    actions: {
        giftList({commit}){
            getGiftList().then((res)=>{
                commit('giftList',res)
            })
        }
    },
  }
  
  // 为每个 state 字段生成对应的 mutations 方法
  // Object.keys(popup.state).forEach((key) => {
  //   popup.mutations[key] = generate(key);
  // });
  
  
  
  
  export default index;