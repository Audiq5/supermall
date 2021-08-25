<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 在外部套一个div 防止slot插槽使用时被替换导致class不起作用 -->
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
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },

  methods: {
    itemClick() {
      console.log("itmcilck");
      // this.$router.push(this.path)
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
