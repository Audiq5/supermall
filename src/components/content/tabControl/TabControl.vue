<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
     :key="index" 
    class="tab-control-item" 
    :class="{active: index === currentIndex}"
     @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    // 这里的titles的内容 是手动添加的文字
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      // 当前的index
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      // 点击了谁就是当前index
      this.currentIndex = index
      // 给父组件传递有个选项卡的点击事件，再将index传给去，拿当前index作为三个选项卡数据请求的容器
      // 发出的事件名就叫tabclick，所以父组件监听点击的时候就要用@tabclick
      this.$emit('tabclick',index)
    }
  },
};
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
  .tab-control-item{
    flex: 1;
    border-bottom: hotpink;
    /* z-index: 9; */
  } 
  .tab-control-item span{
     padding-bottom: 3px;
  }
  .active{
    color: var(--color-tint);
    
  }
  .active span{
    border-bottom: 3px solid  var(--color-tint);
  }
</style>
