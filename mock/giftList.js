/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/task/reward/get',
    response: function(req, res) {
        // let json = {
        //     rCode: 0,
        //     data: [
        //         { url: 'http://sfestival.lizhi.fm/static/public/luckdraw.png', name: '礼物一' },
        //         { url: 'http://sfestival.lizhi.fm/static/public/luckdraw.png', name: '礼物二' },
        //         { url: 'http://sfestival.lizhi.fm/static/public/luckdraw.png', name: '礼物三' },
        //     ],
        //     msg: '11112'
        // }
        let json = {
            "rCode": 0,
            "msg": "成功",
            "data": {
                "productId": "2604096572172069939",
                "rewardList": [{
                    url: "http://sfestival.lizhi.fm/static/public/luckdraw.png",
                    title: "哈哈勋章1",
                    num: 1
                }, {
                    url: "http://sfestival.lizhi.fm/static/public/luckdraw.png",
                    title: "哈哈勋章2",
                    num: 2
                }, {
                    url: "http://sfestival.lizhi.fm/static/public/luckdraw.png",
                    title: "哈哈勋章3",
                    num: 3
                }]
            }
        }
        res.send(json);
    }
}