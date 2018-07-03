<template>
  <div class="first_recharge" v-if="isReady">
    <c-title :text="title" :type="`pay`"></c-title>
    <div class="desc">首次支付1元，即享价值百元豪华礼包</div>
    <div class="gift_box">
        <item v-for="p in list" :url="p.url" :name="`${p.title}`" :key="`${p.title}`"/>
        <!-- <item />
        <item /> -->
    </div>
    <div class="btn" @click="pay">一元抢</div>
    <!-- <router-link class="btn" to="success"  replace>一元抢</router-link> -->
    <!-- lzIcon-status-tick_circle -->
    <div class="protocol">
        <label @click="toggleProtocol"><i class="lzIcon-status-tick_circle_fill icon_proto" :class="`${isAgree?'yes':''}`"></i>我已阅读并同意</label>
        <a href="javascript:;" @click="toProtocolPage">购买服务协议</a>
    </div>
    <paySelectPopup :payFinishCallback="payFinish" :productId="productId" :liveId="liveId" />
  </div>
</template>

<script>

  import cTitle from 'components/title';
  import item from 'components/item';
  import paySelectPopup from 'components/paySelectPopup';
  import axios from 'axios';
  import { getSearchParam } from 'utils/utils';
  export default {
    data () {
      return {
        title: '首充礼包',
        isAgree:true,
      }
    },
    computed:{
        list(){
            return this.$store.state.index.giftList
        },
        productId(){
            return this.$store.state.index.productId
        },
        liveId(){
            return this.$store.state.index.liveId
        },
        isReady(){
            return this.$store.state.index.isReady
        }
    },
    methods: {
      toggleProtocol(){
          let self = this;
          self.isAgree=!self.isAgree;
      },
      showPayPopup(){
        this.$store.commit('popup_show',{
            popup_show : true
        });
      },
      closePayPopup(){
        this.$store.commit('popup_show',{
            popup_show : false
        });
      },
      pay(){
          let self = this;
          if(self.isAgree){
            self.showPayPopup();
          }else{
              alert('请阅读并同意购买服务协议');
          }
      },
      payFinish(ret){
        let self = this;
        self.closePayPopup();
        lz.popupLiveGiftDialog({
                "liveId": `${self.liveId}`, // 转为字符串的liveId
                "tabPosition": 0 //礼物选中的tab，指第一个tab
        }).then((ret)=>{
            // alert(JSON.stringify(ret))
        })
        self.$router.replace('success');
      },
      toProtocolPage(){
          let self = this;
        //   lz.popupLiveGiftDialog({
        //         "liveId": `${self.liveId}`, // 转为字符串的liveId
        //         "tabPosition": 0 //礼物选中的tab，指第一个tab
        //   }).then((ret)=>{
        //       alert(JSON.stringify(ret))
        //   })
          lz.toAction({
                "action":{
                    "type": 7,
                    "url": "https://short.lizhi.fm/payment/coin-service.html",
                    "urlShareable": false, // 表示内部打开url是否可分享，默认为true
                    "isFull" : false, // 默认false, 不全屏。
                    "isLight" : false, // 默认false，显示深色icon。尽可能适配系统状态栏。仅isFull=true时有效。
                    "wk" : true
                } 
            })
      },
      getPageData(){
        let self = this;
        let liveId = getSearchParam('liveId');
        let taskId = getSearchParam('taskId');
        // alert('getToken')
        lz.ready(()=>{
            // alert('ready')
            lz.getToken().then((ret)=>{
                // alert(JSON.stringify(ret))
                if(ret.status==='success'){
                    let token = ret.token;
                    self.$store.commit('setUrlParm',{
                        liveId,
                        taskId,
                        token
                    });
                    self.$store.dispatch('getGiftData');                
                }   
            })
        })
        

        //本地调试代码
        let NODE_ENV = process.env.NODE_ENV;
        if(NODE_ENV==='development'){
            self.$store.commit('setUrlParm',{
                    liveId,
                    taskId,
                    token:'testToken'
            });
            self.$store.dispatch('getGiftData'); 
        }
      }
    },
    mounted () {
        let self = this;
        this.getPageData();        
    },
    components: {cTitle,item,paySelectPopup}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .first_recharge{
        width: 300px;
        height: 300px;
        background: url('../assets/images/first_recharge_bg.png');
        background-size: 100% 100%;
        .desc{
            // font-family: HappyZcool-2016;
            font-size: 14px;
            line-height: 14px;
            padding-bottom: 21px;
            letter-spacing: -0.3px;
            text-align: center;
            color: #ffffff;

        }
        .gift_box{
            display: flex;
            justify-content: center;
            width: 276px;
            margin: 0 auto;
        }
        .btn{
            display: inline-block;
            width: 172px;
            height: 36px;
            line-height: 36px;
            margin-top: 17px;
            border-radius: 18px;
            background-image: linear-gradient(247deg, #ffd53c, #ffc900 52%, #ffab00);
            box-shadow: 0 4px 16px 0 rgba(255, 229, 24, 0.22), inset 2px -2px 6px 0 #ff6200, inset -2px 6px 12px 0 rgba(255, 249, 136, 0.93);
            color: #000000;
        }
        .protocol{
            display: inline-block;
            font-size: 12px;
            letter-spacing: -0.2px;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            margin-top: 10px;
            >a{
                color: #10bfaf;
                padding-left:5px;
            }
            .icon_proto{
                position: relative;
                top: 4px;
                left: -2px;
                width: 16px;
                height: 16px;
                font-size: 16px;
                letter-spacing: -0.3px;
                text-align: center;
                &.yes{
                    color: #10bfaf;                    
                }
            }
        }
    }
</style>
