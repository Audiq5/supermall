<template>
  <div class="goods">
                                               <!--将每一个小item的数据传给子组件goods-item  -->
    <goods-list-item v-for="(item, index) in goods" :key="index"  :goods-item="item"/>
    <!-- {{ goods }} -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      defalut() {
        return [];
      }
    }
  }
};
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
</style>
