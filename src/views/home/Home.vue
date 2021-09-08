<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      
    >
    <!-- @pullingUp="loadMore" -->
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 修饰.native
            在需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符才能进行监听
     -->
    <back-top @click.native="backclick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    getHomeGoods,
    GoodsList,
    Scroll,
    BackTop
    // getHomeMultidata
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求多个数据
    // getHomeMultidata().then(res => {
    //   // console.log(res);
    //   this.banner = res.data.banner.list;
    //   this.recommend = res.data.recommend.list;
    // });
    //  getHomeGoods('pop',1).then(res => {
    //   console.log(res);
    // })

    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    // getHomeGoods("pop", 1).then(res => {
    //     console.log(res);
    //   });.
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*
    事件监听方法
     */
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // loadMore() {
    //   this.getHomeGoods(this.currentType)
    // },

    /* 
      网络请求
    */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content {
  height: calc(100% - 93px);
  overflow:hidden;
  margin-top: 44px;
} */
</style>
