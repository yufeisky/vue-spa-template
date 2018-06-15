/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/giftList',
  response: function (req, res) {
    let json = {
      rCode:0,
      data:[
        {url:'http://sfestival.lizhi.fm/static/public/luckdraw.png',name:'礼物一'},
        {url:'http://sfestival.lizhi.fm/static/public/luckdraw.png',name:'礼物二'},
        {url:'http://sfestival.lizhi.fm/static/public/luckdraw.png',name:'礼物三'},
      ],
      msg:'11112'
    }
    res.send(json);
  }
}