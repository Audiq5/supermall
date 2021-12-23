<template>
  <div class="wrapper" ref="aaaa">
      <ul class="content" >
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
      // console.log(this.$refs.aaaa);
      // console.log(document.querySelector('.wrapper'));
      
    this.scroll = new BS(this.$refs.aaaa,{
      // proe 侦测滚动 0,1都是不检测 2：在手指滚动的过程中侦测， 3只要是滚动都侦测\
      probeType : 3,
      // 上拉加载更多 开启
      pullUpLoad:true,
      // 默认阻止了浏览器的原生click事件，打开click，滚动区域的点击才能监听
      click:true
    // //

   })
  //  .on可以监听某个事件 监听滚动（scroll) 
     this.scroll.on('scroll',(position) => {
      console.log(position)
     })
      // 这是个事件名
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
  /* justify-content: ; */
  /* flex: ; */
}

</style>
