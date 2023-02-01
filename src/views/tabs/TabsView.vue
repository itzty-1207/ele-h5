<script setup lang="ts">
import { ref } from 'vue'

// 记录当前选择的tab索引
const active = ref('home')
</script>

<template>
  <div class="center">{{ active }}</div>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="order" icon="bars">订单</van-tabbar-item>
    <van-tabbar-item name="mine" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.center {
  text-align: center;
}
</style>
