<template>
  <div class="wrapper">
    <ul class="content">
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
    </ul>
  </div>
</template>

<script>
import BS from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  created() {
    // new BS(".wrapper");
  },
  mounted() {
    // this.scroll = new BS(document.querySelector(".wrapper"),{
    this.scroll = new BS(this.$refs.aaaa,{
      // proe 侦测 0,1都是不检测 2：在手指滚动的过程中侦测， 只要是滚动都侦测
      probeType : 2,
      pullUpLoad:true,
    //
   })
     this.scroll.on('scroll',(position) => {
     console.log(position)
     })
     this.scroll.on('pullingUp', () => {
       console.log('上拉加载更多');
     })
  }
}

</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: #bfa;
  overflow: hidden;
}
</style>
