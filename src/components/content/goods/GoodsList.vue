<template>
  <div class="goods">
    <goods-list-item v-for="(item, key) in goods" :key="key"  :goods-item="item"/>
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
