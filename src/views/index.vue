<template>
  <div class="first_recharge">
    <c-title :text="title" :type="`pay`"></c-title>
    <div class="desc">首次支付1元，即享价值百元豪华礼包</div>
    <div class="gift_box">
        <item v-for="p in list" :url="p.url" :name="`${p.name}`" :key="`${p.name}`"/>
        <!-- <item />
        <item /> -->
    </div>
    <div class="btn" @click="pay">一元抢</div>
    <!-- <router-link class="btn" to="success"  replace>一元抢</router-link> -->
    <!-- lzIcon-status-tick_circle -->
    <a class="protocol" href="javascript:;">
        <label @click="toggleProtocol"><i class="lzIcon-status-tick_circle_fill icon_proto" :class="`${isAgree?'yes':''}`"></i>我已阅读并同意</label>
        <span>购买服务协议</span>
    </a>
    <paySelectPopup :payFinishCallback="payFinish"   :productId="`2604096572172069939`"/>
  </div>
</template>

<script>

  import cTitle from 'components/title';
  import item from 'components/item';
  import paySelectPopup from 'components/paySelectPopup';
  import axios from 'axios';

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
        self.$router.replace('success');
      },
    },
    mounted () {
        let self = this;
        this.$store.dispatch('giftList');
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
            >span{
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
