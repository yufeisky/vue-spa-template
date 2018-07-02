<template>
    <div v-show="show" class="wrap">
        <div class="content">
            <div class="title">选择支付方式
                <div @click="close" class="close"><i class="lzIcon-action-x"></i></div>
            </div>
            <div class="box">
                <div class="item alipay" @click="pay('4')">
                    <i class="lzIcon-brand-alipay"></i>
                    <span>支付宝支付</span>
                </div>
                <div class="item wechatpay" @click="pay('16')">
                    <i class="lzIcon-brand-wechat_payment"></i>
                    <span>微信支付</span>
                </div>
                <div class="item qqpay" @click="pay('64')">
                    <i class="lzIcon-brand-qq"></i>
                    <span>QQ钱包支付</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        'productId':{
            type:String,
        },
        'payFinishCallback':{
            type:Function
        },
        'liveId':{
            type:String
        }
    },
    computed:{
        show(){
            return this.$store.state.popup.popup_show;
        }
    },
    methods:{
        close(){
            this.$store.commit('popup_show',{
              popup_show : false
          });
        },
        pay(paymentType){
            console.log('paymentType',paymentType)
            let self = this;
            let p_id = this.productId;
            lz.getUdid().then((res)=>{
                let udid = res.udid;
                if(udid){
                    let extraData = {
                        liveId:self.liveId
                    }
                    lz.requestBuyProduct({
                        "productIdCountList": [{
                            "productId": `${p_id}`,
                            "count": "1",
                            "rawData": ''
                        }],
                        "receiverId": "0",
                        "paymentType": paymentType,
                        "extraData": `${JSON.stringify(extraData)}`,
                        "udid": udid
                    }).then((res)=>{
                        if(res.status!=='success'){
                            console.log('requestBuyProductCALL',JSON.stringify(res));
                        }
                    })
                }
            })
        },
        listenPayFinish(){
            console.log('监听支付成功回调');
            // alert('成功回调')
            let self = this;
            lz.on('payFinish', (ret) => {
                // alert(JSON.stringify(ret))
                if(ret.status=='success'){
                    self.payFinishCallback&&self.payFinishCallback.call&&self.payFinishCallback(ret);
                }
            })
        },
        // supportPayType(){
        //     lz.getSupportedPaymentTypeList().then((res)=>{
        //         console.log('getSupportedPaymentTypeList-----------支付方式',res);
        //         let paymentType = res.type;
        //         paymentType = paymentType.toString(16);
        //         console.log('paymentType16',paymentType);
        //         // console.log('大于零代表支持')
        //         console.log('微富通',`0x${paymentType}`&0x10);
        //         console.log('h5支付',`0x${paymentType}`&0x20);
        //         console.log('qq钱包',`0x${paymentType}`&0x40);
        //         console.log('苹果内购',`0x${paymentType}`&0x01);
        //         console.log('微信支付',`0x${paymentType}`&0x02);
        //         console.log('支付宝',`0x${paymentType}`&0x04);
        //         let isSupportQQ = `0x${paymentType}`&0x40;
        //         let isSupportWFT = `0x${paymentType}`&0x10;
        //         let isSupportAlipay = `0x${paymentType}`&0x04;
        //         console.log('isSupportQQ',isSupportQQ)
        //     })
        // }
    },
    mounted(){
        let self = this;
        lz.ready(()=>{
            this.listenPayFinish();
        })
    }
}
</script>

<style lang="scss" scoped>
    .wrap{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background:rgba($color: #000000, $alpha: .5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all;
        opacity: 1;
        .content{
            width: 83%;
            border-radius: 8px;
            min-height: 50px;
            background: #ffffff;
            .title{
                position: relative;
                height: 72px;
                line-height: 72px;
                .close{
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    right: 12px;
                    top: 12px;
                    color: rgba($color: #000000, $alpha: .3);
                    i{
                        position: absolute;
                        right: 0;
                        height: 20px;
                        line-height: 20px;
                        font-size: 20px;
                    }
                }
            }
            .box{
                padding-bottom: 14px;
                .item{
                    position: relative;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    text-align: left;
                    width: 87%;
                    height: 50px;  
                    line-height: 50px;
                    border-radius: 4px; 
                    color: #ffffff;  
                    i{
                        padding: 0 16px;
                        font-size: 24px;
                        position: absolute;
                        top: 4px;
                    }    
                    span{
                        display: inline-block;
                        height: 100%;
                        padding-left: 56px;
                    }             
                    &.alipay{
                        background-color: #4dc3f6;
                    } 
                    &.wechatpay{
                        background-color:#00c853;
                    } 
                    &.qqpay{
                        background-color: #000000;
                    }
                }
            }
        }
    }
</style>
