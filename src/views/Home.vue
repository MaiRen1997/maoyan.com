<template>
  <div>
    <router-view></router-view>
    <!-- <section class="header"> -->
      <!-- <Myheader :has-back="true" /> -->
      <!-- <myheader :has-back="true"></myheader> -->
      <!-- <MyNavTab /> -->
      <!-- <my-nav-tab></my-nav-tab> -->
    <!-- </section> -->

    <!-- <section class="wrapper">
      <div>
        <MyPopular :list="hot_result" />
        <MyMovieList :movie_list="movie_list" :isToBottom="isToBottom" />
        <my-movie-list :movie_list="movie_list"></my-movie-list>
      </div>
    </section> -->

    <!-- <MyFooter /> -->
    <my-footer></my-footer>
  </div>
</template>
<script>
//引入滚动获取数据模块
// import BetterScroll from "better-scroll";
// //引入方法模块
// import {
//   getRatedListApi,
//   getMovieListApi,
//   getMovieListMoreApi
// } from "../utils/api";
// // import Myheader from "@/components/home/MyHeader";
// import Myheader from "../components/MyHeader";
// import MyNavTab from "../components/myNavTab";
// import MyMovieList from "../components/MyMovieList";
// import MyPopular from "../components/MyPopular";
import MyFooter from "../components/MyFooter";
export default {
  // data() {
  //   return {
  //     hot_result: [],
  //     movie_list: [],
  //     //电影总条数
  //     count: 0,
  //     //所有电影的ids
  //     ids: [],
  //     //从哪个id开始
  //     start: 0,
  //     //每次获取的条数
  //     num: 5
  //   };
  // },
  components: {
    // Myheader,
    // MyNavTab,
    // MyMovieList,
    // MyPopular,
    MyFooter
  },
  // mounted() {
  //   /* this.getMoviePic();
  //   this.getMovieList(); */
  //   this.getRatedList();
  //   this.getMovieList();
  // },
  // computed: {
  //   isToBottom() {
  //     return this.start > this.count;
  //   }
  // },
  methods: {
    //获取热播图片
    /* getMoviePic() {
      fetch("http://pudge.wang:3080/api/rated/list")
        .then(respon => respon.json())
        .then(res => {
          this.hot_result = res.result;
        });
    }, */

    //获取电影详情信息
    /* getMovieList(){
      fetch("http://pudge.wang:3080/api/movies/list")
      .then(respon => respon.json())
      .then(respon => this.movie_list=respon.result)
    }, */
    //使用封装方法获取数据
    //获取受欢迎电影列表
    // async getRatedList() {
    //   const res = await getRatedListApi();
    //   if (res.status === 0) {
    //     console.log(res.result);
    //     this.hot_result = res.result;
    //   }
    // },
    // //获取首页电影列表
    // async getMovieList() {
    //   const res = await getMovieListApi();
    //   // if (res.status === 0) {
    //   //   this.movie_list = res.result;
    //   // }
    //   this.movie_list = res.result;
    //   this.count = res.count;
    //   this.ids = res.ids;
    //   this.start = this.movie_list.length;
    //   //等页面加载完成后，再进行下面的操作
    //   await this.$nextTick();
    //   let bs = new BetterScroll(".wrapper", {
    //     scrollX: false,
    //     scrollY: true,
    //     click: true,
    //     pullUpLoad: true
    //   });
    //   //监听滚动到底事件
    //   bs.on("pullingUp", async () => {
    //     //整理字符串
    //     const arr = this.ids.slice(this.start, this.start + this.num);
    //     const str = arr.join();
    //     //请求数据
    //     const res = await getMovieListMoreApi({
    //       ids: str
    //     });
    //     //将请求到的数据和之前的数据进行合并
    //     this.movie_list = this.movie_list.concat(res.result);
    //     this.start += this.num;
    //     //重新计算需要滚动的大小
    //     await this.$nextTick();
    //     bs.refresh();
    //     if (this.start <= this.count) {
    //       bs.finishPullUp();
    //     }
    //   });
    // }

    //上拉获取数据
  }
};
</script>

<style lang="scss" scoped>
section.header {
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

section.wrapper {
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
