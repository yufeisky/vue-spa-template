/**
 * Created by linbin on 18/16/15.
 */

import getGiftList from '../api/api';
console.log('getGiftList', getGiftList)
setTimeout(() => {
    console.log('__App__', __App__)
})

const index = {
    // namespaced: true,
    // 多页面共享数据    
    state: {
        giftList: [], //礼物列表
        productId: null, //商品id,
        liveId: null,
        taskId: null, //任务id
        token: null,
        isReady: false
    },

    // 数据变更
    mutations: {
        getGiftData(state, data) {
            state.giftList = data.rewardList;
            state.productId = data.productId;
            state.isReady = true;
        },
        setUrlParm(state, data) {
            state.liveId = data.liveId;
            state.taskId = data.taskId;
            state.token = data.token;
        }
    },

    // 操作
    actions: {
        getGiftData({ state, commit }) {
            getGiftList(state.taskId, state.token).then((res) => {
                console.log('res----', res);
                // alert(JSON.stringify(res))
                if (res.rCode === 0) {
                    commit('getGiftData', res.data)
                } else if (res.rCode === 5) {
                    window.location = '#success';
                    setTimeout(() => {
                        console.log('__App__', __App__)
                        __App__.$router.replace('success');
                    })
                }
            })
        }
    },
}

// 为每个 state 字段生成对应的 mutations 方法
// Object.keys(popup.state).forEach((key) => {
//   popup.mutations[key] = generate(key);
// });




export default index;