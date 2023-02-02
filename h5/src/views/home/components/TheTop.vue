<script setup lang="ts">
import type { ISearchRecomment } from '@/types'

interface IProps {
  recommits: ISearchRecomment[]
}

defineProps<IProps>()
</script>

<template>
  <div class="home-top">
    <div class="top">
      <van-icon name="location-o" size="24" />
      <div class="location">幸福小区(北一区东南门)</div>
      <van-icon name="shopping-cart-o" size="24" />
      <van-icon name="chat-o" dot size="24" class="comment-icon" />
    </div>
    <van-search
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      placeholder="世界茶饮35周年"
    >
      <template #right-icon>
        <div>搜索</div>
      </template>
    </van-search>
    <div class="search-recommend">
      <div v-for="v in recommits" :key="v.value" class="tag">{{ v.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: #fff;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 8px;
    font-size: 15px;
    font-weight: 600;
    .location {
      flex: 1;
    }
    .comment-icon {
      margin-left: 10px;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 10px 8px;
    .tag {
      font-style: 12px;
      border-radius: 10px;
      background: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>
<style lang="scss">
.home-top {
  .vant-field__right-icon {
    margin-right: 0;
  }
}
</style>
