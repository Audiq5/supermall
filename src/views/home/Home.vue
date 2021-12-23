<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">好货铺</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="contentpulling"
    >
      <!-- 这里可以写驼峰 -->
      <!-- @pullingUp="loadMore" -->
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
      />
      <!-- tabclick是子组件tabcontrol传过来的事件，当tabcontrol被点击时，执行下面的方法 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 修饰.native 在需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符才能进行监听    -->
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

// 首页数据的请求
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
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      // 默认给false
      isShowBackTop: false
    };
  },
  computed: {
    // 将最新的展47478/商品列表
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求多个数据
    // getHomeMultidata().then(res => {
    //   // console.log(res);
    //   this.banner = res.data.banner.list;
    //   this.recommends = res.data.recommend.list;
    // });
    //  getHomeGoods('pop',1).then(res => {
    //   console.log(res);
    // })

    // 1.请求多个数据，调用了home.js的请求数据的函数
    // 这个函数调用的是methods里面的方法，将具体操作转移到methods里面去了
    this.getHomeMultidata();
    // 2.请求商品数据
    // getHomeGoods("pop", 1).then(res => {
    //     console.log(res);
    //   });.
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 通过事件总线接收goodslistitem传过来的事件
  },
  mounted() {


    const refresh = this.debounce(this.$refs.scroll.scroll.refresh); 

    this.$bus.$on("itemImg", () => {
      // console.log("itemImg");

      // 这里的refresh执行频率会很高 如上面打印每个图片监听执行一次，30次，refresh直译就是刷新
      // this.$refs.scroll.scroll.refresh(); //修改的为下面
      
      refresh();
    });
  },
  methods: {
    /*
    事件监听方法
     */
    // 传两个参数，一个是需要防抖的函数，一个是防抖的时间
    debounce(func, dealy) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this,args);
        }, dealy);
      };
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    contentpulling() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);

      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
      }, 2000);
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

    // 点击时返回到顶部
    backclick() {
      // 滚动到 x的0 y的0，500毫秒
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
        this.recommends = res.data.recommend.list;
      });
    },

    // 在外面再封装成一个函数，方便调用，内部执行封装的发送网络请求代码
    getHomeGoods(type) {
      // 先将等于0的page加1，请求的就是第一页
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 拿到空数组，将res.data.list使用... push进去
        this.goods[type].list.push(...res.data.list);
        // 当上一行push进去一组新的数据之后，页码要加1
        this.goods[type].page += 1;
        // 数据请求完成，并将新数据展示出来后调用，这是框架提供的函数
        this.$refs.scroll.finishPullUp();
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
  /* position: sticky; */
  /* display: sticky; */
  top: 40px;
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
