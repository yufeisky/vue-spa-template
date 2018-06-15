<template>
    <div v-show="a" class="wrap">
        支付弹窗
    </div>
</template>

<script>
export default {
    computed:{

    },
    mounted(){
        // console.log('store',this.$store)
        this.$store.commit('message', '欢迎使用 vue！');
    }
}
</script>

<style lang="scss" scoped>

</style>
