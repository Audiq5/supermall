<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>商品</li> 
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
    </ul>
  </div>
</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabControl/TabControl'

import { 
  getHomeMultidata,
  getHomeGoods
} from "network/home";


export default {
  name: "Home",
  components: {
   
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    getHomeGoods

    // getHomeMultidata

  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
     getHomeGoods('pop',1).then(res => {
      console.log(res);
    })
  }
   
};
</script>

<style>
#home{
    padding-top: 44px;
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
.tab-control{
  position: sticky;
  top: 44px;
}

</style>
