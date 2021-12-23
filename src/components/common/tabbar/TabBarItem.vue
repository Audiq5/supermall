<template>
      <!-- 这里的监听点击事件，就是拿来做点击底部导航栏跳转的 -->
  <div class="tab-bar-item" @click="itemClick">


    <!-- 在外部套一个div 防止slot插槽使用时被替换导致class不起作用 -->
    <!-- 三个插槽，也就是tabbaritem组件可以在父组件直接使用三个可改变内容的插槽 -->

    <!-- 如果当前path和活跃path不同就执行黑色图片，否则执行红色图片，再改变item-text字体的颜色 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>  
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="" /> -->
    <!-- <div slot="item-text">首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
      // 传过来的颜色，没传默认红色
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // 谁活跃 就改变谁的颜色
      return this.$route.path.indexOf(this.path) !== -1; //非等-1也就是检测到两个path相同
    },
    activeStyle(){
      // 如果isactive为true执行color  ,否则false执行{}
      return this.isActive ? {color:this.activeColor} : {}
    }
  },

  methods: {
    itemClick() {
      // console.log("itmcilck");
      // this.$router.push(this.path)
      // 想有返回用push，不想有返回用replace
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px;z */
  box-shadow: 0 -1px 0 rgba(100, 100, 100, 0.2);
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 3px;
  /* 去除图片和字体的相隔空间 */
  vertical-align: middle;
}
/* .active {
  color: red;
} */
</style>
