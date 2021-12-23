<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  /* position: relative; */
  /* background-color: red; */
  margin-top: 15px;
  padding-bottom: 16px;
  /* margin-bottom: 15px; */
  display: flex;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 14px;
  padding: 10px 0 2 0px;
  border-bottom: 8px solid #eee;
  /* border-bottom: 5px solid red; */
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
