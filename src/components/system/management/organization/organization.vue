<template>
    <div class="wrap">
        <managementSidebar></managementSidebar>
        <div class="content">我是内容区域
            <div>{{count}},,{{isShow}}</div>
            <div @click="increment">++</div>
            <div @click="decrement">--</div>
        </div>
        <div class="" @click="$store.commit('show_state')">点击显示</div>
        <div class="" @click="$store.commit('hide_state')">点击隐藏</div>
        <div class="" v-show="isShow">隐藏</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import managementSidebar from "./../../../common/managementSidebar";
export default {
    name: "organization",
    data() {
        return {

        }
    },
    computed: {
        count () {
            return  this.$store.state.count
        },
        isShow () {
            return  this.$store.state.isShow
        }
    },
    methods: {
        increment () {
            this.$store.commit('increment')
        },
        decrement () {
            this.$store.commit('decrement')
        }
    },
    components: {
        managementSidebar
    },
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 300px;
}
.content{
    width: 79%;
    height: 300px;
    float: right;
}
</style>
