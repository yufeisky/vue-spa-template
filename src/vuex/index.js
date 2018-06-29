/**
 * Created by linbin on 18/16/15.
 */

import getGiftList from '../api/api';
console.log('getGiftList', getGiftList)
const index = {
    // namespaced: true,
    // 多页面共享数据    
    state: {
        giftList: [], //礼物列表
        productId: null, //商品id,
        liveId: null,
        taskId: null, //任务id
    },

    // 数据变更
    mutations: {
        getGiftData(state, data) {
            state.giftList = data.rewardList;
            state.productId = data.productId;
        },
        setUrlParm(state, data) {
            state.liveId = data.liveId;
            state.taskId = data.taskId;
        }
    },

    // 操作
    actions: {
        getGiftData({ state, commit }) {
            getGiftList(state.taskId).then((res) => {
                console.log('res----', res);
                commit('getGiftData', res)
            })
        }
    },
}

// 为每个 state 字段生成对应的 mutations 方法
// Object.keys(popup.state).forEach((key) => {
//   popup.mutations[key] = generate(key);
// });




export default index;