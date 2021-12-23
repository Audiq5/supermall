<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    PullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 1.创建Bscroll对象

    (this.scroll = new BS(this.$refs.wrapper, {
      click: true,
      // observeImage:true,
      // observeDOM: true,
      // 从父组件传来的3
      probeType: this.probeType,
      // 父组件传来的是true
      pullUpLoad: this.PullUpLoad
    })),

      // 2.监听滚动的位置、
      this.scroll.on("scroll", position => {
        // 将滚动的position用scroll事件传给父组件
        this.$emit("scroll", position);
      });

    // // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      
    });
  },
  methods: {
    // 先封装的scrollto方法，改变这里的time不管用，在home调用
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  
  }
};
</script>
